import { Application } from "../../pages/create-application";


export interface ApplicationDetailsProps {
  application: Application
}
const ApplicationDetails = ({ application }: ApplicationDetailsProps) => {
  return (
    <div className="application-details">
      <h4>{application.name}</h4>
    </div>
  );
};

export default ApplicationDetails;