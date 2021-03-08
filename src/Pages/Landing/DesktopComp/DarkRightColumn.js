import React from 'react';
import { Link } from 'react-router-dom';

export default function DarkColumn() {
  return (
    <div className='DarkRightColumn'>
      <div className='DarkRightColumn-InnerWrap' id='DarkRightColumn-InnerWrap'>
        <h2 className='LandingHeader' id='LandingHeader'>
          Veče u Mamma <br /> Mia Piceriji
        </h2>

        <p className='LandingDescription' id='LandingDescription'>
          Pizzeria Mamma Mia je picerija sa najdužom tradicijom u Somboru i
          širokom ponudom italijanskih specijaliteta - pice, lazanje, špagete,
          njoke, pancerote, razne vrste deserata i širok asortiman pića.
        </p>

        <p className='LandingDescription' id='LandingDescription'>
          Već posle prvog boravka u Piceriji Mamma Mia, uživanje u jedinstvenom
          ambijentu učiniće da vaša čula osete toplinu i miris gurmanske
          istorije Italije.
        </p>

        <button className='LandingReservationBtn'>
          <Link to='/booking'>
            <h4 className='LandingReservationLink'>Rezervišite Astal</h4>
            <div className='LandingReservationLinkUnderline'></div>
          </Link>
        </button>

        <h5 className='Footer-CopyRight' id='Footer-CopyRight'>
          Mamma Mia © 2019｜by <a href='https://ogtech.netlify.com/' target='_blank'>OGTech</a>
        </h5>
      </div>
    </div>
  );
}
