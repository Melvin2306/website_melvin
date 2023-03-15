import { Company } from "../pages/create-company";


export interface CompanyDetailsProps {
    company: Company
}
const CompanyDetails = ({ company }: CompanyDetailsProps) => {
  return (
    <>
    {company.name}
    </>
  );
};

export default CompanyDetails;
