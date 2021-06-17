// core
import React from 'react'

// library
import Link from 'next/link'
import Image from "next/image";

// components
import { routes } from "../../constants/routes";

// assets
import styles from './Footer.module.scss'
import logo from '../../public/icons/logo.svg'
import twitter from '../../public/icons/twitter.svg'
import instagram from '../../public/icons/instagram.svg'
import facebook from '../../public/icons/facebook.svg'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <Image src={logo} alt="Eduserve Logo" />
        <div className={styles.footerTopInner}>
          <ul className={styles.social}>
            <li>
              <a href='#' target="_blank" rel="noreferrer">
                <Image src={twitter} alt="twitter" />
              </a>
            </li>
            <li className={styles.social}>
              <a href="#" target="_blank" rel="noreferrer">
                <Image src={instagram} alt="instagram" />
              </a>
            </li>
            <li className={styles.social}>
              <a href="#" target="_blank" rel="noreferrer">
                <Image src={facebook} alt="facebook" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ul className={styles.footerBottom}>
        <li><Link href={routes.privacy}><a>Privacy Statement</a></Link></li>
        <li><Link href={routes.terms}><a>Terms of Service</a></Link></li>
        <li><Link href={routes.contact}><a>Contact Us</a></Link></li>
      </ul>
    </footer>
  )
};
