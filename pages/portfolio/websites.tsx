import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import MainLayout from '../../components/mainlayout'
import styles from '../../components/layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import bodyStyles from '../../styles/body.module.css'
import { getHighDefLogosData } from '../../lib/logos'
import Link from 'next/link'
import Date from '../../components/date'
import { GetStaticProps } from 'next'
import Image from 'next/image'


export default function Home({
  allLogosData
}: {
  allLogosData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <MainLayout>
      <div className={bodyStyles.wowportfolio}>
        <div className={bodyStyles.containercentered}>
          <h1>Websites</h1>
          <div className={bodyStyles.websitecontainer}>
            <Link href="/portfolio/websites/una">
              <a>
                <img src={`/websites/una.png`} className="bodyStyles.website" />
              </a>
            </Link>
          </div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      </div>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allLogosData = getHighDefLogosData()
  return {
    props: {
      allLogosData
    }
  }
}
