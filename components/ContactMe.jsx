import React from 'react'

export default function ContactMe() {
    return (
        <div>
        <h4>Contact Me</h4>
        <form className='contact-form'>
          <div className='top-row-form'>
            <input type="text" placeholder='Name'/>
            <input type="email" placeholder='email'/>
          </div>

          <div>
            <input type="text" placeholder='title'/>
          </div>
          <div>
            <textarea placeholder='Message'></textarea>
          </div>
          
        </form>
        </div>
    )
}