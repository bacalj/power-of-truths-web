import { useRouter } from 'next/router'
import sanityClient from '../../client'
import styles from '../../styles/Home.module.css'
import { PortableText } from "@portabletext/react";
import Navbar from '../../components/navbar';


const Session = (props) => {
  console.log(props.session[0])
  const { title, time, description } = props.session[0]
  const router = useRouter()
  const { slug } = router.query

  return ( 
    <div className={styles.container}>
      <div className={styles.navwrap}>
        <h2>Power of Truths 2022</h2>
        <Navbar />
      </div>
      <main>
        <div className={styles.contento}>
          <h2>{ title }</h2>
          <h3>{ time }</h3>
          <hr />
          <PortableText value={description} />
        </div>
      </main>
    </div>
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