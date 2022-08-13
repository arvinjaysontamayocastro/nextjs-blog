import utilStyles from '../styles/utils.module.css'
import styles from './header.module.css'
import Image from 'next/image'
import Link from 'next/link'

const logoAlt = 'AO'
const logoText = 'AO'

export default function Header() {
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
        </nav>
      </div>
    </div>
  )
}
