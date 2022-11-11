import '../styles/globals.css'
import Layout from '../components/Layout'
import {QueryClientProvider, QueryClient} from 'react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout child={<Component {...pageProps} />}/>
    </QueryClientProvider>
  )
}

export default MyApp
