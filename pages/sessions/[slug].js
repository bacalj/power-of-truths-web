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



// export async function getStaticProps(context) {
//     const sanityContent = await sanityClient.fetch(`*[_type == "session" && slug == ${slug}]`)
//     return {
//       props: { sanityContent }, // will be passed to the page component as props
//     }
//   }



export async function getStaticPaths() {
    console.log('get static paths: ')
    const paths = await sanityClient.fetch(
      `*[_type == "session" && defined(slug.current)][].slug.current`
    )
  
    const pathim = paths.map((slug) => ({params: {slug}}))

    console.log(pathim)
    return {
      paths: pathim,
      fallback: true
    }
}
  
  export async function getStaticProps(context) {
    console.log(context.params.slug)
    //It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.params
    const session = await sanityClient.fetch(`*[_type == "session" && slug.current == "${context.params.slug}"]`)
    console.log(session)
    return {
      props: {
        session
      }
    }
  }

  export default Session