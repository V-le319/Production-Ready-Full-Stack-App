import { formatDate } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import { PLAYLIST_BY_SLUG_QUERY, STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import markdownit from 'markdown-it'
import React, { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton';
import  View  from '@/components/View';
import StartupCard, { StartupTypeCard } from '@/components/StartupCard';

const md = markdownit();

const page = async ({ params } : {params: Promise<{ id: string }>}) => {
    const id = (await params).id;

    //Promise.all() allows you to pass 2 different calls - loading time is faster
    const [post, {select: editorPosts}] = await Promise.all([
      client.fetch(STARTUP_BY_ID_QUERY, {id}), 
      client.fetch( PLAYLIST_BY_SLUG_QUERY, {slug: "editor-picks-new"} )
    ]);

    //const post = await client.fetch(STARTUP_BY_ID_QUERY, {id});

    //const {select: editorPosts} = await client.fetch(
     // PLAYLIST_BY_SLUG_QUERY, {slug: "editor-picks-new"}
    //);

    if (!post) return notFound();

    const parseContent = md.render(post?.pitch || '')
  return (
    <>
    <section className="main_container !min-h-[250px]">
      <p className="tag">{formatDate(post?._createdAt)}</p>
      <h1 className="heading">{post.title}</h1>
      <p className="sub-heading !max-w-5xl">{post.description}</p>
    </section>

    <section className="section_container">
      <img src={post.immage} alt="thumbnail"
            className="w-full h-auto rounded-xl"/> 
            <div className="space-y-5 mt-10 mx-auto max-w-4xl">
              <div className="flex-between gap-5">
                <Link href={`user/${post.author?._id}`}
                      className="flex gap-2 items-center mb-3">
                    <Image src={post.author.image}
                            alt="avatar"
                            width={64}
                            height={64}
                            className="rounded-full drop-shadow-md"/>

                      <div>
                        <p className="text-xl font-medium">{post.author.name}</p>
                        <p className="text-base text-gray-600">@{post.author.username}</p>
                      </div>
                </Link>

                <p className="category-tag ">{post.category}</p>
              </div>

              <h3 className="text-3xl font-medium">Pitch Details</h3>
              {parseContent ? (
                <article
                  className="prose "
                  dangerouslySetInnerHTML={{__html: parseContent}}
                />
              ) : (
                <p className="no-result">No details provided</p>
              )}
            </div>
            <hr className="divider"/>

            {editorPosts?.length > 0 && (
              <div className="max-w-4xl mx-auto">
                <p className="text-3xl font-semibold">Editor Picks</p>
                <ul className="card_grid-sm mt-7">
                  {editorPosts.map((post: StartupTypeCard, i: number) => 
                  <StartupCard key={i} post={post}/>)}
                  
                </ul>
              </div>
            )} 

            
    </section>

              <Suspense fallback={<Skeleton className="view_skeleton"/>}>
                <View id={id}/>
              </Suspense>
    
    </>
  )
}

export default page