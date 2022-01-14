import Head from 'next/head'
import Sidebar from '../components/Sidebar'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Whatsapp-2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
       <Sidebar />
    </div>
  )
}
