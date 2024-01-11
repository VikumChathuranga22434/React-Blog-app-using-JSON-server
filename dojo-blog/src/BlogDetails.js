import  useFetch from "./useFetch";
import { useParams, useHistory } from "react-router-dom";

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:9000/blogs/' + id);
    const history = useHistory();

    const deleteBlog = () => {
        fetch('http://localhost:9000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>loding...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={deleteBlog}>Delete Blog</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;