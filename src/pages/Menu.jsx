import React from 'react'
import './styles/Menu.css'
import MenuCards from './Cards/MenuCards'


function Menu() {
  return (
    <>
      <div className="menu-container">
        <section className="sections">
          <div className="sec-spl">
            <h3 className="heading">Today's Specials</h3>
            <div className="scrollable">
              <MenuCards />
              <MenuCards />
              <MenuCards />
              <MenuCards />
              <MenuCards />
            </div>
          </div>
        </section>
        <hr className='line'/>
        <section className="sections">
          <div className="sec-spl">
            <h3 className="heading">Breakfast</h3>
            <div className="scrollable">
              <MenuCards />
              <MenuCards />
              <MenuCards />
              <MenuCards />
              <MenuCards />
            </div>
          </div>
        </section>
        <hr className='line'/>
        <section className="sections">
          <div className="sec-spl">
            <h3 className="heading">Lunch</h3>
            <div className="scrollable">
              <MenuCards />
              <MenuCards />
              <MenuCards />
              <MenuCards />
              <MenuCards />
            </div>
          </div>
        </section>
        <hr className='line'/>
        <section className="sections">
          <div className="sec-spl">
            <h3 className="heading">Dinner</h3>
            <div className="scrollable">
              <MenuCards />
              <MenuCards />
              <MenuCards />
              <MenuCards />
              <MenuCards />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Menu