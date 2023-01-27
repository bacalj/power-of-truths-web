import { PortableText } from "@portabletext/react";
import Navbar from '../../components/navbar';
import Head from 'next/head';
import imageUrlBuilder from '@sanity/image-url';
import { sClient, ptComponents } from '../../client';

function urlFor(source) {
  return imageUrlBuilder(sClient).image(source)
}

const Presenter = (props) => {

  const { name, description, image } = props.presenter[0]
  const imgUrl = urlFor(image).width(320).height(240).fit('max').auto('format').url();

  return (
    <>
      <Head>
        <title>Power of Truths Conference, 2023 | Presenter: {name}</title>
        <meta name="description" content="Power of Truths Conference" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <div className="sessioncontent">
          <div className="image-container" style={{textAlign: "center"}}>
            <img src={imgUrl} />
            <h2>{ name }</h2>
          </div>

          <hr />
          <PortableText value={description} components={ptComponents} />
        </div>
      </main>
    </>
  )

}


export async function getStaticPaths() {
    const paths = await sClient.fetch(
      `*[_type == "presenter" && defined(slug.current)][].slug.current`
    )

    const pathim = paths.map((slug) => ({params: {slug}}))

    return {
      paths: pathim,
      fallback: false
    }
}

export async function getStaticProps(context) {

    const { slug = null } = context.params

    const presenter = await sClient.fetch(
      `*[_type == "presenter" && slug.current == "${slug}"]`
    )

    return {
      props: {
        presenter
      }
    }
}

export default Presenter
