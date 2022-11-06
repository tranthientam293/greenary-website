import BreadCrumb from "../components/commons/BreadCrumb";
import BestEmployee, { TeamMates } from "../components/partials/OurTeam";
import Shipping from "../components/partials/Shipping";

const OurTeamView = () => {
  return (
    <>
      <BreadCrumb title={"Our Team"} />
      <BestEmployee />
      <TeamMates />
      <Shipping />
    </>
  );
};

export default OurTeamView;
