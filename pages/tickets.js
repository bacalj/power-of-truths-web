import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'



export default function Tickets() {

  return (
    <>
      <Head>
        <title>Tickets: Power of Truths 2023</title>
        <meta name="description" content="Power of Truths 2023" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <div className='tickets-wrapper pt-12'>
          <div className='stripe-pass-one mt-6'>
            <a href='https://bombyx.live/events/power-of-truths-2023/'>Purchase Tickets</a>
            {/* <h2>Festival Pass</h2>
            <h3>Saturday April 29 & Sunday, April 30 at Bombyx Center for Arts and Equity</h3>
            <p>With a Festival Pass, you will have access to all workshop, keynote, and panel sessions on Saturday (10 am-5 pm) and Sunday (11 am-4 pm). Lunch on Saturday is included with the Festival Pass.
            </p>

            <p className='ticket'><a className='ticekt ticket-link' href='https://buy.stripe.com/7sIaHF31p9tK1wI4go'>Purchase $40</a></p> */}
          </div>
          {/* <div className='stripe-pass-two'>
            <h2>Festival Pass & Know the Ledge: Hiphop History Live</h2>
            <p>The Power of Truths Arts and Education Festival presents Know the Ledge: Hiphop History Live. </p><p>Join us for an evening of storytelling, music, and dance as we bring together amazing artists from multiple disciplines to tell important and often overlooked stories from the history of our country. Part theatre, part history lesson, part Hiphop music, join artists Akrobatik; members of Fire in Little Africa—Written Quincey, Krisheena Suarez, and iamDES; Marcia Gomes; Khalif Neville; Dutch Rebelle and more for an intense and entertaining trip through history.</p>
            <p><em>Performance is Saturday, April 29 7-10PM at Bombyx Center for Arts and Equity</em></p>
            <p className='ticket'><a className='ticket ticket-link' href='https://buy.stripe.com/14kbLJatR35m1wIaEL'>Purchase $55</a></p>

          </div> */}
        </div>
      </main>

      <Footer />
    </>
  )
}