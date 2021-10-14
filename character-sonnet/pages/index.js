import Head from 'next/head';
import Image from 'next/image';
import TestForm from '../components/testForm';
import styles from '../styles/Home.module.css';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Character Sonnet</title>
        <meta name="description" content="Character Sonnet 2 Homepage"/>
      </Head>
      <header>
        <h1>Character Sonnet</h1>
      </header>
      <main> 
        <article>
          <h3>Our Vision</h3>
          <p>
            This is the main text of the page which will describe to the user the things they can do. It is very important that this text be clear and concise as well as delivered in a way that is visually cohesive with the rest of the presentation, as this will be the user's first impression of the product. 
          </p>       
        </article>
        <section>
          <h3>Get Started!</h3>
          <TestForm/>
        </section>
      </main>
      <footer>
        <p>Created by BarraBosso software group</p>
      </footer>
    </div>
  )
}
