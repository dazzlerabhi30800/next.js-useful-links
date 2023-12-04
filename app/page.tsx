import styles from './page.module.css'

export default function Home() {
  return (
    <main >
      <div className={styles.infoWrapper}>
        <h1>
          Link Porfolio Website
        </h1>
        <p className={styles.infoPara}>This website contains the links of all useful assets & sources.</p>
      </div>
    </main>
  )
}
