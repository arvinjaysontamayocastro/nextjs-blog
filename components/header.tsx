import utilStyles from '../styles/utils.module.css'
import styles from './header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';

const logoAlt = 'AO'
const logoText = 'AO'

export default function Header() {

  const [isMenu, setIsMenu] = useState(false);
  
  const contentClassname = isMenu
  ? `${styles["nav-open"]} ${styles.sidebar}`
  : styles.sidebar;

  const menuClassName = isMenu
  ? `${styles["nav-open"]} ${styles.menu} ${styles.sidebarmenu}`
  : `${styles.menu} ${styles.sidebarmenu}`;

  return (
    <div className={styles.bar}>
      <div className={styles.container}>
        <Image
          priority
          src="/images/logo.svg"
          className={styles.logoImage}
          height={40}
          width={40}
          alt={logoText}
        />
        <div className={styles.title}>
          Headers
        </div>
        <nav className={styles.nav}>
          <Link href="/">
            <a className={styles.link}>
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className={styles.link}>
              About
            </a>
          </Link>
          <button className={styles.menu} onClick={() => setIsMenu(!isMenu)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
      <div className={contentClassname}>
          <h2>Menu</h2>
          <button className={menuClassName} onClick={() => setIsMenu(!isMenu)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <Link href="/">
            <a className={styles.link}>
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className={styles.link}>
              About
            </a>
          </Link>
      </div>
    </div>
  )
}
