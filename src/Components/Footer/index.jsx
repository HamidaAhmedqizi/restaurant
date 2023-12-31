import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedinIcon from '@mui/icons-material/LinkedIn'
import styles from './style.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.socialMedia}>
            <InstagramIcon/>
            <FacebookIcon/>
            <TwitterIcon/>
            <LinkedinIcon/>
        </div>
        <p>&copy; 2021 pedrotechpizza.com</p>
    </div>
  )
}

export default Footer