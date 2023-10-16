
import React from 'react';
import newMoonImage from '../assets/new_moon.png';
import waxingCrescenImage from '../assets/waxing_crescent.png';
import firstQuarterImage from '../assets/first_quarter.png';
import waxingGibbousImage from '../assets/waxing_gibbous.png';
import fullMoonImage from '../assets/full_moon.png';
import waningGibbousImage from '../assets/waning_gibbous.png';
import waningQuarterImage from '../assets/waning_quarter.png';
import waningCrecentImage from '../assets/waning_crescent.png';


const MoonImage = ({ moonphase }) => {
    let moonImageSource;
  
    if (moonphase === 0 ) {
      moonImageSource = newMoonImage;
    } else if (moonphase > 0 && moonphase < 0.25) {
      moonImageSource = waxingCrescenImage;
    } else if (moonphase === 0.25) {
      moonImageSource = firstQuarterImage ;
    } else if (moonphase > 0.25 && moonphase < 0.5) {
      moonImageSource = waxingGibbousImage ;
    } else if (moonphase === 0.5 || moonphase === 1){
      moonImageSource = fullMoonImage;
    }else if (moonphase> 0.5  && moonphase < 0.75){
      moonImageSource = waningGibbousImage ;
    }else if (moonphase === 0.75) {
      moonImageSource = waningQuarterImage;
    }
    else if (moonphase > 0.75 && moonphase < 1) {
      moonImageSource = waningCrecentImage;
    }
    
  
    return <img src={moonImageSource} alt="Moon Phase" style={{ width: 20, height: 20 }} />;
  };

  export default MoonImage;
