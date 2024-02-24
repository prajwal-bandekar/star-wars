import React from "react";
import "./openingCrawl.css"; // Import the CSS file

const OpeningCrawl = () => {
  return (
    <div className="container">
      <div className="credits play-animation">
        <div className="headings">
          <h1>Episode VIII</h1>
          <h2>The Last Jedi</h2>
        </div>
        <div>
          <p>
            As a frontend developer, I've embarked on an exciting mission: creating a web app to showcase planets from the Star Wars universe. Using the SWAPI, I fetch planet data and present it elegantly, including details like name, climate, and population.
          </p>
          <p>
            Each planet card also lists notable residents, adding depth to the exploration. With intuitive pagination, users can seamlessly navigate through the galaxy. Crafting a visually stunning interface with modern CSS techniques, I bring the Star Wars universe to life on the screen. Using React, I ensure efficient code organization and seamless user interactions.
          </p>
          <p>
            Deployed to a live environment, my app demonstrates creativity, innovation, and a passion for frontend development. Together, we shape the future, one line of code at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpeningCrawl;
