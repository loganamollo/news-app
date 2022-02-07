import Head from "next/head";
import Layout from "../components/Layout";

import styles from '../styles/Home.module.css'

export default function Home(){
  return(
    <Layout>
      <div className='page-container'>
        <div className={styles.main}>
            <h1>Next JS News App by Logan 🥰😚</h1>
            <h3>Your one stop shop for the latest news articles</h3>
        </div>
      </div>
    </Layout>
  )
}