import React, { Component } from 'react';
import "../stylesheet/pageHeading.css";

class PageHeading extends Component {
    render() {
        return (
            <div className='projects'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default PageHeading;
