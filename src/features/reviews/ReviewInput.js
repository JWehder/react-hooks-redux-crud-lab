import React, {useState} from "react";

function ReviewInput({ onSubmit }) {
  const [comment, setComment] = useState("")

  function handleChange(e) {
    setComment(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(comment)
    setComment("")
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>
        comment
        <textarea 
        type="text"
        placeholder="comment"
        value={comment}
        onChange={handleChange}
        />
        </label>
        <input
        type="submit"
        value="add review"
        >
        </input>
      </form>
    </div>
  )
}

export default ReviewInput;
