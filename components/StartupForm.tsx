'use client'

import { useActionState, useState } from "react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import MDEditor from '@uiw/react-md-editor'
import { Button } from "./ui/button"
import { Send } from "lucide-react"




const StartupForm = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    /*Record<string, string> means "an object where both keys and values are strings" */

    {/*You could write { title: string, description: string, category: string } manually
     but Record<string, string> is shorter and works for any field name without listing them all upfront. */}
  
        const [pitch, setPitch] = useState("");

        const handleFormSubmit = async (preState: any, formData: formData) => {
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
                    //const result = await createIdea(prevState, formData, pitch)
                console.log(result)
                } catch (error) {

                } finally {

                }
        };

        const [state, formAction, isPending] = useActionState(
            handleFormSubmit,
            {error: "", status: "INITIAL"},

         )
        
     return (
    <form className="startup-form"
            action={() => {}}>
        
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
          <MDEditor value={pitch}
                    onChange={(value) => setPitch(value as string)}
                    id="pitch"
                    preview="edit"
                    height={300}
                    style={{overflow: "hidden", borderRadius: 20}}
                    textareaProps={
                        {placeholder: "Briefly describe your idea and what problem it solves."}
                    }
                    previewOptions={{
                        disallowedElements: ["styles"]
                    }}
                    > {/* previewOptions prevents users from injecting CSS via style tags in markdown input */}

                    </MDEditor>
            
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