import React from "react";
import "./whatGPT.css";
import { Feature } from "../../components";
const Whatgpt = () => {
  return (
    <div className="whatgpt section__margin" id="wgpt">
      <div className="whatgpt__feature">
        <Feature
          title="What is Innov8r?"
          text="Welcome to Innov8r – your portal to the latest in tech and innovation. Dive into cutting-edge advancements, inspiring stories, and join a community of forward-thinkers exploring limitless possibilities."
        />
      </div>

      <div className="whatgpt__heading">
        <h1 className="gradient__text">Your Gateway to Tech Innovation</h1>
        <p>Explore the Library</p>
      </div>

      <div className="whatgpt__container">
        <Feature
          title="Tech Spotlight"
          text="Discover the latest tech breakthroughs – from gadgets to software. Stay informed on trends shaping the future."
        />
        <Feature
          title="Community"
          text="Explore our 1.5k+ innovator community. Discover stories, projects, and join the conversation. Be part of a network celebrating creativity and innovation"
        />
        <Feature
          title=" Learn & Grow"
          text="Discover, learn, and grow in our tech hub. From guides to tutorials, find something new whether you're a pro or a beginner."
        />
      </div>
    </div>
  );
};

export default Whatgpt;
