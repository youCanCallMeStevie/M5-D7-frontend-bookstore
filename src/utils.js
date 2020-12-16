const {
  REACT_APP_PROFILE,
  REACT_APP_TOKEN,
  REACT_APP_PROFILELIST,
  REACT_APP_POSTS,
} = process.env;

export const fetchBooks = async (queryKey, queryValue) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_BE_URL}/books?${queryKey}=${queryValue}` );
    const books = await res.json();
    if (res.ok) {
      console.log("all good");
      return books;
    } else {
      console.log("there is an error with books");
    }
  } catch (err) {
    console.log("there is an error with fetching books");
  }
};

export const fetchComments = async asin => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_BE_URL}/books/${asin}/comments` );
    if (res.ok) {
      const comments = await res.json();
      console.log(comments);
      return comments;
    } else {
      console.log("there is an error with fetching comments");
    }
  } catch (err) {
    console.log("there is an error");
  }
};
