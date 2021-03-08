import React from 'react';
import { Link } from 'react-router-dom';

export default function BottomFeature() {
  return (
    <div className='BottomFeature' id='BottomFeature'>
      <div className='BottomFeature-InnerWrap'>
        <div className=' Feature Feature1' id='Feature'>
          <div className='FeatureImageFrame'>
            <div className='FeatureImage FeatureImage1' id='FeatureImage'></div>
          </div>

          <div className='Feature-Description'>
            <h4 className='Feature-Header' id='Feature-Header'>
              Pice s Potpisom
            </h4>
            <p className='Feature-Text' id='Feature-Text'>
              Za pravljenje testa se koristi isključivo autentično italijansko
              brašno Agugiaro & Fignan namenjeno specijalno za pice.
            </p>
            <button className='Feature-Button' id='Feature-Button'>
              <Link to='/menu'>
                <h6 className=' Feature-ButtonText' id='Feature-ButtonText'>
                  Jelovnik
                </h6>
              </Link>
              <div className='Feature-ButtonUnderline'></div>
            </button>
          </div>
        </div>

        <div className=' Feature Feature2' id='Feature'>
          <div className='FeatureImageFrame'>
            <div className='FeatureImage FeatureImage2' id='FeatureImage'></div>
          </div>

          <div className='Feature-Description'>
            <h4 className='Feature-Header' id='Feature-Header'>
              Pica Majstori
            </h4>
            <p className='Feature-Text' id='Feature-Text'>
              Naši pica majstori su završili obuku u prestižnoj Scoula Italiana
              Pizzoli. Pice se peku u najboljim pica pećima iz Italije.
            </p>
            <button className='Feature-Button' id='Feature-Button2'>
              <Link to='/ourstory'>
                <h6 className=' Feature-ButtonText' id='Feature-ButtonText'>
                  O Nama
                </h6>
              </Link>
              <div
                className='Feature-ButtonUnderline'
                id='Feature-ButtonUnderline2'
              ></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
