import Link from 'next/link'
import styles from './page.module.css'

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
        <div className={styles.link}>
          <h2>This is links for all my Personal Social links.</h2>
          <Link href="/links/Social-Links">Social Links</Link>
        </div>
      </div>
    </main>
  )
}
