import React, { useState } from 'react';
import Card from "@/components/profcard"

const cardsData = [
    {
    id: 1,
    title: "Card 1",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://via.placeholder.com/200x150",
    },
    {
    id: 2,
    title: "Card 2",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://via.placeholder.com/200x150",
    },
    {
    id: 3,
    title: "Card 3",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://via.placeholder.com/200x150",
    },
    {
    id: 4,
    title: "Card 4",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://via.placeholder.com/200x150",
    },
    {
    id: 5,
    title: "Card 5",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://via.placeholder.com/200x150",
    },
    {
    id: 6,
    title: "Card 6",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://via.placeholder.com/200x150",
    },
    {
    id: 7,
    title: "Card 7",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://via.placeholder.com/200x150",
    }
    ]

const Portfolio = () => {

const [cards, setCards] = useState(cardsData);

  return ( <div className='mainscr  fl'>


  <div className="left-column">

    <div className='bg-1000 '>

    
    <div className="tab-content">
        <p>Member since: March 14, 2021</p>
      <div className="stat-box">
        <div className="stat-num">32</div>
        <div className="stat-text">Contests Won</div>
      </div>
      <div className="stat-box">
        <div className="stat-num">23</div>
        <div className="stat-text">1 to 1 Projects</div>
      </div>
      <div className="stat-box">
        <div className="stat-num">12</div>
        <div className="stat-text">Repeat Clients</div>
      </div>
      <div className="stat-box2">
        <div className="stat-text2">Languages</div>
        <div className="stat-text">German - English</div>
      </div>
      <div className="stat-box3">
        <div className="stat-text">Local Time 12:00 am</div>
      </div>
    </div>
    </div>
  </div>
  <div className="right-column">
  <div className="tab-buttons">
  <button className="edit-button nav-btn ">Edit</button>
     
    </div>
    <div className="text-area-cont">
    <textarea className="text-area"/>
    </div>
    
    <div className="card-container">
  {cards.map((card, index) => (
    <Card key={index} card={card} />
  ))}
</div>
  </div>
  </div>)
}
export default Portfolio;

