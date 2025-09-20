import "./Post.css";

const Post = () => {

  /*useEffect(() => {
    import("../../posts/2024/yubikey-archlinux.md")
    .then(res => {
        fetch(res.default)
          .then(response => response.text())
          .then(reponse => setPostContent(response))
          .catch(err => console.log(err))
      })
  }, [])*/
  
  return (
    <article className="article">
      <div className="container">
        <div className="post-wrapper">
        </div>
      </div>
    </article>
  );
};

export default Post;
