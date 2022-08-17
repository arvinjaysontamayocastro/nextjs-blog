import Head from 'next/head'
import Layout, { siteTitle } from '../../../components/layout'
import styles from '../../../components/layout.module.css'
import utilStyles from '../../../styles/utils.module.css'
import bodyStyles from '../../../styles/body.module.css'
import { getLoginData } from '../../../lib/loginData'
import Link from 'next/link'
import Date from '../../../components/date'
import loginHi from '../../../styles/login/hi.module.css';
import BasicLayout from '../../../components/layouts/basiclayout'
import { GetStaticProps } from 'next'

export default function Home({
  loginData
}: {
  loginData: {
    username: string
    usernames: [string]
  }
}) {
  return (
    <BasicLayout>
      <Head>
        <title>baseofui : Design Login</title>
      </Head>
      <div className='floating'><a className='link--backtomenu' href="/">Back to menu</a></div>
      <div className={loginHi.greet}>
        <div className='backdrop'></div>
        <div className='container center medium padded'>
          <form>
            <div className={loginHi.greeting}>
              <pre>hi</pre>
              <h1>{loginData.username}</h1>
            </div>
            <input type="text" placeholder='Enter your password' />
            <div className={loginHi.buttonGroup}>
              <div className={loginHi.linkContainer}><a>Forgot Password</a><a>Change user</a></div><button>Login</button>
            </div>
          </form>
        </div>
      </div>
    </BasicLayout>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const loginData = getLoginData()
  return {
    props: {
      loginData
    }
  }
}
