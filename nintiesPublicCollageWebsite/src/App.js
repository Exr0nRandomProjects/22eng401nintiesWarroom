import React from 'react';
import './tailwind.css';
import TimelapseSlider from './TimelapseSlider.jsx';

const IMAGE_URLS = [ "/timelapse_images/day1-working.jpeg", "/timelapse_images/day1-complete.jpeg"];

function App() {
    return (
        <div className="w-screen min-h-screen overflow-x-hidden bg-gray-900 scroll-x-none">
            <div className="flex flex-col items-center w-full p-6">
                <div className="flex justify-center text-pink-400 align-text-bottom" style={{ fontFamily: "'Lobster', cursive" }}>
                    <div style={{ fontSize: '80px' }} className="font-semibold">The Ninties</div>
        {/*<div style={{ fontSize: '30px' }}>Allen&apos;s English Class</div>*/}
                </div>
                <div>
                    <TimelapseSlider image_urls={IMAGE_URLS} />
                </div>
            </div>
        </div>
    );
}

export default App;
