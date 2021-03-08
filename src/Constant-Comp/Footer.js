import React from 'react';
import DownArrow from '../Global-Comp/DownArrow';

export default function Footer() {
  return (
    <footer className='Footer' id='Footer'>
      <div className='Footer-InnerWrap' id='Footer-InnerWrap'>
        <h5 className='FooterItem' id='FooterItem'>
          VI Licke divizije, 25000 Sombor
        </h5>
        <h5 className='FooterItem' id='FooterItem'>
          025/442-202, 062/442-202
        </h5>
        <h5 className='FooterItem' id='FooterItem'>
          info@mammamia.rs
        </h5>

        <div className='Footer-ScrollWrap' id='Footer-ScrollWrap'>
          <h5 className='Footer-ScrollText'>Scroll</h5>
          <DownArrow />
        </div>
      </div>
    </footer>
  );
}
