import React from "react";
import "./blog.css";
import { Article } from "../../components";

import Blog1 from '../../assets/Rectangle 22.png';
import Blog2 from '../../assets/Rectangle 22-1.png';
import Blog3 from '../../assets/Rectangle 22-2.png';
import Blog4 from '../../assets/Rectangle 22-3.png';
import Blog5 from '../../assets/Rectangle 22-4.png';

const Blog = () => {
  return (
    <div className="blog section__padding" id="blog">
      <div className="blog__heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>

      <div className="blog__container">
        <div className="blog__container-groupA">
          <Article imgUrl={Blog1} date="Dec 28, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
        <div className="blog__container-groupB">
        <Article imgUrl={Blog2} date="Dec 28, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={Blog3} date="Dec 28, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={Blog4} date="Dec 28, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={Blog5} date="Dec 28, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          </div>
      </div>
    </div>
  );
};

export default Blog;
