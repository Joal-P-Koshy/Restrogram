import React from 'react'
import "./Menucard.css"
import sampleimg from "./sampleFood.png"

function MenuCards() {
  return (
    <>
    <div className="card">
        <img className='food-img' src={sampleimg} alt="Food Image" />
        <span className="food-name">food name</span>
        <span className="price">345$</span>
        <button className="add-btn">Add</button>
    </div>
    </>
  )
}

export default MenuCards