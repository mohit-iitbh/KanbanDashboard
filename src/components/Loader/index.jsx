import React from 'react';
import './loader.css';

function Loader({ fullscreen = true }) {
    return (
        <div className={`loader-container ${fullscreen && "fullscreen"}`}>
            <span className='loader'></span>
        </div>
    );
}

export default Loader;