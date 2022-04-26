import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

const sClient = sanityClient({
    projectId: '51bnkv2u',
    dataset: 'production',
    useCdn: 'true',
    apiVersion: '2022-04-17'
})

const ptComponents = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null
        }
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            alt={value.alt || ' '}
            loading="lazy"
            src={imageUrlBuilder(sClient)
              .image(value)
              .width(320).height(240).fit('max')
              .auto('format')}
          />
        )
      }
    }
}

export { sClient, ptComponents }