import React from "react";


const List = [
    {
        destination:"Tokyo",
        country:"Japan",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Tokyo_Montage_2015.jpg/280px-Tokyo_Montage_2015.jpg",
        distance:"9446 km",
    },
    {
        destination:"Barcelona",
        country:"Spain",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Barcelona_collage.JPG/280px-Barcelona_collage.JPG",
        distance:"1340.2 km",
    }, 
    {
        destination:"Venice",
        country:"Italy",
        image:"https://upload.wikimedia.org/wikipedia/commons/1/1e/Collage_Venezia.jpg",
        distance:"1171.6 km",
    }, 
];

const Completelist = () => (
<div>
    {List.map(item => (
    <li key={item.destination}>
        <div>{item.destination}</div>
        <div>{item.country}</div>
        <div>{item.image}</div>
        <div>{item.distance}</div>
    </li>
    ))};
</div>

),

export default Completelist;