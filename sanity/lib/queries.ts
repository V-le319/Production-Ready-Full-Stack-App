import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery
  (`*[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc) {
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
 }`);

 export const STARTUP_BY_ID_QUERY = defineQuery (`*[_type == "startup" && _id == $id][0]
 {
  _id,
  title,
  createdAt,
  slug,
  author -> {
    _id,
    name,
    username,
    slug,
    bio
    },
  views, 
  description, 
  category, 
  immage,
   pitch
 }`)