/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head"
import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import styles from '../styles/Home.module.css'
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log('Sending')
  let data = {
      name,
      email,
      message
    }
  fetch('/api/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setBody('')
      }
    })
  }

  return (
    <div>
      <Head>
        <title>Contact Page</title>
        <meta name="description" content="Created with Next.js" />
        <link rel="icon" href="/favicon.ico" /> {/* Change the Header Icon */}
      </Head>

      <div>
        <ToastContainer position="bottom-center" limit={1} />
        <div className={styles.contactHead}>
          <h1>Send an email to me at johnnythethird@gmail.com</h1>
        </div>
      </div>
    </div>
  )
}

export default contact