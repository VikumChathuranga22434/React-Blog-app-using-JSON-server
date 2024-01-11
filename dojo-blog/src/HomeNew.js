import BlogList from "./BlogList";
import useFetch from "./useFetch";

const HomeNew = () => {

    const url = 'http://localhost:9000/blogs';

    const { data: blogs, isPending, error } = useFetch(url);
     
    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loding...</div> }
            { blogs && <BlogList blogLists={blogs} title="All Blogs" /> }
            { blogs && <BlogList blogLists={blogs.filter((Blog) => Blog.author === 'mario')} title="Mario's Blogs" />}
        </div>
    );
}
 
export default HomeNew;