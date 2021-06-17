import styles from '../styles/Home.module.scss'

// library
import Image from "next/image";

// components
import { Layout } from "../components";
import banner from '../public/icons/banner.svg'

const Home = () => {
  return (
    <Layout>
      <section className={styles.banner}>
        <div className='container'>
          <div className='row align-items-center justify-content-between'>
            <div className='col-md-5'>
              <h1>One Platform, Many Solutions</h1>
              <p>
                Keep your team aligned and engaged. Manage tasks, create team schedules, track work time, and bill your
                clients from the same platform.
              </p>
              <label htmlFor='workEmail' className={styles.buttons}>
                <input id='workEmail' type='text' placeholder='Work Email' />
                <button type='button' className='btn-primary'>Start My Trail</button>
              </label>
            </div>
            <div className='col-md-6'>
              <Image src={banner} alt='banner' />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container ta-c'>
          <h4>Trusted by 50,000+ Customers Around the Globe</h4>
          <p>“I couldn’t have asked for a better experience with Elevate!” 4.9</p>
        </div>
      </section>
      <section>
        <div className='container ta-c'>
          <h2>One Platform, Many Solutions</h2>
        </div>
      </section>
    </Layout>
  )
};

export default Home
