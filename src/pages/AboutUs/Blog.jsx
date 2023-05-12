// import React from 'react';
// // import './Blog.scss';
// import { useState, useEffect } from 'react';

// const Blog = () => {
//   const [posts, setPosts] = useState([]);

//   const query = `
//         query {
//             user(username: "atapas") {
//             publication {
//                 posts(page:-1){
//                 slug
//                 title
//                 brief
//                 coverImage
//                 cuid
//                 _id
//                 }
//             }
//             }
//         }
//         `; //as used in the playground

//   useEffect(() => {
//     fetchPosts();
//   }, []); //we are maintaining side effects here. since we are making an API call in react

//   const fetchPosts = async () => {
//     const response = await fetch('https://api.hashnode.com', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//         // "Authorization": "Bearer {API-kEY}", if you're using token
//       },
//       body: JSON.stringify({ query }),
//     });

//     const data = await response.json();
//     console.log(data);
//     setPosts(data.data.user.publication.posts);
//     console.log(data.data.user.publication.posts);
//   };
// };

// export default Blog;
