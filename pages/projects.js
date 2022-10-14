import Image from 'next/image'
import styles from '../styles/Home.module.css'
import workoutPhoto from '../public/Workout Picture.png'
import ebuyPhoto from '../public/E-Buy Picture 2.png'
import Link from 'next/link'

const projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.projectsBody}>
        <h1>COMPANY HOTEL MANAGEMENT SYSTEM</h1>
        <Link href='https://github.com/johnnythethird/CompanyHotelManagementSystem'><a target="_blank" rel="noreferrer" className={styles.headerBtn}>GitHub Code</a></Link>
        <Link href='https://www.youtube.com/watch?v=eL6Me0SsE44&ab_channel=JohnnyGatlin'><a target="_blank" rel="noreferrer" className={styles.headerBtn}>Video Demo</a></Link>
        <h3>
          This application is a simulation of a hotel management system that uses MySQL as a back-end to store data on Guests, Rooms, and Reservations.
        </h3>
        <h4>
          Technologies used: C# for Frontend and MySQL for backend
        </h4>
      </div>


      <div className={styles.projectsBody}>
        <h1>WORKOUT TRACKER</h1>
        <Link href='https://johnnythethird.github.io/Workout-Tracker/'><a target="_blank" rel="noreferrer" className={styles.headerBtn}>Website</a></Link>
        <Link href='https://github.com/johnnythethird/Workout-Tracker'><a target="_blank" rel="noreferrer" className={styles.headerBtn}>GitHub Code</a></Link>
        <Link href='https://www.youtube.com/watch?v=onK_g3lBwb4&ab_channel=JohnnyGatlin'><a target="_blank" rel="noreferrer" className={styles.headerBtn}>Video Demo</a></Link>
        <h3>
          This application allows users to create their own workout schedule. 
          The user must create an account and then they will be able to start creating their own workout schedule.
        </h3>
        <h3>
          If you encounter any problems with the website, download the github code and run the build from there or watch the video demo.
        </h3>
        <h4>
          Technologies used: MERN Stack (MongoDB, Express.js, React.js, Node.js), Google Authentication, Github Pages
        </h4>
      </div>
      

      <div className={styles.projectsBody}>
        <h1>WEATHER CHECKER APP</h1>
        <Link href='https://github.com/johnnythethird/Weather-Checker-Application'><a target="_blank" rel="noreferrer" className={styles.headerBtn}>GitHub Code</a></Link>
        <Link href='https://www.youtube.com/watch?v=ePl_rLiWzfM'><a target="_blank" rel="noreferrer" className={styles.headerBtn}>Video Demo</a></Link>
        <h3>
          This application allows users to input a city and will be given results of the temperature in Celcius and Fahrenheit. Utilizes OpenWeather API to get realtime temperature.
        </h3>
        <h4>
          Technologies used: C# and OpenWeatherAPI


        </h4>
      </div>
    </div>
  )
}

export default projects