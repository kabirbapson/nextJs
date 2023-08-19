import Image from "next/image";
import { useRouter } from "next/router";
import { browser } from "process";

export default function Post({ data, params }) {
  const router = useRouter();
  // console.log(router.query.postId, params);

  // write for me a code to check if the url const no post id, then redirect to home page 


  if (!router.query.postId) {
    router.push("/");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.title} {data.body}
    </main>
  );
}

export async function getServerSideProps(context) {
  const postId = context.query.postId;
  console.log('jj',context.query);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await res.json();

  if (!data) {
    return {

      notFound: true,
    };
  }

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
