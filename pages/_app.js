import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return <Layout child={<Component {...pageProps} />}/>
}

export default MyApp
