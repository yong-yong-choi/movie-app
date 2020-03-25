import React, { Component } from 'react';
import './Loader.css';

class Loader extends Component {
    render() {
        return (
            <div className="loader">
              <h2 className="loader-text">Loading...</h2>
            </div>
        );
    }
}

export default Loader;