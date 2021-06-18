import styles from '../styles/Home.module.scss'

// library
import Image from "next/image";
import classNames from "classnames";

// components
import { Layout } from "../components";
import banner from '../public/icons/banner.svg'
import surveys from '../public/icons/surveys.svg'
import insights from '../public/icons/insights.svg'
import enterprise from '../public/icons/enterprise.svg'
import arrowRight from '../public/icons/arrow-right.svg'
import workgoal from '../public/images/workgoals.png'
import employees from '../public/icons/employees.svg'
import quote from '../public/icons/quote.svg'
import customer from '../public/images/customer.png'

const Home = () => {
  return (
    <Layout>
      <section className={styles.banner}>
        <div className='container'>
          <div className={styles.bannerInner}>
            <div className={styles.bannerItem1}>
              <h1>One Platform, Many Solutions</h1>
              <p>
                Keep your team aligned and engaged. Manage tasks, create team schedules, track work time, and bill your
                clients from the same platform.
              </p>
              <label className={`${styles.buttons} mobile`}>
                <input type='text' placeholder='Work Email' />
                <button type='button' className='btn-filled'>Start My Trail</button>
              </label>
            </div>
            <div className={styles.bannerItem2}>
              <Image src={banner} alt='banner' />
            </div>
            <label className={`${styles.buttons} desktop`}>
              <input type='text' placeholder='Work Email' />
              <button type='button' className='btn-filled'>Start My Trail</button>
            </label>
          </div>
        </div>
      </section>
      <section className={styles.rating}>
        <div className='container ta-c'>
          <h4>Trusted by 50,000+ Customers Around the Globe</h4>
          <p>“I couldn’t have asked for a better experience with Elevate!” 4.9</p>
        </div>
      </section>
      <section className={styles.platform}>
        <div className='container ta-c'>
          <h2>One Platform, Many Solutions</h2>
          <div className={styles.platformInner}>
            <div className={styles.platformItems}>
              <div className={styles.image}><Image src={surveys} alt='surveys' /></div>
              <h5>Surveys</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, abore et dolore magna aliqua.</p>
              <a href='#'>Learn More <span className={styles.icon}><Image src={arrowRight} alt='arrow' /></span></a>
            </div>
            <div className={styles.platformItems}>
              <div className={styles.image}><Image src={insights} alt='insights' /></div>
              <h5>Insights</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, abore et dolore magna aliqua.</p>
              <a href='#'>Learn More <span className={styles.icon}><Image src={arrowRight} alt='arrow' /></span></a>
            </div>
            <div className={styles.platformItems}>
              <div className={styles.image}><Image src={enterprise} alt='enterprise' /></div>
              <h5>Enterprise</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, abore et dolore magna aliqua.</p>
              <a href='#'>Learn More <span className={styles.icon}><Image src={arrowRight} alt='arrow' /></span></a>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.goals}>
        <div className='container'>
          <div className={styles.goalsInner}>
            <div className={styles.goalsItem1}>
              <Image src={workgoal} alt='workgoal' />
            </div>
            <div className={styles.goalsItem2}>
              <h3>You`ve got #workgoals. We`ll help you meet them.</h3>
              <p>
                Keep a competitive edge by truly understanding the voice of your customers. Customer satisfaction
                surveys help you connect at multiple touchpoints to find out exactly what your customers want, need, and
                expect.
              </p>
              <button type='button' className='btn-filled'>Creat Survey</button>
            </div>
          </div>
        </div>
      </section>
      <section className={classNames(styles.goals, styles.reverse)}>
        <div className='container'>
          <div className={styles.goalsInner}>
            <div className={styles.goalsItem1}>
              <Image src={employees} alt='workgoal' />
            </div>
            <div className={styles.goalsItem2}>
              <h3>Find out what employees really think</h3>
              <p>
                Learn what’s working and what’s not directly from your employees. Measure employee satisfaction, conduct
                360 reviews, or even send out compliance quizzes. Whether you’re in HR or a team lead,employee surveys
                help you get the answers you need.
              </p>
              <button type='button' className='btn-filled'>Creat Survey</button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.colored}>
        <div className={styles.coloredInner}>
          <div className={styles.coloredItem1}>
            <h3>For you</h3>
            <p>
              Get a platform that can grow and change along with your survey needs over time. Browse our plans to learn
              more about specific features.
            </p>
            <a href='#' className='btn-second'>See All Plans</a>
          </div>
          <div className={styles.coloredItem2}>
            <h3>For your organization</h3>
            <p>
              Get a platform that can grow and change along with your survey needs over time. Browse our plans to learn
              more about specific features.
            </p>
            <a href='#' className='btn-second'>Know More</a>
          </div>
        </div>
      </section>
      <section className={styles.author}>
        <div className='container'>
          <div className={styles.authorInner}>
            <div className={styles.authorItem1}>
              <div className={styles.customer}>
                <Image src={customer} alt='c' />
              </div>
              <h4>Shannon J. Gregg</h4>
              <p>President, Cloud Adoption Solutions</p>
            </div>
            <div className={styles.authorItem2}>
              <div className={styles.authorQuote}>
                <div className={styles.icon}><Image src={quote} alt='quote' /></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.contact}>
        <div className='container'>
          <div className={styles.contactInner}>
            <h3>Creat your free account today</h3>
            <label className={styles.buttons}>
              <input type='text' placeholder='Work Email' />
              <button type='button' className='btn-filled'>Start My Trail</button>
            </label>
            <p>Just Getting Started with creating a new Survey?</p>
            <a href='#'>Get a Free Account Here</a>
          </div>
        </div>
      </section>
    </Layout>
  )
};

export default Home
