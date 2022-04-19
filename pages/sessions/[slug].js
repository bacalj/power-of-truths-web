import { useRouter } from 'next/router'

const Session = () => {
  const router = useRouter()
  const { slug } = router.query

  return <p>Session: {slug}</p>
}

export default Session