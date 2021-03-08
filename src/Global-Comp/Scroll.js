import React from 'react'

export default function Scroll(props) {
    return (
        <div className='Scroll' style={{width: '99%', height: '600px', }}>
            {props.children}
        </div>
    )
}