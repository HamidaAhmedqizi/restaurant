import React from 'react'
import styles from './style.module.css';
import pizzaLeft from '../Contact/pizzaLeft.jpg'

const Contact = () => {
  return (
    <div className={styles.contact}>
     <div className={styles.leftSide} style={{ backgroundImage: `url(${pizzaLeft})` }}>

     </div>
     <div className={styles.rightSide}>
      <h1>Contact Us</h1>
      <form id='contact-form' method='POST'>
        <label htmlFor="name">Full Name</label>
        <input name='name' placeholder='Enter full name...' type='text' />
        <label htmlFor="Email">Email</label>
        <input name='email' placeholder='Enter email...' type='email' />
        <label htmlFor="message">Message</label>
        <textarea rows="6" placeholder='Enter message...' name='message' required>
        </textarea>
        <button type='submit'>Send Message</button>
      </form>
     </div>
      </div>
  )
}

export default Contact