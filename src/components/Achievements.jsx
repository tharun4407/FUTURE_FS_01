import "./Achievements.css";
import achievement1 from "../assets/images/achievement1.jpg";
import achievement2 from "../assets/images/achievement2.jpg";
import achievement3 from "../assets/images/achievement3.jpg";

const achievements = [
    {
        title: "National Level Throwball Player",
        description: "Competitive player for 3 years at the national level.",
        icon:" ",
        image: achievement1
    },
    {
        title: "Strong academic background in computer science",
        description: "Maintained excellence in core subjects like algorithms and data structures.",
        icon: " ",
        image: achievement2,
    },
    {
     title:  "Web Development Expertise",
    description: "Built responsive and interactive web applications using React, JavaScript, and modern CSS frameworks.", 
    icon: " ",
    image: achievement3,
  },
];

function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <div className="section-container">
        <p className="achievements__label">Achievements</p>
        <h2 className="achievements__title">
          Milestones & <span className="gradient-text-blue">Recognition</span>
        </h2>
        <div className="achievements__grid">
          {achievements.map((item, i) => (
           <div
  key={i}
  className="achievements__card glass-card"
  style={{
    backgroundImage: `url(${item.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
              <span className="achievements__icon">{item.icon}</span>
              <h3 className="achievements__card-title">{item.title}</h3>
              <p className="achievements__card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
