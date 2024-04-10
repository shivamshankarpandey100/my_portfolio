import React from 'react';

const filtersData = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "Web Pages",
        id: "web-page",
    },
    {
        name: "Web Apps",
        id: "web-app",
    },
    {
        name: "Mobile Apps",
        id: "mobile-app",
    },
];


const Filters = () => {
  return (
    <ul className="filters-menu-items">
        {filtersData.map((item,index)=>{
            return (
            <li className="filter-menue-item"></li>
        )
        })}
        
    </ul>
  )
}

export default Filters