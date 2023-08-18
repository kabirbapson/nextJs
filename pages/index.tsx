import React from "react";
interface dataProps {
  id: number;
  title: string;  
  body: string;
}
// create a type for data props
  
export default function Post({ data }: { data: dataProps[] }) {
  return (
    <div>
      {data.map((res) => {
        return (
          <div key={res.id}>
            <h1>{res.title}</h1>
            <p>{res.body}</p>
          </div>
        );
      })}
    </div>
  );
}

// export async function getServersideProps() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const articles = res.json()
//     // console.log(articles)
//   return {
//     props: {
//       articles,
//     }
//   }
// }
export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data
    }, // will be passed to the page component as props
  };
}
