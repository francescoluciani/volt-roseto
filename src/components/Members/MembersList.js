import "./Members.css";
import Member from "./Member";
import JoinMessage from "/Users/franzluz/coding/volt/volt/src/components/JoinMessage";
// import Bounce from "react-reveal";

const memberInfo = [
  {
    name: "Francesco",
    surname: "Luciani",
    img:
      "https://i.ibb.co/4dfDK04/Portrait-picture-Francesco-Luciani-copia.jpg",
    linkedin: "https://www.linkedin.com/in/lucianifrancesco/",
    github: "https://github.com/francescoluciani",
  },
  {
    name: "Francesco",
    surname: "Luciani",
    img:
      "https://i.ibb.co/4dfDK04/Portrait-picture-Francesco-Luciani-copia.jpg",
    linkedin: "https://www.linkedin.com/in/lucianifrancesco/",
    github: "https://github.com/francescoluciani",
  },
  {
    name: "Francesco",
    surname: "Luciani",
    img:
      "https://i.ibb.co/4dfDK04/Portrait-picture-Francesco-Luciani-copia.jpg",
    linkedin: "https://www.linkedin.com/in/lucianifrancesco/",
    github: "https://github.com/francescoluciani",
  },
  {
    name: "Francesco",
    surname: "Luciani",
    img:
      "https://i.ibb.co/4dfDK04/Portrait-picture-Francesco-Luciani-copia.jpg",
    linkedin: "https://www.linkedin.com/in/lucianifrancesco/",
    github: "https://github.com/francescoluciani",
  },
  {
    name: "Francesco",
    surname: "Luciani",
    img:
      "https://i.ibb.co/4dfDK04/Portrait-picture-Francesco-Luciani-copia.jpg",
    linkedin: "https://www.linkedin.com/in/lucianifrancesco/",
    github: "https://github.com/francescoluciani",
  },
  {
    name: "Francesco",
    surname: "Luciani",
    img:
      "https://i.ibb.co/4dfDK04/Portrait-picture-Francesco-Luciani-copia.jpg",
    linkedin: "https://www.linkedin.com/in/lucianifrancesco/",
    github: "https://github.com/francescoluciani",
  },
];

const MemberList = () => {
  return (
    <div>
      <div className="memberlist-container">
        {/* <Bounce left cascade> */}
        <div className="member-container">
          {memberInfo.map((member) => (
            <div className="member-card">
              <Member
                name={member.name}
                surname={member.surname}
                img={member.img}
                linkedin={member.linkedin}
                github={member.github}
              />
            </div>
          ))}
        </div>

        {/* </Bounce> */}
      </div>
      <JoinMessage />
    </div>
  );
};

export default MemberList;
