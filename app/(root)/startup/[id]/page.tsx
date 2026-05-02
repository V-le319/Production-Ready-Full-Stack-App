import { formatDate } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';


import React from 'react'



const page = async ({ params } : {params: Promise<{ id: string }>}) => {
    const id = (await params).id;
    const post = await client.fetch(STARTUP_BY_ID_QUERY, {id});
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
                            className="w-16 h-16 rounded-full drop-shadow-md"/>
                </Link>
              </div>
            </div>
    </section>
    
    </>
  )
}

export default page