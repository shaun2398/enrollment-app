import React, { useState } from 'react'

import SectionTitle from '../../components/SectionTitle';

import MessageForm from "../../components/contacts/MessageForm";
import Address from '../../components/contacts/Address';

import styles from "../../styles/Contacts.module.css";

export default function About() {
  return (
    <div className={styles.contacts_container}>
      <div className={styles.contacts_hero}>
        <SectionTitle name="CONTACT US" />
      </div>
      <section class="section is-medium">
        <div class="columns">
          <div class="container column">
            <MessageForm />
          </div>
          <div class="container column">
            <Address />
          </div>
        </div>
      </section>
    </div>
  );
}
