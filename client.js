import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: '51bnkv2u',
    dataset: 'production',
    useCdn: 'true',
    apiVersion: '2022-04-17'
})