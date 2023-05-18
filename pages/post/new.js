import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react'
import { AppLayout } from '../../components/AppLayout/AppLayout';

export default function NewPost(props) {
    console.log('new page test props = ',props)

  const handleClick = async () => {
    const response = await fetch('/api/generatePost',{
      method: 'POST'
    })
    const json = await response.json();

    console.log("/post/generatePost로 보낸 결과 = ",json);

  }

  return (
    <div>
        <h1>This is the new post page</h1>
        <button className='btn' onClick={handleClick}>
          Generate
        </button>
        {/* <div className='max-w-screen-sm p-10 ' dangerouslySetInnerHTML={{__html: postContent}} /> */}
    </div>
  )
}

NewPost.getLayout = function getLayout(page, pageProps) {
    return <AppLayout {...pageProps}>{page}</AppLayout>
}


export const getServerSideProps = withPageAuthRequired( () => {
    
    return {
      props: {

      },
    };
  });
  