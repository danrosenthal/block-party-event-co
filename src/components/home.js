import React from 'react'

import styles from './home.module.scss';

import hero from '../images/hero.jpg';

const Home = () => (
  <div className={styles.Home}>
    <section className={styles.Hero}>
      <img src={hero} alt="wedding scene with bride and groom, confetti falling" />
      <h1>get a wedding jackass</h1>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
    </section>
    <section className={styles.Services}>
      <h1>services what we offering</h1>
      <div>
        <img alt="wedding scene that illustrates design"/>
        <h2>Design</h2>
        <p>Ipsum dolor sit amet, consectetur adipiscing elit, sedo eiusmod tempor incididunt lore ut lore et dolore Ipsum dolor sit amet elit consectetur adipiscing.</p>
      </div>
      <div>
        <img alt="professional scene that illustrates planning"/>
        <h2>Planning</h2>
        <p>Ipsum dolor sit amet, consectetur adipiscing elit, sedo eiusmod tempor incididunt lore ut lore et dolore Ipsum dolor sit amet elit consectetur adipiscing.</p>
      </div>
      <div>
        <img alt="party scene with happy guests that illustrates coordination"/>
        <h2>Coordination</h2>
        <p>Ipsum dolor sit amet, consectetur adipiscing elit, sedo eiusmod tempor incididunt lore ut lore et dolore Ipsum dolor sit amet elit consectetur adipiscing.</p>
      </div>
    </section>
    <section className={styles.Team}>
      <img alt="a headshot of chelsea baker, founder and lead planner" />
      <h1>Meet Chelsea</h1>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna ali.</p>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nosquam erat volutpat.</p>
    </section>
    <section className={styles.Blog}>
      <h1>From the blog</h1>
      <article>
        <h1>Hire a wedding planner</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna ali.</p>
        <a href="articles/hire-a-wedding-planner">read more</a>
      </article>
    </section>
    <section className={styles.Contact}>
      <h1>Get in touch</h1>
      <form>
        <div>
          <label htmlFor="name">
            <span>Name</span>
            <input type="text" id="name" name="name" />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            <span>Email address</span>
            <input type="email" id="email" name="email" />
          </label>
        </div>
        <div>
          <label htmlFor="phone">
            <span>Phone number</span>
            <input type="text" id="phone" name="phone" />
          </label>
        </div>
        <div>
          <label htmlFor="message">
            <span>Your message</span>
            <textarea id="message" name="message" />
          </label>
        </div>
      </form>
    </section>
  </div>
);

export default Home
