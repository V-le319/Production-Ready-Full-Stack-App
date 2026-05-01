
import { defineField, defineType } from "sanity";

export const startup = defineType( {
    name: "startup",
    title: "Startup",
    type: "document",
    fields: [
         defineField( {
            name: "title",
            type: "string"
        }),
        defineField( {
            name: "slug",
            type: "slug",
            options: {
                source: 'title'
            }
        }),
       
        defineField( {
            name: "author",
            type: "reference",
            to: { type: 'author'}
        }),
        defineField( {
            name: "views",
            type: "number"
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text"
        }),
        defineField( {
            name: "category",
            type: "string",
            validation: (Rule) => Rule.min( 1).max(20).required().error("Please enter a category"),
        }),
        defineField({
            name: "immage",
            type: "url",
        }),
        defineField({
            name: "pitch",
            type: "markdown" /*plugin from Sanity npm install sanity-plugin-markdown */
        }),
    ],
    
})