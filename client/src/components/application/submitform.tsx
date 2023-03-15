import React from "react";
import { useState } from "react";

import FileuploadPicker from "./FileuploadPicker";
import StarRating from "./StarRating";
import Emailinput from "./EmailInput"

//does not work yet, waiting for working API 


var origin_url: string = "/"
// "/" should be the origin page from where the feedback was submitted which will be read from the API which is implemented in customer webapplication

function Submitform() {
    const [company_id, setCompany_id] = useState(0);
    const [application_id, setApplication_id] = useState(0);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [email, setEmail] = useState("");
    const [file, setFile] = useState("");
    const [error, setError] = useState(null);

    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleChange = (event) => {
        if (event.target.checked) {
            console.log("✅ Checkbox is checked");
        } else {
            console.log("⛔️ Checkbox is NOT checked");
        }
        setIsSubscribed((current) => !current);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const feedback = { company_id, application_id, rating, comment, email, file };

        const response = await fetch('/api/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(feedback),
        }
        );
        const json = await response.json();
        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setCompany_id(0);
            setApplication_id(0);
            setRating(0);
            setComment('');
            setEmail('');
            setFile('');
            setError(null);
            console.log("Feedback submitted successfully", json);
        }
    }

    return (
        <>
            <div className="grid h-screen place-items-center">

                <form className="create" onSubmit={handleSubmit}>

                    <label className="app">
                        Please select the App you want to rate: &nbsp;
                        <select>
                            <option value="">
                                conditional rendering based on existing apps
                            </option>
                        </select>
                    </label>

                    <br />
                    <br />

                    <label className="rating">
                        Please rate this App from 1 to 5 <StarRating />
                    </label>

                    <br />

                    <label className="comment">
                        Add a comment &nbsp;
                        <textarea
                            rows={2}
                            cols={40}
                            placeholder="Please write a detailed comment about your submission"
                            onChange={(event) => { setComment(event.target.value) }}
                            value={comment}
                        />
                    </label>

                    <br />
                    <br />

                    <label className="upload_checkbox">
                        <input
                            type="checkbox"
                            checked={isSubscribed}
                            onChange={handleChange}
                            id="upload_checkbox"
                            name="upload_checkbox"
                            className="w-4 h-4 rounded-full"
                        />
                        &nbsp; I want to upload a file
                    </label>

                    <br />
                    <br />

                    {isSubscribed && <FileuploadPicker />}

                    <br />
                    <br />

                    <label className="email">
                        Email &nbsp;
                        <Emailinput />
                    </label>

                    <br />
                    <br />

                    <label className="submitbutton">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full">
                            <a href={origin_url}>
                                Submit
                            </a>
                        </button>
                    </label>

                    <br />
                    <br />

                    {error && <div className="error">{error}</div>}
                </form>

            </div>
        </>
    );
}

export default Submitform;
