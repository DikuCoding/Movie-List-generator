import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReviews, selectReviews } from "../redux/reviewSlice";

const ReviewForm = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const content = e.target.content.value.trim();

    if (!name || !content) {
      alert("Both fields are required!");
      return;
    }

    const reviewObject = {
      author_details: {
        rating: "",
        username: name,
      },
      content: content,
    };

    dispatch(setReviews([...reviews, reviewObject]));
    e.target.reset();
  };

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Add a Comment:</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Comment
          </label>
          <textarea
            id="message"
            name="content"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your comment"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
