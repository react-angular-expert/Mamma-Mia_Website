import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation({
  ToggleNav,
  ActiveTab,
  MenuTabActive,
  BookingTabActive,
  StoryTabActive,
  ExperienceTabActive,
  LandingTabActive
}) {
  let MenuActive = '';

  if (ActiveTab === 'menu') {
    MenuActive = 'MenuTabActive';
  }

  let BookingActive = '';

  if (ActiveTab === 'booking') {
    BookingActive = 'MenuTabActive';
  }

  let StoryActive = '';

  if (ActiveTab === 'story') {
    StoryActive = 'MenuTabActive';
  }

  let ExperienceActive = '';

  if (ActiveTab === 'experience') {
    ExperienceActive = 'MenuTabActive';
  }

  return (
    <nav className='Nav' id='Nav'>
      <div className='Nav-InnerWrap' id='Nav-InnerWrap'>
        <Link
          to='/menu'
          id='NavLink'
          className={MenuActive}
          onClick={MenuTabActive}
        >
          <h3 className='NavItem' id='NavLink1'>
            Jelovnik
          </h3>
        </Link>

        <Link
          to='/booking'
          id='NavLink'
          className={BookingActive}
          onClick={BookingTabActive}
        >
          <h3 className='NavItem'>Rezervacije</h3>
        </Link>

        <Link to='/' onClick={LandingTabActive}>
          <h1 className='NavItem Logo' id='Logo'>
            Mamma Mia
          </h1>
        </Link>

        <Link
          to='/ourstory'
          id='NavLink'
          className={StoryActive}
          onClick={StoryTabActive}
        >
          <h3 className='NavItem'>O Nama</h3>
        </Link>

        <Link
          to='experience'
          id='NavLink'
          className={ExperienceActive}
          onClick={ExperienceTabActive}
        >
          <h3 className='NavItem'>Ambijent</h3>
        </Link>

        <div
          className='Mobile-Nav-MenuIcon'
          id='Mobile-Nav-MenuIcon'
          onClick={ToggleNav}
        >
          <div className='Mobile-Nav-MenuIcon-Bar'></div>
          <div className='Mobile-Nav-MenuIcon-Bar'></div>
          <div className='Mobile-Nav-MenuIcon-Bar'></div>
        </div>
      </div>
    </nav>
  );
}
