export default function Post(props) {

  const getColor = (name) =>{
    const cats = props.cats.filter(cat=>cat.name == name);
    if(cats.length)
      return cats[0].color;
  }
  const post = props.post;
  const savePost = (e) => {
    console.log(e.target)
  }
  const saveList = (e) => {
    console.log(e.target)
  }
  return (<div class="col-sm-4 post-card">
    <div class="card">
      <div class="card-body">

        <p class="card-text">{post.message}</p>

      <footer class="blockquote-footer cat">{post.possibleBadges.length && post.possibleBadges.map(badge=>
        <a href="#" className={`badge badge-${getColor(badge)}`}>{badge}</a>)}</footer>
        <div className="text-center">
        <a href={post.link} target="_blank" class="btn btn-primary btn-sm float-left">Go to post</a>
        <a href="#" onClick={savePost} post={JSON.stringify(post)} class="btn btn-warning  btn-sm float-left">Save post</a>
        </div>
        <a href="#"  onClick={saveList} post={JSON.stringify(post)} class="btn btn-secondary  btn-sm">add as word list</a>
      </div>

    </div>
  </div>)
};
