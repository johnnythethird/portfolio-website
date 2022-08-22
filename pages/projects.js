import Image from 'next/image'
import styles from '../styles/Home.module.css'
import workoutPhoto from '../public/Workout Picture.png'
import ebuyPhoto from '../public/E-Buy Picture 2.png'
import Link from 'next/link'

const projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.projectsBody}>
        <h1>WORKOUT TRACKER</h1>
        <Link href='https://johnnythethird.github.io/Workout-Tracker/'><a target="_blank" rel="noreferrer" className={styles.headerBtn}>Website</a></Link>
        <Link href='https://github.com/johnnythethird/Workout-Tracker'><a target="_blank" rel="noreferrer" className={styles.headerBtn}>GitHub Code</a></Link>
        <h3>
          This application allows users to create their own workout schedule. 
          The user must create an account and then they will be able to start creating their own workout schedule.
        </h3>
        <h3>
          If you encounter any problems with the website, download the github code and run the build from there.
        </h3>
        <h4>
          Technologies used: MERN Stack (MongoDB, Express.js, React.js, Node.js), Google Authentication, Github Pages
        </h4>
        <div className={styles.projectsImages}>
          <Image src={workoutPhoto} alt="Workout Buddy"/>
        </div>
      </div>
      

      <div className={styles.projectsBody}>
        <h1>E-BUY ECOMMERCE WEBSITE</h1>
        <Link href='https://johnnythethird.github.io/E-Buy-Website/'><a target="_blank" rel="noreferrer" className={styles.headerBtn}>Website</a></Link>
        <Link href='https://github.com/johnnythethird/E-Buy-Website'><a target="_blank" rel="noreferrer" className={styles.headerBtn}>GitHub Code</a></Link>
        <h3>
          This application is an e-commerce website that will allow users to sign/log in and get items the user wishes to buy.
          They can also use Paypal to buy whatever they want.
        </h3>
        <h3>
          If you encounter any problems with the website, download the github code and run the build from there.
        </h3>
        <h4>
          Technologies used: MERN Stack (MongoDB, Express.js, React.js, Node.js), Github Pages, Paypal REST API
        </h4>
        <div className={styles.projectsImages}>
          <Image src={ebuyPhoto} alt="E-Buy"/>
        </div>
      </div>
    </div>
  )
}

export default projects