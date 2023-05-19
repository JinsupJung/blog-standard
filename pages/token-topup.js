import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AppLayout } from '../components/AppLayout';



export default function TokenTopup() {
  const handleClick = async ( ) => {
    const response = await fetch("/api/addTokens", {
      method: "POST",
      // headers: {
      //   "content-type": "application/json",
      // },
      // body: JSON.stringify({ topic, keywords }),
    });
    const json = await response.json();

  }
  return (
    <div>
      <h1>this is 캐시 충전</h1>
      <button className='btn' onClick={handleClick}>캐시 충전</button>
    </div>
  )
}
 
TokenTopup.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>
}



export const getServerSideProps = withPageAuthRequired( () => {
    
    return {
      props: {

      },
    };
  });
  