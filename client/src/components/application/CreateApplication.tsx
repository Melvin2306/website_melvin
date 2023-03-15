import React from "react";
import { useState } from "react";

function CreateApplicationComponent() {
    const [name, setName] = useState("");
    const [company_id, setCompany_id] = useState("");
    const [error, setError] = useState(null);

    const get_company_id = async (event) => {
        event.preventDefault();

        const company_name_JSON = localStorage.getItem('company_name');
        const company_name_string = JSON.parse(company_name_JSON);

        // const response = await fetch('http://localhost:8080/api/companies/?name=${company_name_string}', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(response),
        // }
        // );

        const handleSubmit = async (event) => {
            event.preventDefault();

            const application = { name };

            const response = await fetch('/api/application', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(application),
            }
            );
            const json = await response.json();
            if (!response.ok) {
                setError(json.error);
            }
            if (response.ok) {
                setName('');
                setError(null);
                console.log("Application created successfully", json);
            }
        }




        return (
            <>
                <div className="flex flex-col justify-center items-center h-full">
                    <form className="create" onSubmit={handleSubmit}>
                        <label className="name">
                            Please enter the name of the application you want to rate: &nbsp;
                            <input
                                type="text"
                                value={name}
                                onBlur={get_company_id}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </>
        )
    }

}
export default CreateApplicationComponent
