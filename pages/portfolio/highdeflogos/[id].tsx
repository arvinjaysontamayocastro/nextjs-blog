import MainLayout from '../../../components/mainlayout'
import { getAllLogoIds, getLogoData } from '../../../lib/logos'
import Head from 'next/head'
import Date from '../../../components/date'
import bodyStyles from '../../../styles/body.module.css'
import utilStyles from '../../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'

export default function Logo({
  logoData
}: {
  logoData: {
    id: string
  }
}) {
  return (
    <MainLayout>
      <div className={bodyStyles.containercentered}>
        <img src={`/logos/${logoData.id}.svg`} />
        <Link href="/portfolio/highdeflogos">
          <a>← Back to logos</a>
        </Link>
      </div>
    </MainLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllLogoIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const logoData = await getLogoData(params.id as string)
  return {
    props: {
      logoData
    }
  }
}
