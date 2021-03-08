import React from 'react';

export default function ReservationForm() {
  return (
    <div className='ReservationForm' id='ReservationForm'>
      <form action='#' className='Form'>
        <div className='Booking-FormRow' id='Booking-FormRow'>
          <label for='/' className='FormLabel'>
            Ime<span className='Span'>*</span>:
          </label>
          <input
            type='text'
            className='Booking-Input'
            id='fullName'
            name='fullName'
            placeholder='Rez. na Ime'
          ></input>
        </div>
        <div className='Booking-FormRow' id='Booking-FormRow'>
          <label for='/' className='FormLabel'>
            Email<span className='Span'>*</span>:
          </label>
          <input
            type='email'
            className='Booking-Input'
            id='email'
            name='email'
            placeholder='Email'
          ></input>
        </div>
        <div className='Booking-FormRow' id='Booking-FormRow'>
          <label for='/' className='FormLabel'>
            Tel.<span className='Span'>*</span>:
          </label>
          <input
            type='phone'
            className='Booking-Input'
            id='Phone'
            name='Phone'
            placeholder='06x/xxx - xxxx'
          ></input>
        </div>
        <div className='Booking-FormRow' id='Booking-FormRow'>
          <label for='/' className='FormLabel'>
            Br. stolica<span className='Span'>*</span>:
          </label>
          <input
            type='number'
            min='0'
            className='Booking-Input'
            id='guests'
            name='guests'
            placeholder='Broj gostiju'
          ></input>
        </div>
        <div className='Booking-FormRow' id='Booking-FormRow'>
          <label for='/' className='FormLabel'>
            Datum<span className='Span'>*</span>:
          </label>
          <input
            type='date'
            className='Booking-Input'
            id='date'
            name='date'
            placeholder='00/00/00'
          ></input>
        </div>
        <div className='Booking-FormRow' id='Booking-FormRow'>
          <label for='/' className='FormLabel'>
            Vreme<span className='Span'>*</span>:
          </label>
          <input
            type='time'
            className='Booking-Input'
            id=''
            name=''
            placeholder=''
          ></input>
        </div>

        <div className='Booking-BookingSetUp-Radio'>
          <label for='notification' className='Booking-BookingSetUp-Radio-Text'>
            SMS podsetnik o rezervaciji:
          </label>
          <input
            type='checkbox'
            id='notification'
            name='notification'
            value='notification'
          ></input>
        </div>

        <button
          type='submit'
          className='Booking-SubmitBtn'
          id='Booking-SubmitBtn'
        >
          <h5 className='Booking-SubmitBtn-Text'>Pošalji</h5>
        </button>
      </form>
    </div>
  );
}
