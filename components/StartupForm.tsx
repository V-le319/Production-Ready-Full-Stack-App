'use client'

import { useActionState, useState } from "react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

import { Button } from "./ui/button"
import { Send } from "lucide-react"
import { formSchema } from "@/lib/validation"
import { z } from "zod"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { createPitch } from "@/lib/action"





const StartupForm = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    /*Record<string, string> means "an object where both keys and values are strings" */

    {/*You could write { title: string, description: string, category: string } manually
     but Record<string, string> is shorter and works for any field name without listing them all upfront. */}
  
        const [pitch, setPitch] = useState("");
        const router = useRouter()
        

        const handleFormSubmit = async (prevState: any, formData: FormData) => {
                console.log("SUBMIT FIRED", Object.fromEntries(formData))
            try {
                    const formValues = {
                        title: formData.get("title") as string,
                        description: formData.get("description") as string,
                        category: formData.get("category") as string,
                        link: formData.get("link") as string,
                        pitch,
                    } 
                    /*now as we have formValue, we're gonna Validate those value */
                    await formSchema.parseAsync(formValues);
                    const result = await createPitch(prevState, formData, pitch)
              
                    // if(result.status == "SUCCESS") {
                    //      toast("SUCCESS", { description: "Your statup pitch has been created successfully!" });
                    // }

                     router.push(`/startup/${result._id}`);
                     return result;

                } catch (error) {
                     console.log(error) 
                    if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        setErrors(fieldErrors as unknown as Record<string, string>);
        toast("Error", { description: "Please check your inputs and try again!" });

        return { ...prevState, error: "Validation failed", status: "ERROR" };
    }
        //sonner Toaster is simplier than old shadcn Toaster with useToast()
    toast("Error", { description: "Something went wrong" });

    return {...prevState, error: "Something went wrong", status: "ERROR" };
                } finally {

                }
        };

        const [state, formAction, isPending] = useActionState(
            handleFormSubmit,
            {error: "", status: "INITIAL"},

         )
        
     return (
    <form className="startup-form"
            action={formAction}>
        
        <div>
            <label htmlFor="title"
            className="startup-form_label">
                Title
            </label>
            <Input id="title" name="title"
                    className="startup-form_input" required
                    placeholder="Startup Title"/>
            
            {errors.title && <p className="startup-form_error">{errors.title}</p>}
        </div>

        
        <div>
            <label htmlFor="description"
            className="startup-form_label">
                Description
            </label>
            <Textarea id="description" name="description"
                    className="startup-form_textarea" required
                    placeholder="Startup Description"/>
            
            {errors.description && <p className="startup-form_error">{errors.description}</p>}
        </div>

        
        <div>
            <label htmlFor="category"
            className="startup-form_label">
                Category
            </label>
            <Input id="category" name="category"
                    className="startup-form_input" required
                    placeholder="Startup Category (Tech, health, Education, ..."/>
            
            {errors.category && <p className="startup-form_error">{errors.category}</p>}
        </div>

        
        <div>
            <label htmlFor="link"
            className="startup-form_label">
                Image URL
            </label>
            <Input id="link" name="link"
                    className="startup-form_input" required
                    placeholder="Startup Image URL"/>
            
            {errors.link && <p className="startup-form_error">{errors.link}</p>}
        </div>

        <div data-color-mode="light">
            <label htmlFor="pitch"
            className="startup-form_label">
                Pitch
            </label>
            
          <Textarea
    id="pitch"
    name="pitch"
    className="startup-form_textarea"
    required
    placeholder="Briefly describe your idea and what problem it solves."
    value={pitch}
    onChange={(e) => setPitch(e.target.value)}
    rows={10}
/>
            
            {errors.pitch && <p className="startup-form_error">{errors.pitch}</p>}
        </div>

        <Button type="submit"
                className="startup-form_btn"
                disabled={isPending}>
                    {isPending ? "Submitting..." : "Submit Your Pitch"}
                  <Send className="size-6 ml-2" />
        </Button>

    </form> /*TODO ADDING SUBMIT LOGIC*/
  )
}

export default StartupForm