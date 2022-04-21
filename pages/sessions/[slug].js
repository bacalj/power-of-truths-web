import { useRouter } from 'next/router'
import sanityClient from '../../client'
import styles from '../../styles/Home.module.css'



const Session = (props) => {
  const { title, time } = props.session[0]
  const router = useRouter()
  const { slug } = router.query

  return ( 
      <>
        <pre>slug: {slug}</pre>
        <p>Rendering data from dynamic slug yay: { title } session happening at ( { time } )</p>

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