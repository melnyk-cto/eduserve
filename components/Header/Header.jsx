// core
import React, { useState } from 'react'

// library
import Link from 'next/link'
import { useRouter } from "next/router";
import Image from 'next/image'

// components
import { routes } from '../../constants/routes';

// assets
import styles from './Header.module.scss'
import logo from '../../public/icons/logo.svg'

const links = [
  {name: 'Products', url: routes.products},
  {name: 'Solutions', url: routes.solutions},
  {name: 'Customers', url: routes.customers},
  {name: 'Resources', url: routes.resources},
  {name: 'Plans & Pricing', url: routes.plansPricing},
];

export const Header = () => {

  const [activeMobile, setActiveMobile] = useState(false);
  // const [user, setUser] = useState(false);

  const showMenu = () => {
    setActiveMobile(!activeMobile);
  };

  return (
    <div className={styles.header}>
      <div className='container'>
        <div className={styles.headerInner}>
          <Link href={routes.home}>
            <a className={styles.navLogo}>
              <Image src={logo} alt="Eduserve Logo" />
            </a>
          </Link>
          <nav className={`${styles.nav} ${activeMobile ? styles.active : ''}`}>
            {links.map((link, index) => (
              <Link key={index} href={link.url}>
                <a>{link.name}</a>
              </Link>
            ))}
            <button type='button' className={`btn-outlined ${styles.login}`}>Login</button>
          </nav>
          <button type='button' className={`btn-outlined ${styles.login}`}>Login</button>
          <button
            type="button"
            className={activeMobile ? `${styles.burgerMenu}  ${styles.active}` : `${styles.burgerMenu}`}
            onClick={() => showMenu()}>
            <span className={styles.burgerMenuLines} />
          </button>
        </div>
      </div>
    </div>
  )
};
