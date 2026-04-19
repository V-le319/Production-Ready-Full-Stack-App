import React from 'react'
import Navbar from '../components/Navbar'
import SearchForm from '../components/SearchForm'

export default async function home ({searchParams} : {searchParams: Promise<{ query?: string }>} )
 {

  /*this is the URL part */
    const query = (await searchParams).query;

  return (
    <>
    <section className="main_container">
      <h1 className="heading">Pitch Your Startup, <br/> Connect With Entrepreneurs</h1>
      <p className="sub-heading !max-text-3xl">Submit Ideas, Vote On Pitches, And Get Noticed in Virtual Competition.</p>
        <SearchForm query={query}/>
    </section>
    
    </>
  )
}


