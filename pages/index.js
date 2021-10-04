import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur incidunt, natus dolores quo a, aliquam iste consequatur architecto error ducimus ex. Autem voluptatem rerum exercitationem minima voluptate tempore facilis sit.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur incidunt, natus dolores quo a, aliquam iste consequatur architecto error ducimus ex. Autem voluptatem rerum exercitationem minima voluptate tempore facilis sit.</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja List</a>
      </Link>
    </div>
  )
}
