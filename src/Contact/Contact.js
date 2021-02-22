import React, { Component } from 'react';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      content: ''
    }
  }
  render() {
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
  )}
}

export default Contact;