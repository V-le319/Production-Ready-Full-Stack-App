import { client } from '@/sanity/lib/client'
import { STARTUPS_BY_AUTHOR_QUERY } from '@/sanity/lib/queries'
import React from 'react'

const UserStartups = async ({ id } : { id: string }) => {
    const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, {id})
  return (
    <div>UserStartups</div>
  )
}

export default UserStartups