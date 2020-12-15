const {
    REACT_APP_PROFILE,
    REACT_APP_TOKEN,
    REACT_APP_PROFILELIST,
    REACT_APP_POSTS,
  } = process.env;

export const fetchBooks = async () => {
    try {
      const res = await fetch(, {
        headers: {
          Authorization: "Bearer " ,
        },
      });
      const posts= await res.json();
      if (res.ok) {
        console.log("all good");
        return posts;
      } else {
        console.log("there is an error with books");
      }
    } catch (err) {
      console.log("there is an error with fetching books");
    }
  };