// import React from 'react';
// import { useState, useEffect } from 'react';
// import MarkdownToJSX from 'markdown-to-jsx';

// const Blog = () => {
//   const [posts, setPosts] = useState([]);

//   const query = `
//     query {
//       user(username: "Janitijj") {
//         publication {
//           posts(page: -1) {
//             slug
//             title
//             brief
//             coverImage
//             cuid
//             _id
//             dateAdded
//             totalReactions
//             contentMarkdown
           
//           }
//         }
//       }
//     }
//   `;

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     const response = await fetch('https://api.hashnode.com', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//         Authorization: 'Bearer 23ab0b18-485a-492f-9e94-1b5fe68e7b7d',
//       },
//       body: JSON.stringify({ query }),
//     });

//     const data = await response.json();
//     console.log(data);
//     setPosts(data.data.user.publication.posts);
//   };

//   const Image = ({ src, alt }) => (
//     <img src={src} alt={alt} className="blog-post-image" />
//   );

//   const options = {
//     overrides: {
//       img: {
//         component: Image,
//       },
//     },
//   };

//   return (
//     <div className="blog-container">
//       {posts.map((post) => (
//         <div key={post.cuid} className="blog-post">
//           <h2>{post.title}</h2>
//           <p>{post.brief}</p>
//           {post.coverImage && (
//             <img
//               src={post.coverImage}
//               alt={post.title}
//               className="blog-post-image"
//             />
//           )}
//           <MarkdownToJSX options={options}>
//             {post.contentMarkdown}
//           </MarkdownToJSX>
//           <p>{post.totalReactions}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Blog;
