import React from 'react';
import { Link } from 'react-router-dom';

export default function MobileSingleFeature8() {
  return (
    <div className='MobileSingleFeature MobileSingleFeature8'>
      <div className='MobileFeatureImageFrame'>
        <div className='MobileFeatureImage'></div>
      </div>

      <div className='MobileFeatureDescriptionWrap'>
        <h4 className='MobileFeatureTitle'>Autentični Meni</h4>

        <p className='MobileFeatureText'>
          Lorem ipsum dolor sit amet, his alia sanctus id, eam ea quis error. Eu
          mei aeque dissentiunt, mei an wisi elaboraret, cu nam utamur torquatos
          dissentiet.{' '}
        </p>

        <Link to='/experience'>
          <button className='MobileFeatureButton'>
            <h6 className='MobileFeatureButtonText'>Ambijent</h6>
            <div className='MobileFeatureButtonTextUnderline'></div>
          </button>
        </Link>
      </div>
    </div>
  );
}
