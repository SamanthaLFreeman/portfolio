import React from 'react';

const Contact = () => {
  return (
    <section className='contact'>
      <h2>Contact me</h2>
      <form className='contact-form'>
        <input
          placeholder='Name'
          type='text'
          name='name' />
        <input
          placeholder='Email'
          type='text'
          name='email' />
        <input
          placeholder='Tell me something...'
          type='text'
          name='content' />
        <button className='contact-btn'>Submit</button>
      </form>
    </section>
  )
}

export default Contact;