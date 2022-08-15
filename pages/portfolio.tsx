import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import MainLayout from '../components/mainlayout'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import bodyStyles from '../styles/body.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <MainLayout>
      <div className={bodyStyles.wowportfolio}>
        <div className={bodyStyles.containercentered}>
          <h1>Portfolio</h1>
        </div>
        {/* <div className={bodyStyles.container}>
          List
        </div> */}
      </div>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
