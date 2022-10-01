import React from 'react'

import SectionTitle from '../../components/SectionTitle';
import SubmitButton from '../../components/SubmitButton';

import styles from '../../styles/Contacts.module.css'

export default function About() {
  return (
    <div className={styles.contacts_container}>
      <div className={styles.contacts_hero}>
        <SectionTitle name="CONTACT US  " />
      </div>
      <section class="section box columns has-text-centered-mobile">
        <div class="column container has-text-centered">
          <h3 class="title is-size-3">LETS WORK!</h3>
          <form>
            <div class="field">
              <label class="label">First Name</label>
              <div class="control">
                <input
                  class="input is-primary"
                  type="text"
                  placeholder="Enter Your Complete Name"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  class="input is-primary"
                  type="email"
                  placeholder="e.g. alex@example.com"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea
                  class="textarea is-primary"
                  placeholder=""
                ></textarea>
              </div>
            </div>

            <SubmitButton name="submit" />
          </form>
        </div>
        {/* ADDRESS */}
        <div class="column container has-text-centered">
          <h3 class="title is-size-3">HEADQUARTERS</h3>
          <p>Lorem Health Solutions</p>
          <br />
          <p>2504 Manuel Roxas Street,</p>
          <br />
          <p>Santa Ana, Manila, Philippines 1009</p>
          <br />
          <h3 class="title is-size-3">CONTACT INFO</h3>
          <a href="mailto:Sales@loremhealthsolutions.com">
            <p class="has-text-black">Sales@loremhealthsolutions.com</p>
          </a>
          .
          <br />
          <a href="tel:08562000000">
            <p class="has-text-black">Tel. #. (08562) - 00 - 0000</p>
          </a>
          .
          <br />
        </div>
      </section>
    </div>
  );
}
