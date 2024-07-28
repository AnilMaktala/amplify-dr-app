import { useState, useEffect } from 'react';
import { type CreateBlogInput, type Blog } from '../API';
import { generateClient } from 'aws-amplify/api';
import { listBlogs } from '../graphql/queries';

const client = generateClient();

export default function Blogs(){
  const [blogs, setBlogs] = useState<Blog[] | CreateBlogInput[]>([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const blogData = await client.graphql({
          query: listBlogs,
        });
        const blogs = blogData.data.listBlogs.items;
        setBlogs(blogs);
      } catch (err) {
        console.error(err);
        console.log('error fetching blogs');
      }
    }

    fetchBlogs().then();
  }, []);

  return(
    <div style={styles.container}>
      <h2>Amplify Blogs</h2>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Tag</th>
            <th>Author</th>
            <th>Owner</th>
          </tr>
          {blogs.map((blog, index) => (
            <tr key={blog.id ? blog.id : index} style={styles.blog}>
              <td style={styles.blogDescription}>{blog.id}</td>
              <td style={styles.blogDescription}>{blog.name}</td>
              <td style={styles.blogDescription}>{blog.category}</td>
              <td style={styles.blogDescription}>{blog.tag}</td>
              <td style={styles.blogDescription}>{blog.author}</td>
              <td style={styles.blogDescription}>{blog.owner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

const styles = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  blog: { marginBottom: 15 },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  blogName: { 
    fontSize: 20, 
    fontWeight: "bold",
  },
  blogDescription: { marginBottom: 0 },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
} as const;