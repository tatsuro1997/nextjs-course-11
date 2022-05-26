pos;
import classes from "./posts-grid.module.css";

function PostsGrid(props) {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.mao((post) => (
        <PostItem />
      ))}
    </ul>
  );
}

export default PostsGrid;
