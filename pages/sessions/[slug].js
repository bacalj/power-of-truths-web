import { PortableText } from "@portabletext/react";
import Navbar from '../../components/navbar';
import Head from 'next/head';
import { sClient, ptComponents } from '../../client';


const Session = (props) => {

  const { title, time, description } = props.session[0]

  return ( 
    <>
      <Head>
        <title>Power of Truths Conference, 2022 | Session: {title}</title>
        <meta name="description" content="Power of Truths Conference" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <div className="sessioncontent">
          <h2>{ title }</h2>
          <p>{ time }</p>
          <hr />
          <PortableText value={description} components={ptComponents} />
        </div>
      </main>
    </>
  )
  
}


export async function getStaticPaths() {
    const paths = await sClient.fetch(
      `*[_type == "session" && defined(slug.current)][].slug.current`
    )

    const pathim = paths.map((slug) => ({params: {slug}}))

    return {
      paths: pathim,
      fallback: false
    }
}
  
export async function getStaticProps(context) {
  
    const { slug = null } = context.params

    const session = await sClient.fetch(
      `*[_type == "session" && slug.current == "${slug}"]`
    )
   
    return {
      props: {
        session
      }
    }
}

export default Session