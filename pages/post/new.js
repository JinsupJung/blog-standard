import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React, { useState } from "react";
import { AppLayout } from "../../components/AppLayout/AppLayout";

export default function NewPost(props) {
  console.log("new page test props = ", props);
  const [postContent, setPostContent] = useState("");
  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/generatePost", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ topic, keywords }),
    });
    const json = await response.json();

    // console.log("/post/generatePost로 보낸 결과 = ", json.post.postContent);
    setPostContent(json.post.postContent);
  };

  const keywordsHandler = (e) => {
    setKeywords(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <strong>블로그 게시물의 주요 토픽 :</strong>
          </label>
          <textarea
            className="resize-none border border-slate-500 w-full block my-2 px-4 py-2 "
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div>
          <label>
            <label>
              <strong>블로그의 주요 키워드 : </strong>
            </label>
          </label>
          <textarea
            className="resize-none border border-slate-500 w-full block my-2 px-4 py-2 "
            value={keywords}
            onChange={keywordsHandler}
          />
        </div>

        <button type="submit" className="btn">
          블로그 생성
        </button>
      </form>

      <div
        className="max-w-screen-sm p-10 "
        dangerouslySetInnerHTML={{ __html: postContent }}
      />
    </div>
  );
}

NewPost.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
