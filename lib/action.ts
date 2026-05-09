"use server";

import { auth } from "@/auth";
import { parseServerActionResponse } from "./utils";

export const createPitch = async(state: any, form: FormData, pitch: string) => {
    const session = await auth()
    if(!session) return parseServerActionResponse({error: "Not signED in", status: "ERROR" });

    const {title, description, category, link} = Object.fromEntries(
        Array.from(form).filter(([key]) => key !== 'pitch')
    )
}
