import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contact.module.css';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_tga0laq',
        'template_lpeep85',
        form.current,
        '-LhwL47kZOz-HHXVT'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  function FormAt({ className, label, type, name, placeholder, input }) {
    return (
      <div className={styles['emailSend_inputs']}>
        <label>{label}</label>
        {input ? (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={styles[className]}
          />
        ) : (
          <textarea
            name={name}
            placeholder={placeholder}
            className={styles[className]}
          />
        )}
      </div>
    );
  }

  return (
    <form ref={form} onSubmit={sendEmail} className={styles['emailSend']}>
      <FormAt
        className='emailSend__name'
        label='Name'
        type='text'
        name='user_name'
        placeholder='FullName'
        input={true}
      />
      <FormAt
        className='emailSend__email'
        label='Email'
        type='email'
        name='user_email'
        placeholder='yourEmail@example.com'
        input={true}
      />
      <FormAt
        className='emailSend__message'
        label='Message'
        name='message'
        placeholder='Message...'
        input={false}
      />
      <input type='submit' value='Send' className={styles['emailSend__send']} />
    </form>
  );
};
