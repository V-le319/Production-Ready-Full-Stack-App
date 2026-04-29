import React from 'react'
import Navbar from "@/components/Navbar"
import SearchForm from "@/components/SearchForm"
import StartupCard, { StartupTypeCard } from '@/components/StartupCard'
import { client } from '@/sanity/lib/client';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';



export default async function home ({searchParams} : {searchParams: Promise<{ query?: string }>} )
 {

  /*this is the URL part */
    const query = (await searchParams).query;

    const posts = await client.fetch(STARTUPS_QUERY);
    console.log(JSON.stringify(posts, null, 2))

  return (
    <>
    <section className="main_container">
      <h1 className="heading">Pitch Your Startup, <br/> Connect With Entrepreneurs</h1>
      <p className="sub-heading !max-text-3xl">Submit Ideas, Vote On Pitches, And Get Noticed in Virtual Competition.</p>
        <SearchForm query={query}/>
    </section>

    <section className="section_container">
      <p className="text-2xl">
        { query ? `Search results for "${query}"` : "All Startups"}
      </p>
      <ul className="mt-6 card-grid">
        {posts?.length > 0 ? (
            posts.map((posts: StartupTypeCard, index: number) => (
                <StartupCard key={posts?._id} post={posts}/>
            ))
        ) : ( <p className='no-result'>No Startups found</p>)}
      </ul>
    </section>
    
    </>
  )
}


