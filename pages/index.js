import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Johnny Gatlin III Portfolio Home</title>
        <meta name="description" content="Created with Next.js" />
        <link rel="icon" href="/favicon.ico" /> {/* Change the Header Icon */}
      </Head>

      <main className={styles.main}>
        <h3 className={styles.description}>
          Welcome! My name is
        </h3>
        <h1 className={styles.title}>
          JOHNNY GATLIN III
        </h1>

        <p className={styles.description}>
          I am a full-stack software developer who is eager to help companies further their goals!
        </p>

        <div className={styles.grid}>
          <Link href="/projects">
            <a className={styles.card}>
              <h2>Projects</h2>
              <p>Interested in my projects? Click here to browse what I have created!</p>
            </a>
          </Link>

          <Link href="https://drive.google.com/file/d/1dQR4ViGyD28DRYP6EXQs0T_GipLoHaH-/view?usp=sharing">
            <a target="_blank" className={styles.card} rel="noreferrer">
              <h2>Resume</h2>
              <p>
                Want to see my resume? Click here to view and download the PDF file!
              </p>
            </a>
          </Link>

          <Link href="https://github.com/johnnythethird">
            <a target="_blank" className={styles.card} rel="noreferrer">
              <h2>GitHub Profile</h2>
              <p>Check out my Github profile for more information about me and my repositories.</p>
            </a>
          </Link>

          <Link href="https://www.linkedin.com/in/johnny-gatlin-iii-673b18247/">
            <a target="_blank" className={styles.card} rel="noreferrer">
              <h2>LinkedIn Profile</h2>
              <p>If you would like to contact me, you can check out my LinkedIn!</p>
            </a>
          </Link>
          
        </div>

        <div className={styles.tech}>
          <div className={styles.techBody}>
            <h1>Languages</h1>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Python</li>
              <li>Java</li>
              <li>C</li>
              <li>C++</li>
              <li>C#</li>
              <li>MySQL</li>
              <li>MATLAB</li>
            </ul>
          </div>

          <div className={styles.techBody}>
            <h1>Frameworks</h1>
            <ul>
              <li>MongoDB</li>
              <li>Express.js</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Next.js</li>
              <li>SASS</li>
              <li>.NET</li>
            </ul>
          </div>

          <div className={styles.techBody}>
            <h1>Technologies/Misc.</h1>
            <ul>
              <li>VSCode</li>
              <li>Git/GitHub</li>
              <li>GitHub Pages</li>
              <li>Postman</li>
              <li>Bash</li>
              <li>Agile Methodology</li>
              <li>REST API</li>
              <li>XAMPP</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
