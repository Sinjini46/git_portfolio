/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "AvaNiyantra",
    description:
      "A web application for centralized monitoring of Narcotic drug supply chains; adeptly resolving supply chain challenges, ensuring smooth traceability and regulatory compliance, showcasing success in boosting transparency and security in the pharmaceutical sector.",
  },
  {
    title: "Sorting Visualizer",
    description:
      "A web application that visually demonstrated various sorting algorithms, showcasing time and space complexity analysis; increased understanding of algorithmic concepts among 500+ users.",
    url: "https://sinjini46.github.io/Sorting_Visualizer/",
  },
  {
    title: "FoodyVille",
    description:
      "Developed a web application facilitate food ordering from multiple restaurants, providing a user-friendly interface for customers to place orders, manage menu items, and track delivery status.",
    url: "https://foodexpresshub.000webhostapp.com/",
  },
  {
    title: "Multiplayer tic-tac-toe with a realtime chat",
    description:
      "A web application that facilitates multiple players to compete against each other, yielding 40% more engagement; fostering interactive communication via integrated chat feature.",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
