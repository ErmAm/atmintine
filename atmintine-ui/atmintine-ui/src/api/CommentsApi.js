import HTTP from "."

const fetchComments = () => HTTP.get('/comments')

const fetchComment = (id) => HTTP.get('/comments/' + id)

const fetchCommentsByID = (id) => HTTP.get("/comments/bytag/" + id)

const addComment = (newComment) => HTTP.post("/comments", newComment)

const updateComment = (updatedComment) => HTTP.put("/comments", updatedComment)

const deleteComment = (idToDelete) => HTTP.delete("/comments/" + idToDelete)

export {fetchComments,fetchComment,fetchCommentsByID,addComment,updateComment,deleteComment}
