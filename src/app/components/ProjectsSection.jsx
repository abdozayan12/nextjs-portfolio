"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Conference-page",
    description: "The Conference Page is a responsive and dynamic website created using HTML, CSS and javascript.",
    image: "/images/projects/conference.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abdozayan12/capstone-project---Conference-page",
    previewUrl: "https://abdozayan12.github.io/capstone-project---Conference-page/",
  },
  {
    id: 2,
    title: "Countries Explorer",
    description: "Explore The Countries is a web application built using React and Redux that displays information about different countries. It consists of the following main pages: Homepage and Details. The project provides a user-friendly interface for users to search, sort, and view details about different countries.",
    image: "/images/projects/country.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abdozayan12/REACT-CAPSTONE-PROJECT",
    previewUrl: "https://react-capstone-project-05mk.onrender.com/",
  },
  {
    id: 3,
    title: "Dish-Discovery",
    description: "The Meal DB, is a web application that utilizes an external API to provide a comprehensive database of meals, complete with information such as name, image, and description. Users can interact with the meals by liking or commenting on them. Our team collaborated using a Kanban board to ensure successful project delivery",
    image: "/images/projects/dish.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abdozayan12/Dish-Discovery",
    previewUrl: "https://abdozayan12.github.io/Dish-Discovery/dist/",
  },
  {
    id: 4,
    title: "Budget App",
    description: "Budget App is an app for tracking your budget by creating categories and add transactions to these categories.",
    image: "/images/projects/budget.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/abdozayan12/Budget-App",
    previewUrl: "https://budget-app-8pq6.onrender.com/",
  },
  {
    id: 5,
    title: "space_travelers",
    description: "Space Travelers Hub, a web application that connects adventurous travelers with commercial and scientific space travel services. The app is built on an external API and allows users to book rockets and join selected space missions. Our team collaborated using a kanban board to ensure a successful project delivery.",
    image: "/images/projects/space.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abdozayan12/space_travelers",
    previewUrl: "https://space-traveler-1wv4.onrender.com/",
  },
  {
    id: 6,
    title: "Resort Vista",
    description: "Resort Vista is a web application built with a Ruby on Rails backend API and a React frontend UI, offering users a platform to explore and manage resort reservations. Whether you&apos;re planning a getaway or looking for a relaxing vacation spot, Resort Vista provides a seamless experience to discover, reserve, and manage your resort bookings.",
    image: "/images/projects/resort.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abdozayan12/resort-front-end",
    previewUrl: "https://resortvista.onrender.com/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
