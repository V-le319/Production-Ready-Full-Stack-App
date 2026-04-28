import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(`*[_type == "startup" && defined(slug.current)
 ] | order(_createdAt desc) {
  _id,
  title,
  createdAt,
  slug,
  author -> {
    _id,
    name,
    slug,
    bio
    },
  views, 
  description, 
  category, 
  immage
 }`)