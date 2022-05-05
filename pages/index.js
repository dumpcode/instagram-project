import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Modal from '../components/Modal'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-gray-50
     h-screen overflow-y-scroll
     scrollbar-hide
    ">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {/* Header */}
    <Modal />
    <Header />
    {/* Feed */}
    <Feed />
    {/* Modal */}


    </div>
  )
}
