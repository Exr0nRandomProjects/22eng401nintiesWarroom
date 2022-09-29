import React from 'react';
import TimelapseSlider from './TimelapseSlider.jsx';

const IMAGE_URLS = [ "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*", "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80"];

function App() {
    return (
        <div className="w-screen min-h-screen overflow-x-hidden bg-gray-900 scroll-x-none">
            <div className="flex flex-col items-center w-full p-6">
                <div className="flex">
                    <span className="justify-center text-5xl font-semibold text-pink-500">The Ninties</span>
                </div>
                <div className="border border-2 border-red-400">
                    <TimelapseSlider image_urls={IMAGE_URLS} />
                </div>
            </div>
        </div>
    );
}

export default App;
