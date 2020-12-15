const {
    REACT_APP_PROFILE,
    REACT_APP_TOKEN,
    REACT_APP_PROFILELIST,
    REACT_APP_POSTS,
  } = process.env;

export const fetchBooks = async () => {
    try {
      const res = await fetch("http://localhost:3006/books", {
        headers: {
          Authorization: "Bearer " ,
        },
      });
      const books= await res.json();
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



  export const fetchComments = async (asin) => {
    try {
      const res = await fetch(`http://localhost:3006/books/${asin}/comments`, {
        headers: {
          Authorization: "Bearer " ,
        },
      });
      if (res.ok) {
         const export const fetchComments = async (asin) => {
            try {
              const res = await fetch(`http://localhost:3006/books/${asin}/comments`, {
                headers: {
                  Authorization: "Bearer " + REACT_APP_TOKEN,
                },
              });
              if (res.ok) {
                 const comments = await res.json();
                 console.log(comments)
                 return comments;
              } else {
                console.log('there is an error with fetching comments')
              }
             
            } catch (err) {
              console.log("there is an error");
            }
          }; = await res.json();
         console.log(comments)
         return comments;
      } else {
        console.log('there is an error with fetching comments')
      }
     
    } catch (err) {
      console.log("there is an error");
    }
  };