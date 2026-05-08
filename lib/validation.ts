import { z } from "zod"


export const formSchema = z.object({
    title: z.string().min(3).max(100),
    description: z.string().min(10).max(500),
    category: z.string().min(3).max(100),
    link: z.string()
            .url()
            .refine(async (url) => {
        try {
            const res = await fetch(url, {method: "HEAD"});
            const contentType = res.headers.get("content-type");
            if(contentType?.startsWith("image/")) {
                return true
            } else {
                return false
            } 
            /* the whole if can be written in short like this: (contentType?.startsWith("image/"))*/
        } catch {
            return false
        }
    }),
    pitch: z.string().min(10)
})