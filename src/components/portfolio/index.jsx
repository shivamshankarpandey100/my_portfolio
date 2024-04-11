import React from 'react';
import Section from '../shared/section';
import Filters from './filters';
import './style.scss';

const projectsData = [
    {
        id: 1,
        name: "Healthy Food Restraunt",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-7.jpg"),
        },
    },
    {
        id: 2,
        name: "Anna & Daniel",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-2.jpg"),
        },
    },
    {
        id: 3,
        name: "Web Design Landing Page",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-8.jpg"),
        },
    },
    {
        id: 4,
        name: "Business Analytics Web App",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-1.jpg"),
        },
    },
    {
        id: 5,
        name: "Limitless",
        tags: ["web-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-6.jpg"),
        },
    },
    {
        id: 6,
        name: "Dashboard",
        tags: ["product", "web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-4.jpg"),
        },
    },
    {
        id: 7,
        name: "Digital Creative Agency",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-3.jpg"),
        },
    },
    {
        id: 8,
        name: "Virtual Reality Experience",
        tags: ["web-app", "mobile-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-5.jpg"),
        },
    },
];

const Portfolio = () => {
  return (
    <Section id="portfolio" title="Check My Portfolio" background="light">
        <div className="portfolio-content-wrapper">
            <Filters />
        </div>
    </Section>
  )
}

export default Portfolio;