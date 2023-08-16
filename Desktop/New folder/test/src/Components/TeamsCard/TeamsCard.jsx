import "./TeamsCard.css";
import git from "../../assets/github.svg";
import linkedi from "../../assets/linkedin.svg";

export const TeamsCard = ({
  profileUrl,
  name,
  description,
  github,
  linkedin,
}) => {
  return (
    <div className="teamsCard">
      <div className="teamsCardUpper">
        <img src={profileUrl} alt={name} className="user" />
      </div>
      <div className="teamsCardLower">
        <h3 className="name">{name}</h3>
        <p className="desc">{description}</p>
        <div className="teamsSocials">
          {github && (
            <a href={github} target="_blank">
              <img src={git} alt="github" />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank">
              <img src={linkedi} alt="linkedin" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
