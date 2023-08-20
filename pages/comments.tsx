import React from "react";

type CommentProps = {
  id?: number;
  name?: string;
  email?: string;
  postId?: number;
  body?: string;
};
export default function Comments() {
  const [comments, setComments] = React.useState<CommentProps[]>([]);
  const [name, setName] = React.useState<string>("");
  const log = console.log;
  const getComments = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data);
  };
  const handleName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };
  const postComments = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const mainResponse = await response.json()
    console.log({mainResponse});
  };
  return (
    <>
      <div className="w-full p-2 border rounded mb-2">
        <input
          className="mb-4"
          type="text"
          value={name}
          onChange={handleName}
        />
        <button onClick={postComments}>Post me</button>
      </div>
      <button onClick={getComments}>Hit me</button>
      {comments.map((comment) => (
        <h3 key={comment.id}> {comment.name}</h3>
      ))}
    </>
  );
}
