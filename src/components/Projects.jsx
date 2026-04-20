import "./Projects.css";

// ✅ IMPORT IMAGES
import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";

const projects = [
  {
    title: "Data Structure Implementations in C++",
    description:
      "A comprehensive collection of data structure implementations including linked lists, trees, and graphs.",
    tags: ["C++", "DSA", "Algorithms"],
    features: [
      "Linked list operations",
      "Binary trees",
      "Graph traversal",
      "Hash tables",
    ],
    image: project1,
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce app with cart, authentication, and payments.",
    tags: ["React", "Node.js", "MongoDB"],
    features: [
      "Product filtering",
      "Shopping cart",
      "User login",
      "Payment gateway",
    ],
    image: project2,
  },
  {
    title: "Database Management System",
    description:
      "DBMS with SQL queries, indexing, and transaction management.",
    tags: ["SQL", "Python", "Backend"],
    features: [
      "Query execution",
      "Index optimization",
      "Backup system",
      "User control",
    ],
    image: project3,
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <p className="projects__label">Featured Projects</p>
        <h2 className="projects__title">
          Things I've <span className="gradient-text">Built</span>
        </h2>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <div key={i} className="projects__card glass-card">

              {/* ✅ IMAGE SECTION */}
              <div
                className="projects__image"
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              ></div>

              {/* CONTENT */}
              <div className="projects__content">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.description}</p>

                <div className="projects__card-tags">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="projects__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="projects__card-features">
                  {project.features.map((feat, j) => (
                    <li key={j}>{feat}</li>
                  ))}
                </ul>

                <a href="#" className="projects__card-link">
                  View Details →
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;