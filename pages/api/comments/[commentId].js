import { comments } from "../../../data/comments";

export default function handler(req, res) {
    const { commentId } = req.query;
    console.log(commentId)
  const comment = comments.find((comment) => comment.id === parseInt(commentId));
    console.log(comment)
    res.status(200).json(comment)
}
