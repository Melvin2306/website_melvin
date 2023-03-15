import React from 'react'
import { useState } from 'react'

//does not work yet, waiting for working API 

function ContactForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const contact = { title, description, email };

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contact),
        }
        );
        const json = await response.json();
        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setTitle('');
            setDescription('');
            setEmail('');
            setError(null);
            console.log("contact submitted successfully", json);
        }
    }






    return (
        <>
            <div>
                <form>
                    <div className='grid grid-cols-5 grid-rows-4'>
                        <div>
                            <label className='row-start-1' htmlFor="title">Title</label>

                            <br />
                            <br />

                            <label className='row-start-2 h-auto' htmlFor="description">Description</label>

                            <br />
                            <br />

                            <label className='row-start-3' htmlFor="email">Email</label>

                            <br />
                            <br />

                            <input className='row-start-4' type="submit" id="submit" name="submit" value="Submit" />

                        </div>

                        <div className='col-start-2 col-span-4'>

                            <input className="w-80 row-start-1" type="text" id="title" name="title" maxLength={30} placeholder="Title"/>

                            <br />
                            <br />

                            <textarea className="w-80 row-start-2" id="description" name="description" maxLength={1000} placeholder="Description" />

                            <br />
                            <br />

                            <input className="w-80 row-start-3" type="email" id="email" name="email" maxLength={40} placeholder="Email" />

                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}
export default ContactForm