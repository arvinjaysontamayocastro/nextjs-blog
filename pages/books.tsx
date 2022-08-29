import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import MainLayout from '../components/mainlayout'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import bodyStyles from '../styles/body.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetServerSideProps } from 'next'

export default function Home({
  data
}: {
  data: {
    bookName: string
    price: string
    category: string
    author: string
    id: string
  }[]
}) {
  return (
    <MainLayout>
      <div className={bodyStyles.wowalpha}>
        {/* <div className='backdrop'></div> */}
        <div className={bodyStyles.containercentered}>
          <pre>Need help with your</pre>
          <h1>online presence?</h1>
          <Link href="/about">
            <a className={bodyStyles.link}>
              Get started now
            </a>
          </Link>
          {data.map(({ id, bookName }) => (
            <Link href={`/portfolio/highdeflogos/${id}`}>
              <div className={bodyStyles.logocard}>
                {bookName}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className={bodyStyles.wowservices}>
        <div className={bodyStyles.containercentered}>
          <pre>Services</pre>
          <Link href="/portfolio/highdeflogos">
            <a className={bodyStyles.link}>
              High Definition Logos
            </a>
          </Link>
          <Link href="/portfolio/websites">
            <a className={bodyStyles.link}>
              Websites
            </a>
          </Link>
          <a className={bodyStyles.linkdisabled}>
            User Experience Design
          </a>
          <a className={bodyStyles.linkdisabled}>
            Form Management
          </a>
          <a className={bodyStyles.linkdisabled}>
            Team Management
          </a>
          <a className={bodyStyles.linkdisabled}>
            Online store
          </a>
        </div>
      </div>
      {/* <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Technology Director at ▵⚬+x</p>
        <p>
          Contact me ate aotx127@gmail.com or 09179134518.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
    </MainLayout>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  const res = await fetch(`https://baseofui-api.azurewebsites.net/api/books`)
  const data = await res.json()

  console.log("data");
  console.log(data);

  // Pass data to the page via props
  return { props: { data } }
}
