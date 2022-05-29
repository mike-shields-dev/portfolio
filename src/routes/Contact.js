import React from "react"
import css from "./Contact.module.css"
import {TwitterIcon, GitHubIcon, LinkedInIcon, CodeWarsIcon} from "../components/icons/SocialIcons"

export default function Contact() {
  return (
    <div className={css.contact}>
      <p className={css.cta}>
        Connect with me on social media or email me using the form below
      </p>
      <div className={css.socialLinks}>
        <a
          className={css.socialLink}
          href='https://www.linkedin.com/in/michael-shields-a836b5211/'
          target='_blank'
          rel='noreferrer'>
          <LinkedInIcon />
        </a>
        <a
          className={css.socialLink}
          href='https://twitter.com/micklebasher'
          target='_blank'
          rel='noreferrer'>
          <TwitterIcon />
        </a>
        <a
          className={css.socialLink}
          href='https://www.codewars.com/users/mike-shields'
          target='_blank'
          rel='noreferrer'>
          <CodeWarsIcon />
        </a>
        <a
          className={css.socialLink}
          href='https://github.com/mike-shields-dev'
          target='_blank'
          rel='noreferrer'>
          <GitHubIcon />
        </a>
      </div>

      <form className={css.Form}>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' name='firstName' placeholder='First Name' />

        <label htmlFor='lastName'>Last Name</label>
        <input type='text' name='lastName' placeholder='Last Name' />

        <label htmlFor='email'>Email</label>
        <input type='email' name='email' placeholder='Email' />

        <label htmlFor='subject'>Subject</label>
        <input type='text' name='subject' placeholder='Subject' />

        <label htmlFor='message'>Message</label>
        <textarea name='message' placeholder='Message' rows='5' />
        <button className={css.SubmitBttn} type='submit'>
          Send
        </button>
      </form>
    </div>
  )
}
