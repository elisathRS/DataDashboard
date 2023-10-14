
import React from 'react';
import newMoonImage from '../assets/new_moon.png';
import firstQuarterImage from '../assets/first_quarter.png';
import thirdQuarterImage from '../assets/third_quarter.png';
import lastQuarterImage from '../assets/last_quarter.png';
import fullMoonImage from '../assets/full_moon.png';

const MoonImage = ({ moonphase }) => {
    let moonImageSource;
  
    if (moonphase === 0) {
      moonImageSource = newMoonImage;
    } else if (moonphase > 0 && moonphase < 0.25) {
      moonImageSource = firstQuarterImage;
    } else if (moonphase === 0.25) {
      moonImageSource = thirdQuarterImage ;
    } else if (moonphase > 0.25 && moonphase < 0.5) {
      moonImageSource = lastQuarterImage;
    } else if (moonphase === 0.5 ){
      moonImageSource = fullMoonImage;
    }
  
    return <img src={moonImageSource} alt="Moon Phase" style={{ width: 20, height: 20 }} />;
  };

  export default MoonImage;
