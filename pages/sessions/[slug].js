import { useRouter } from 'next/router'
import sanityClient from '../../client'
import { PortableText } from "@portabletext/react";
import Navbar from '../../components/navbar';
import Head from 'next/head';
import SiteTitle from '../../components/site-title';


const Session = (props) => {

  const { title, time, description } = props.session[0]
  const router = useRouter()

  return ( 
    <>
      <Head>
        <title>Power of Truths Conference, 2022 | Session: {title}</title>
        <meta name="description" content="Power of Truths Conference" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteTitle flying={false} />
      <Navbar />

      <main>
        <h2>{ title }</h2>
        <p>{ time }</p>
        <hr />
        <PortableText value={description} />
      </main>
    </>
  )
  
}


export async function getStaticPaths() {
    const paths = await sanityClient.fetch(
      `*[_type == "session" && defined(slug.current)][].slug.current`
    )
    const pathim = paths.map((slug) => ({params: {slug}}))

    return {
      paths: pathim,
      fallback: true
    }
}
  
  export async function getStaticProps(context) {
  
    const { slug = "" } = context.params

    const session = await sanityClient.fetch(
      `*[_type == "session" && slug.current == "${slug}"]`
    )
   
    return {
      props: {
        session
      }
    }
  }

  export default Session