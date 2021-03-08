import React from 'react';
import { Link } from 'react-router-dom';

export default function MobileSingleFeature1() {
  return (
    <div className='MobileSingleFeature MobileSingleFeature1'>
      <div className='MobileFeatureImageFrame'>
        <div className='MobileFeatureImage'></div>
      </div>

      <div className='MobileFeatureDescriptionWrap'>
        <h4 className='MobileFeatureTitle'>Pice s Potpisom</h4>

        <p className='MobileFeatureText'>
          Za pravljenje testa se koristi isključivo autentično italijansko
          brašno Agugiaro & Fignan namenjeno specijalno za pice.{' '}
        </p>

        <Link to='/menu'>
          <button className='MobileFeatureButton'>
            <h6 className='MobileFeatureButtonText'>Jelovnik</h6>
            <div className='MobileFeatureButtonTextUnderline'></div>
          </button>
        </Link>
      </div>
    </div>
  );
}
