import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

const Navbar = () => {
  return (
    <nav>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Created with Next.js" />
        <link rel="icon" href="/favicon.ico" /> {/* Change the Header Icon */}
      </Head>

      <div className={styles.topDiv}>
        <Link href='/'><a className={styles.headerBtn}>Home</a></Link>
        <Link href='/projects'><a className={styles.headerBtn}>Projects</a></Link>
        <Link href='https://drive.google.com/file/d/1jRGrmaQXMBGOrNeeZ---N4YDIZMg418D/view?usp=sharing'><a className={styles.headerBtn} target="_blank">Resume</a></Link>
        <Link href='https://github.com/johnnythethird'><a className={styles.headerBtn} target="_blank">GitHub</a></Link>
        <Link href='https://www.linkedin.com/in/johnny-gatlin-iii-673b18247/'><a className={styles.headerBtn} target="_blank">LinkedIn</a></Link>
        <Link href='/contact'><a className={styles.headerBtn}>Contact</a></Link>
      </div>
    </nav>
  )
}

export default Navbar