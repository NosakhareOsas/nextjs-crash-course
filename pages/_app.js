import '../styles/globals.css'
import Layout from '../components/Layout'
import {QueryClientProvider, QueryClient, Hydrate} from 'react-query'
import { useState } from 'react'

//const queryClient = new QueryClient()


function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout child={<Component {...pageProps} />}/>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
