// core
import React from 'react'

// library
import Link from 'next/link'
import Image from "next/image";

// components
import { routes } from "../../constants/routes";

// assets
import styles from './Footer.module.scss'
import twitter from '../../public/icons/twitter.svg'
import instagram from '../../public/icons/instagram.svg'
import facebook from '../../public/icons/facebook.svg'
import linkenin from '../../public/icons/linkenin.svg'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footerInner}>
          <div className={styles.language}>
            <select>
              <option value='1'>English</option>
              <option value='2'>Русский</option>
            </select>
          </div>
          <ul className={styles.links}>
            <li>CopyRight 2021 ©Edu Serve</li>
            <li><Link href={routes.privacy}><a>Privacy Statement</a></Link></li>
            <li><Link href={routes.terms}><a>Terms of Service</a></Link></li>
            <li><Link href={routes.contact}><a>Contact Us</a></Link></li>
          </ul>
          <ul className={styles.social}>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <Image src={facebook} alt="facebook" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <Image src={instagram} alt="instagram" />
              </a>
            </li>
            <li>
              <a href='#' target="_blank" rel="noreferrer">
                <Image src={linkenin} alt="linkenin" />
              </a>
            </li>
            <li>
              <a href='#' target="_blank" rel="noreferrer">
                <Image src={twitter} alt="twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
};
