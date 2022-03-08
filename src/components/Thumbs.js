import React, { Component, Fragment } from 'react';
import './Thumbs.css';

function Thumbs(props) {


    function onImageSelect(event) {
        props.selectedCatalog(event.target.id);
    }
    return (
        <Fragment>
            {
                props.items.map((catalog,idx) => (
                    <span className="catalog item"  onClick={onImageSelect} id={idx} key={idx} data-testid={'thumb_outer_'+idx}>
                        <span className={"thumb-outer " + (idx == props.currentIndex ? 'thumb-selected' : ' ')} data-testid={'thumb_'+idx}>
                            <span className="thumb" id={idx} style={{ backgroundImage: 'url('+ catalog.thumb + ')'}} data-testid={'thumb_img_'+idx} />
                        </span>
                    </span>
                ))}

        </Fragment>
    );
}

export default Thumbs;
