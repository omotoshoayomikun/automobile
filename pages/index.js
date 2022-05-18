import Head from 'next/head'
import Image from 'next/image'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'
import CarList from '../components/CarsList'

export default function Home() {
  return (
    <div>
      <Head>
        <title>HELLO </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Slider />
    <CarList />
    </div>
  )
}
