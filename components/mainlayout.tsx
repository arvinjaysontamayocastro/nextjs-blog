import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Header from './header'

const name = 'AO'
export const siteTitle = 'Next.js Sample Website'

export default function MainLayout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div>
      <Header></Header>
      <div className={styles.container}>
        <main>{children}</main>
      </div>
    </div>
  )
}
