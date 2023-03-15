import { useState } from "react"
import ReactDOMServer from "react-dom/server";

import CompanyDetails from "./CompanyDetails";

const CompanyForm = () => {
  const [name, setName] = useState("");
  const [nextStepLink, setNextStepLink] = useState(null);
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const company = { name };

    const response = await fetch("http://localhost:8080/api/companies", {
      method: "POST",
      body: JSON.stringify(company),

      headers: {
        "Content-Type": "application/json"
      }
    });

    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {

      setName("");
      setError(null);
      setNextStepLink(
        <a href="/signup">
          next step: sign up
        </a>
      );
      const companyId = company ? ReactDOMServer.renderToString(<CompanyDetails key={company.id} company={company} />) : "";
      localStorage.setItem("companyID", companyId);
      console.log("new company added");
      console.log(companyId);
    }
  };



  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Create a new company</h3>

      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <button>Create company</button>

      {nextStepLink}

    </form>
  );
};

export default CompanyForm
