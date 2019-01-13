import React from 'react';
import {Link} from 'react-router-dom';
import './FeatureBox.css';

export function FeatureBox(props) {
//props to be passed in 1)title, subtitle, route, sub-doc-id
        return (
            <div className="feature-box">
             <div className="feature-img"> 
                <i className={props.icon}></i>
                </div>
                <div className="feature-body">
                    <h3 className="feature-title">{props.title}</h3>
                    <p className="feature-description">{props.description}</p>
                </div>
            </div>
        ) 
}

export default (FeatureBox);
