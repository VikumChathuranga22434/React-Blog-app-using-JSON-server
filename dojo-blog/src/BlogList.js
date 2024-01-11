import { Link } from "react-router-dom";

const BlogList = ({ blogLists, title }) => {
    // const blogs = props.BlogList;
    // const title = props.title;

    return ( 
        <div className="blog-list">
            <h2>
                { title }
            </h2>
            {blogLists.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to = {`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </Link>
                </div>
             ))}
        </div>
     );
}
 
export default BlogList;