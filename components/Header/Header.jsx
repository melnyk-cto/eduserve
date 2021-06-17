// core
import React from 'react'

// library
import Link from 'next/link'
import classNames from "classnames";
import { useRouter } from "next/router";
import Image from 'next/image'

// components
import { routes } from '../../constants/routes';

// assets
import styles from './Header.module.scss'
import logo from '../../public/icons/logo.svg'

export const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.navWrapper}>
        <div className={styles.navTop}>
          <Link href={routes.home}>
            <a className={styles.navLogo}>
              <Image src={logo} alt="Eduserve Logo" />
            </a>
          </Link>

        </div>
        <div className={styles.navItems}>
          <Link href={routes.products}>
            <a className={classNames(styles.menuItem, {[styles.active]: (router.pathname === routes.products)})}>
              Products
            </a>
          </Link>
          <Link href={routes.solutions}>
            <a className={classNames(styles.menuItem, {[styles.active]: router.pathname === routes.solutions})}>
              Solutions
            </a>
          </Link>
          <Link href={routes.customers}>
            <a className={classNames(styles.menuItem, {[styles.active]: router.pathname === routes.customers})}>
              Customers
            </a>
          </Link>
          <Link href={routes.resources}>
            <a className={classNames(styles.menuItem, {[styles.active]: router.pathname === routes.resources})}>
              Resources
            </a>
          </Link>
          <Link href={routes.plansPricing}>
            <a className={classNames(styles.menuItem, {[styles.active]: router.pathname === routes.plansPricing})}>
              Plans & Pricing
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
};
