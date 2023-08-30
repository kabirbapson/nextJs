import React from "react";
type CommentProps = {
  id?: number;
  name?: string;
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
    const mainResponse = await response.json();
  };
  const handleDelete = async (commentId: number) => {
    const resp = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    
    const data = resp.json();
    console.log(data);
    getComments();
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
        <button
          style={{
            backgroundColor: "red",
            display: "flex",
            flexDirection: "row",
          }}
          onClick={() => handleDelete(comment.id)}
          key={comment.id}
        >
          <h3>
            {comment.id} - {comment.name}
          </h3>
        </button>
      ))}
    </>
  );
}
