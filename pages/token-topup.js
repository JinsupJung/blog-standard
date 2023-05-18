import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AppLayout } from '../components/AppLayout/AppLayout';



export default function TokenTopup() {
  return (
    <div>TokenTopup</div>
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
  