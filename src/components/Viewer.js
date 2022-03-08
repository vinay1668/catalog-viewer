import React, { Component } from 'react';
import './Viewer.css';

function Viewer(props) {

    return (
        <div className="catalog-view">
          <img data-testid="catalog-view" className="catalog-image" src={props.catalog}/>
        </div>
    );
}

export default Viewer;
