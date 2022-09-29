import React, { useState, useMemo } from 'react';

import {styled, withStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import useWindowSize from './useWindowSize.js';

const default_index = 0;

export default function TimelapseSlider({ image_urls }) {
    const [ photo_id, setPhotoId ] = useState(default_index);
    
    let { width: win_width } = useWindowSize();
    win_width *= 0.85;

    const handleSliderChange = (ev, value) => {
        setPhotoId(image_urls.length - value -1)
    }

    return <div className="flex items-center border border-2 border-red">
        <div style={{ width: `${win_width}px`, height: `${win_width/2}px` }} className="flex items-center overflow-hidden align-center">
            <img className="w-full overflow-hidden" src={image_urls[photo_id]} />
        </div>
        <div className="border-2 border-red-300" style={{ height: `${win_width/2}px` }}>
            <Slider
                orientation="vertical"
                defaultValue={image_urls.length - default_index}
                min={0}
                max={image_urls.length-1}
                track="inverted"
                marks
                step={1}
                onChange={handleSliderChange}
            />
        </div>
    </div>
}

//<Slider
//  sx={{
//    '& input[type="range"]': {
//      WebkitAppearance: 'slider-vertical',
//    },
//  }}
//  orientation="vertical"
//  defaultValue={30}
//  aria-label="Temperature"
//  valueLabelDisplay="auto"
//  onKeyDown={preventHorizontalKeyboardNavigation}
///>
