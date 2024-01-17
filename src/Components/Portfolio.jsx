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
import image from "../images/doggy.jpg";

const imageAltText = "Dog wear hat";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Come to join the MLSA program",
    description:
      "Here is the link about MLSA progrsam!",
    url: "https://mvp.microsoft.com/studentambassadors",
  },
  {
    title: "Sample of making a logically RF32 and test it ",
    description:
      "I spent a lot of time to connect it, so I made a record of it",
    url: "https://b23.tv/fuF1SZM",
  },
  {
    title: "Hold an event to introduce microsoft fabric ",
    description:
      "a brief photos that I hold an event in my school to introduce microsoft fabric to the students in my school",
    url: "https://youtu.be/1kj_3Oke_Os?si=N1TdAsSGuW3skoTz",
  },
  {
    title: "This is my university website",
    description:
      "I love my school , it gives me the opportunity to explore the computer world.",
    url: "https://www.must.edu.mo/en",
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
