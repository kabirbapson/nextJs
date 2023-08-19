"use strict";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
type dataProps = {
  id: number;
  title: string;
  body: string;
};
// create a type for data props

export default function Post({ data }: { data: dataProps[] }) {
  const router = useRouter();
  return (
    <div>
      {data.map((res) => {
        return (
          <Link href={`/post/${res.id}`} key={res.id}>
            <h1>{res.title}</h1>
            <p>{res.body}</p>
          </Link>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await result.json();

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
