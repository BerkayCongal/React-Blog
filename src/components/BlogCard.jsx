import { Link } from "react-router-dom";
import "../styles/blogcard.css";

const BlogCard = ({ blog }) => {
  return (
    <div className="blogCard">
      <Link key={blog.id} to={blog.path}>
        <img src={blog.img} alt="" />
      </Link>
      <h2>{blog.text}</h2>
      <div className="footer">
        <div className="user">
          <p>{blog.userName}</p>
        </div>
        <p className="date">{blog.date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
