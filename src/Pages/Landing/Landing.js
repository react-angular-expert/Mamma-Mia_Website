import React from 'react';
import { Link } from 'react-router-dom';

import DarkRightColumn from './DesktopComp/DarkRightColumn';
import BottomFeature from './DesktopComp/BottomFeature';
import SlideIndicator from './DesktopComp/SlideIndicator';

import MobileFeature1 from './MobileComp/MobileFeatures/MobileFeature1';
import MobileFeature2 from './MobileComp/MobileFeatures/MobileFeature2';
import MobileFeature3 from './MobileComp/MobileFeatures/MobileFeature3';
import MobileFeature4 from './MobileComp/MobileFeatures/MobileFeature4';
import ContactLocation from './MobileComp/ContactLocation';

export default function Landing() {
  return (
    <div className='Landing' id='Landing'>
      <div className='Desktop-Landing' id='Desktop-Landing'>
        <DarkRightColumn />

        <BottomFeature />
      </div>

      <div className='Mobile-Landing' id='Mobile-Landing'>
        {/*Section 1  Intro*/}
        <section className='MobileLandingSectionLarge MobileLandingSectionLarge1'>
          <div
            className='MobileLandingContentWrap'
            id='MobileLandingContentWrap1'
          >
            <h1 className='MobileLandingHeader' id='MobileLandingHeader'>
              Iskusite ukuse Italije u Somboru!
            </h1>
            <div className='MobileLandingDescriptionWrap'>
              <p
                className='MobileLandingDescription'
                id='MobileLandingDescription'
              >
                Pizzeria Mamma Mia je picerija sa najdužom tradicijom u Somboru
                i širokom ponudom italijanskih specijaliteta - pice, lazanje,
                špagete, njoke, pancerote, razne vrste deserata i širok
                asortiman pića.
              </p>
            </div>

            <Link to='/booking'>
              <button className='MobileLandingButton' id='MobileLandingButton'>
                <h6
                  className='MobileLandingButtonText'
                  id='MobileLandingButtonText'
                >
                  Rezervacija
                </h6>
              </button>
            </Link>
          </div>
        </section>

        {/*Section 2 Contact & First Features*/}
        <section className='MobileLandingSectionSmall MobileLandingSectionSmall1'>
          <div className='MobileLandingSectionSmallContent'>
            <ContactLocation />

            <MobileFeature1 />
          </div>
        </section>

        {/*Section 3 Large Hero*/}
        <section className='MobileLandingSectionLarge MobileLandingSectionLarge2'>
          <div
            className='MobileLandingContentWrap'
            id='MobileLandingContentWrap'
          >
            <h1 className='MobileLandingSectionsTitle' id='MobileLandingHeader'>
              Tradicija Italijanske Kuhinje
            </h1>
            <div className='MobileLandingDescriptionWrap'>
              <p
                className='MobileLandingDescription'
                id='MobileLandingDescription'
              >
                Lorem ipsum dolor sit amet, his alia sanctus id, eam ea quis
                error. Eu mei aeque dissentiunt, mei an wisi elaboraret, cu nam
                utamur torquatos dissentiet. Ex has aeque primis facete, ea
                minim labitur euismod nam. No Mei lobortis principes.
              </p>
            </div>

            <Link to='/experience'>
              <button className='MobileLandingButton' id='MobileLandingButton'>
                <h6
                  className='MobileLandingButtonText'
                  id='MobileLandingButtonText'
                >
                  Ambijent
                </h6>
              </button>
            </Link>
          </div>
        </section>

        {/*Section 4 Small Feature*/}
        <section className='MobileLandingSectionSmall MobileLandingSectionSmall1'>
          <div className='MobileLandingSectionSmallContent'>
            <MobileFeature2 />
          </div>
        </section>

        {/*Section 5 Large Hero*/}
        <section className='MobileLandingSectionLarge MobileLandingSectionLarge3'>
          <div
            className='MobileLandingContentWrap'
            id='MobileLandingContentWrap'
          >
            <h1 className='MobileLandingSectionsTitle' id='MobileLandingHeader'>
              Za Posebne Prilike
            </h1>
            <div className='MobileLandingDescriptionWrap'>
              <p
                className='MobileLandingDescription'
                id='MobileLandingDescription'
              >
                Lorem ipsum dolor sit amet, his alia sanctus id, eam ea quis
                error. Eu mei aeque dissentiunt, mei an wisi elaboraret, cu nam
                utamur torquatos dissentiet. Ex has aeque primis facete, ea
                minim labitur euismod nam. No Mei lobortis principes.
              </p>
            </div>

            <Link to='/booking'>
              <button className='MobileLandingButton' id='MobileLandingButton'>
                <h6
                  className='MobileLandingButtonText'
                  id='MobileLandingButtonText'
                >
                  Rezervacija
                </h6>
              </button>
            </Link>
          </div>
        </section>

        {/*Section 6 Small Feature*/}
        <section className='MobileLandingSectionSmall MobileLandingSectionSmall1'>
          <div className='MobileLandingSectionSmallContent'>
            <MobileFeature3 />
          </div>
        </section>

        {/*Section 7 Large Hero*/}
        <section className='MobileLandingSectionLarge MobileLandingSectionLarge4'>
          <div
            className='MobileLandingContentWrap'
            id='MobileLandingContentWrap'
          >
            <h1 className='MobileLandingSectionsTitle' id='MobileLandingHeader'>
              Naša Priča
            </h1>
            <div className='MobileLandingDescriptionWrap'>
              <p
                className='MobileLandingDescription'
                id='MobileLandingDescription'
              >
                Lorem ipsum dolor sit amet, his alia sanctus id, eam ea quis
                error. Eu mei aeque dissentiunt, mei an wisi elaboraret, cu nam
                utamur torquatos dissentiet. Ex has aeque primis facete, ea
                minim labitur euismod nam. No Mei lobortis principes.
              </p>
            </div>

            <Link to='/ourstory'>
              <button className='MobileLandingButton' id='MobileLandingButton'>
                <h6
                  className='MobileLandingButtonText'
                  id='MobileLandingButtonText'
                >
                  O Nama
                </h6>
              </button>
            </Link>
          </div>
        </section>

        {/*Section 8 Small Feature*/}
        <section className='MobileLandingSectionSmall MobileLandingSectionSmall1'>
          <div className='MobileLandingSectionSmallContent'>
            <MobileFeature4 />
          </div>
        </section>
        <h5 style={{ textAlign: 'center' }}>
          Mamma Mia © 2019. All Rights Reserved｜by OGTech
        </h5>
      </div>
    </div>
  );
}
