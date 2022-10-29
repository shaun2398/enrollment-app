import React from 'react'

import SectionTitle from '../../components/SectionTitle';

import styles from '../../styles/Terms.module.css'

// import { termsAndConditions } from './service/termsAndConditions';
import { termsAndConditions } from '../../service/termsAndConditions';

export default function terms() {


       return (
         <section class="section notification has-text-centered">
           <SectionTitle name="Terms and Conditions" />
           <div class="container box is-size-5-mobile">
             <div className={styles.terms}>
               <ol>
                 {termsAndConditions.map((item) => (
                   <li>
                     <strong>{item.title}</strong>
                     <br />
                     {item.content}
                     <br />
                     <br />
                   </li>
                 ))}
               </ol>
             </div>
           </div>
         </section>
       );
}
