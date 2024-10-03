import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addReview, selectReview } from '../redux/movieDetailSlice';

const ReviewForm = () => {

  const dispatch = useDispatch()
  const reviews = useSelector(selectReview)
//   const [formData, setFormData] = useState({
// author_details: {
//   avatar_path:"",
//   rating: "",
//   username: ""
// },
// content: ""
//   });
  // const [submittedData, setSubmittedData] = useState(null);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const name=e.target.name.value;
    const content = e.target.content.value

    const reviewObject = {
      author_details: {
      rating: "",
      username: name
      },
      content: content,
    }
        console.log(reviewObject);
        console.log(e.target);
        e.target.reset();

        dispatch(addReview([...reviews,reviewObject]));
    // const reviewData = {...formData}
    // console.log(reviewData)
    // setSubmittedData(formData);
    // dispatch(addReview(reviewData))
  };
  return (
    <>
      <h2 className="section-title">Add a comment:</h2>
      <form onSubmit={handleSubmit}>
        <div className="comment-section">
          <input type="text" id="username" name="name"  className="input-field" placeholder='Enter username'/>
          <textarea placeholder="Enter your comments" id='message' name='content' className="textarea-field"  ></textarea>
          <button className="submit-btn">SUBMIT</button>
        </div>
      </form>
      {/* <h2 className="section-title">Add a comment:</h2>
      <form onSubmit={handleSubmit}>
        <div className="comment-section">
          <input type="text" id="username" name="username" value={formData.author_details.username} onChange={handleChange} className="input-field" placeholder='Enter username'/>
          <textarea placeholder="Enter your comments" id='message' name='content' className="textarea-field" value={formData.content} onChange={handleChange}></textarea>
          <button className="submit-btn">SUBMIT</button>
        </div>
      </form> */}
      {/* {submittedData && (
        <div className="review-card">
        <p className="review-author"><strong>Author:</strong>{submittedData.author_details.username}</p>
        <p className="review-content">{submittedData.content}</p>
      </div>
      )} */}

      {/* {
        submittedData.map((review, index)=>(
          
        ))
      } */}
    </>
  );
};

export default ReviewForm;
