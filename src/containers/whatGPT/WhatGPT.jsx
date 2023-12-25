import React from "react";
import "./whatGPT.css";
import { Feature } from "../../components";
const Whatgpt = () => {
  return (
    <div className="whatgpt section__margin" id="wgpt">
      <div className="whatgpt__feature">
        <Feature
          title="What is GPT?"
          text="Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisi Lorem ipsum dolor sit amet consectetur adipisi elit. Dolor recusandae cum laboriosam numquam."
        />
      </div>

      <div className="whatgpt__heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>

      <div className="whatgpt__container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae cum laboriosam numquam."
        />
        <Feature
          title="Knowledgebase"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae cum laboriosam numquam."
        />
        <Feature
          title="Education"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae cum laboriosam numquam."
        />
      </div>
    </div>
  );
};

export default Whatgpt;
