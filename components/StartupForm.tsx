'use client'

import { useState } from "react"
import { Input } from "./ui/input"




const StartupForm = () => {
    const [errors, setErrors] = useState<Record<string, string>>({})
    /*Record<string, string> means "an object where both keys and values are strings" */
    
    {/*You could write { title: string, description: string, category: string } manually
     but Record<string, string> is shorter and works for any field name without listing them all upfront. */}
  
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
            
            {errors && <p className="startup-form_error">{errors.title}</p>}
        </div>

    </form>
  )
}

export default StartupForm