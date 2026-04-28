import React from 'react'
import Navbar from "@/components/Navbar"
import SearchForm from "@/components/SearchForm"
import StartupCard from '@/components/StartupCard'
import { client } from '@/sanity/lib/client';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';



export default async function home ({searchParams} : {searchParams: Promise<{ query?: string }>} )
 {

  /*this is the URL part */
    const query = (await searchParams).query;

    const posts = await client.fetch(STARTUPS_QUERY);
    console.log(JSON.stringify(posts, null, 2))

    {/*}
    const post = [
      {
        _createdAt: new Date(),
        views: "55",
        author: { _id: 1, name: "Alex" },
        _id: 1,
        description: "This is description.",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop",
        category: "Robot",
        title: "We Robots"
      }
    ]
    */}

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
            posts.map((posts: StartupCardType, index: number) => (
                <StartupCard key={posts?._id} post={posts}/>
            ))
        ) : ( <p className='no-result'>No Startups found</p>)}
      </ul>
    </section>
    
    </>
  )
}


