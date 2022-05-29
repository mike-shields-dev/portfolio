import { Fragment } from "react"
import css from "./NavIcons.module.css"

function HomeIcon() {
  return (
    <Fragment>
      <svg
        width='24px'
        height='24px'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'>
        <path d='M3 10.25V20C3 20.5523 3.44771 21 4 21H8.42857C8.98086 21 9.42857 20.5523 9.42857 20V13.2857H14.5714V20C14.5714 20.5523 15.0191 21 15.5714 21H20C20.5523 21 21 20.5523 21 20V10.25C21 9.93524 20.8518 9.63885 20.6 9.45L12 3L3.4 9.45C3.14819 9.63885 3 9.93524 3 10.25Z' />
      </svg>
      <span className={css.NavIconText}>home</span>
    </Fragment>
  )
}

function ProjectsIcon() {
  return (
    <Fragment>
      <svg
        width='24px'
        height='24px'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'>
        <path d='M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9Z' />
        <path d='M16 7V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V7' />
        <path d='M22 12H2' />
        <path d='M7 12V14' />
        <path d='M17 12V14' />
      </svg>

      <span className={css.NavIconText}>projects</span>
    </Fragment>
  )
}

function ContactIcon() {
  return (
    <Fragment>
      <svg
        width='24px'
        height='24px'
        viewBox='0 -2 24 22'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'>
        <rect x='3' y='5' width='18' height='14' rx='1' />
        <path d='M20 5.5L12 13L4 5.5' />
      </svg>
      <span className={css.NavIconText}>contact</span>
    </Fragment>
  )
}

export { HomeIcon, ProjectsIcon, ContactIcon }
