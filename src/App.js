import React, { useState, Component, Fragment } from 'react';
import previousIcon from './assets/icons/left-icon.png';
import nextIcon from './assets/icons/right_icon.png';
import thumb1 from './assets/images/thumb/tea-light-thumb.jpeg';
import thumb2 from './assets/images/thumb/white-light-thumb.jpeg';
import thumb3 from './assets/images/thumb/pink-light-thumb.jpeg';
import thumb4 from './assets/images/thumb/tea-light-thumb.jpeg';
import image1 from './assets/images/tea-light.jpeg';
import image2 from './assets/images/white-light.jpeg';
import image3 from './assets/images/pink-light.jpeg';
import image4 from './assets/images/tea-light.jpeg';

import './App.css';
import Viewer from "./components/Viewer";
import Thumbs from "./components/Thumbs";




function App() {
  const catalogsList = [
    {
      thumb: thumb1,
      image: image1
    },
    {
      thumb: thumb2,
      image: image2
    },
    {
      thumb: thumb3,
      image: image3
    },
    {
      thumb: thumb4,
      image: image4
    }
  ];
  const [catalogs] = useState([...catalogsList])
  const[activeIndex, setActiveIndex] = useState(0)
  const[slideDuration] = useState(3000)
  const[slideActive, setSlideActive] = useState(false)

  function selectedCatalog(index) {
    setActiveIndex(index)
  }

  function previousClick() {
    let previousIndex = activeIndex == 0 ? catalogs.length - 1 : parseInt(activeIndex)-1;
    setActiveIndex(previousIndex)
  }

 function nextClick() {
    let nextIndex = activeIndex == catalogs.length -1 ? 0 : parseInt(activeIndex)+1;
    setActiveIndex(nextIndex);
  }
  
  function onSlideChange(event) {
    let interval;
    if (event.target.checked == true) {
      interval = setInterval ( () => {
                      nextClick()}, 3000);
      // var intervalId = setInterval(function() {
      //   alert("Interval reached every 5s")
      // }, 5000);
    }
    else if(event.target.id == false) {
      clearInterval(interval)
    }
  }


    return (
        <Fragment>
          <h2>sjd</h2>
          <div className="title" data-testid="app-title"> Catalog Viewer</div>
          <div className="catalog-outer">
            <div className="catalog-view">
              <div className="text-center">
                <div className="view-outter text-center">
                  <Viewer catalog={catalogs[activeIndex].image}/>
                </div>
              </div>
            </div>
            <div className="catalog-items">
              <div className="previous" onClick={previousClick} data-testid="prev-icon">
                <img src={previousIcon}/>
              </div>
              <div className="next" onClick={nextClick} data-testid="next-icon">
                <img src={nextIcon}/>
              </div>
              <Thumbs items={catalogs} currentIndex={activeIndex} selectedCatalog={selectedCatalog}/>
            </div>

            <div className="slide-input">
              <input type="checkbox" onChange={onSlideChange} className="test" data-testid="slide"/> Slide
            </div>
          </div>
        </Fragment>
    );
}

export default App;
