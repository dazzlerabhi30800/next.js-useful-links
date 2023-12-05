import Link from 'next/link'
import styles from './page.module.css'
import data from '@/data/links.json';
import { linkInterface } from '@/type';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.infoWrapper}>
        <h1>
          Link Porfolio Website
        </h1>
        <p className={styles.infoPara}>This website contains the links of all useful assets & sources.</p>
      </div>
      <div className={styles.linksWrapper}>
        {data.linkList.map((item: linkInterface, index) => {
          return (
            <div className={styles.link} key={index}>
              <h2>{item.title}</h2>
              <Link prefetch={false} href={item.link}>{item.name}</Link>
            </div>
          )
        })}
      </div>
    </main>
  )
}
