import Head from 'next/head'
import Layout, { siteTitle } from '../../../components/layout'
import WebsiteLayout from '../../../components/websitelayout'
import styles from '../../components/layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import bodyStyles from '../../../styles/body.module.css'
import { getHighDefLogosData } from '../../../lib/logos'
import Link from 'next/link'
import Date from '../../../components/date'
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
    <WebsiteLayout>
      <div className={bodyStyles.websiteuna}>
        <header className={bodyStyles.header}>
          <button className={bodyStyles.menu}>
            <span></span><span></span><span></span>
          </button>
          <div className={bodyStyles.spacer}></div>
          <a className={bodyStyles.linkdisabled}>Team</a>
          <a className={bodyStyles.linkdisabled}>Login</a>
          <Link href="/portfolio/websites">
            <a className={bodyStyles.link}>← Back to websites</a>
          </Link>
        </header>
        <div className={bodyStyles.salute}>
          <div className={bodyStyles.container}>
            <div className={bodyStyles.halffirst}>
              <h1>Una</h1>
              <sub>Your time entry, billing and collaboration in one place</sub>
              <button className={bodyStyles.mainbutton}>Start time keeping</button>
            </div>
            <div className={bodyStyles.halfsecond}>
              <div className={bodyStyles.video}><button className={bodyStyles.play}></button></div>
            </div>
          </div>
        </div>
        <div className={bodyStyles.functions}>
          <div className={bodyStyles.container}>
            <h1>Productivity</h1>
            <sub>Planning without the hassle</sub>
            <div className={bodyStyles.functioncontainer}>
              <div className={bodyStyles.function}>
                <strong>Plan</strong> your project tasks ahead
              </div>
              <div className={bodyStyles.function}>
                <strong>Assign</strong> task to team members
              </div>
              <div className={bodyStyles.function}>
                <strong>Track</strong> progress realtime
              </div>
              <div className={bodyStyles.function}>
                <strong>Lock in</strong> deliverables
              </div>
              <div className={bodyStyles.function}>
                <strong>Update</strong> status quick
              </div>
            </div>
          </div>
        </div>
        <div className={bodyStyles.startnow}>
          <div className={bodyStyles.container}>
            <h1>Are you ready?</h1>
            <sub>Free trial on your first month</sub>
            <button className={bodyStyles.mainbutton}>Get started now</button>
          </div>
        </div>
      </div>
    </WebsiteLayout>
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
