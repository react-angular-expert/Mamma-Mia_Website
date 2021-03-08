import React from 'react';

export default function BookingInfoHours() {
  return (
    <div className='BookingInfoItem BookingInfo-Hours' id='Booking-Info'>
      <h5
        className='Booking-LandingInfo-ItemTitle'
        id='Booking-LandingInfo-ItemTitle'
      >
        Radno Vreme
      </h5>
      <div className='Booking-HoursGridWrap'>
        <div className='Booking-Hours-Row'>
          <p
            className=' Booking-LandingInfo-ItemText Booking-Hours-Days'
            id='Booking-LandingInfo-ItemText'
          >
            Pon - Čet
          </p>
          <p
            className=' Booking-LandingInfo-ItemText Booking-hours-Times'
            id='Booking-LandingInfo-ItemText'
          >
            09:00 - 24:00h
          </p>
        </div>
        <div className='Booking-Hours-Row'>
          <p
            className=' Booking-LandingInfo-ItemText Booking-Hours-Days'
            id='Booking-LandingInfo-ItemText'
          >
            Pet - Sub
          </p>
          <p
            className=' Booking-LandingInfo-ItemText Booking-hours-Times'
            id='Booking-LandingInfo-ItemText'
          >
            10:00 - 01:00h
          </p>
        </div>
        <div className='Booking-Hours-Row'>
          <p
            className=' Booking-LandingInfo-ItemText Booking-Hours-Days'
            id='Booking-LandingInfo-ItemText'
          >
            Ned
          </p>
          <p
            className=' Booking-LandingInfo-ItemText Booking-hours-Times'
            id='Booking-LandingInfo-ItemText'
          >
            10:00 - 23:00h
          </p>
        </div>
      </div>
    </div>
  );
}
