import Head from 'next/head'
import Image from 'next/image'
import HomeContent from '../components/home-content'
import Navbar from '../components/navbar'
import FlyingWords from '../components/site-title'
import Footer from '../components/footer'
import SiteTitle from '../components/site-title'
import { sClient, ptComponents } from '../client'


export default function Tickets() {

  return (
    <>
      <Head>
        <title>Tickets: Power of Truths Conference, 2023</title>
        <meta name="description" content="Power of Truths Conference" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <div className='tickets-wrapper'>
          <div className='stripe-pass-one'>
            <h2>Festival Pass</h2>
            <p>With a Festival Pass, you will have access to all workshop, keynote, and panel sessions on Saturday (10 am-5 pm) and Sunday (11 am-4 pm). Lunch on Saturday is included with the Full Festival Pass.
            </p>

            <p className='ticket'><a className='ticekt ticket-link' href='https://buy.stripe.com/7sIaHF31p9tK1wI4go'>Purchase Festival Pass   $40</a></p>
          </div>
          <div className='stripe-pass-two'>
            <h2>Festival Pass & Know the Ledge: Hiphop History Live</h2>
            <p>The Power of Truths Arts and Education Festival presents Know the Ledge: Hiphop History Live. Join us for an evening of storytelling, music, and dance as we bring together amazing artists from multiple disciplines to tell important and often overlooked stories from the history of our country. Part theatre, part history lesson, part Hiphop music, join artists Akrobatik; members of Fire in Little Africa—Written Quincey, Krisheena Suarez, and iamDES; Marcia Gomes; Khalif Neville; Dutch Rebelle and more for an intense and entertaining trip through history.</p>

            <p className='ticket'><a className='ticket ticket-link' href='https://buy.stripe.com/14kbLJatR35m1wIaEL'>Purchase Festival Pass and Ticket to Know The Ledge   $55</a></p>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}