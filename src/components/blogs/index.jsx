import React from 'react';
import './style.scss';
import Section from "../shared/section";
import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg"; 
import BlogCard from './blog-card';

const Blogs = () => {
  return (
    <Section id="blogs" title="Blogs & Articles" background="dark">
        <div className="blogs-content-wrapper">
            <BlogCard 
                user="John Doe"
                date="mar 8, 2022"
                image={Blog1}
                title=" Quis Autem Vea Eum Iure Reprehendrit"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
             <BlogCard 
                user="John Doe"
                date="mar 8, 2022"
                image={Blog2}
                title=" Quis Autem Vea Eum Iure Reprehendrit"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
             <BlogCard 
                user="John Doe"
                date="mar 8, 2022"
                image={Blog3}
                title=" Quis Autem Vea Eum Iure Reprehendrit"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
        </div>
    </Section>
  )
}

export default Blogs