import "../App.css"

const PostsCards = ({post}:{post:Post}) => {
  return (
    <div className="ProvideDIV">
        <h4>{post.title}</h4>
        <p>{post.body}</p>
    </div>
  );
};

export default PostsCards