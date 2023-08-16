import { TeamsCard } from "../../Components/TeamsCard/TeamsCard";
import "./TeamsPage.css";
import { counsellors, studentCouncil } from "./data";

function TeamsPage() {
  return (
    <div className="teams">
      <div className="counsellors">
        <h3>Branch - Counsellor</h3>
        <div className="grid">
          {counsellors?.map((counsellor, id) => {
            return (
              <div key={id}>
                <TeamsCard
                  profileUrl={counsellor.porfileUrl}
                  name={counsellor.name}
                  description={counsellor.description}
                  github={counsellor.github}
                  linkedin={counsellor.linkedin}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="studentCounsil">
        <h3>Student Council-2022-23</h3>
        <div className="grid">
          {studentCouncil?.map((member, id) => {
            return (
              <div key={id}>
                <TeamsCard
                  profileUrl={member.porfileUrl}
                  name={member.name}
                  description={member.description}
                  github={member.github}
                  linkedin={member.linkedin}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TeamsPage;
