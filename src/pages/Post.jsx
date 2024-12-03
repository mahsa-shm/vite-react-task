import React from "react";

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
    };
  }
  componentDidMount() {
    fetch(
      `https://gist.githubusercontent.com/mahsa-shm/0550a91d5f73e28e098f51eafaa004f5/raw/7d17ff99928d34a21b6a4ed26e025ea147cb11cf/myData.json`
    )
      .then((response) => response.json())
      .then((result) => {
        const post = result.datas.find((p) => p["id"] === this.props.postId);
        this.setState({
          post: post,
        });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.postId !== this.props.postId) {
      fetch(
        `https://gist.githubusercontent.com/mahsa-shm/0550a91d5f73e28e098f51eafaa004f5/raw/7d17ff99928d34a21b6a4ed26e025ea147cb11cf/myData.json`
      )
        .then((response) => response.json())
        .then((result) => {
          const post = result.datas.find((p) => p["id"] === this.props.postId);
          this.setState({
            post: post,
          });
        });
    }
  }
  render() {
    return (
      <>
        {this.state.post && (
          <div className="comment-post">
            <img src={this.state.post.imgSrc} />
            <h2>{this.state.post.title}</h2>
            <p>{this.state.post.description}</p>
            <div className="Comment-sec">
              <div className="comment-sec-little">
                {this.state.post.comments.map((a) => (
                  <section key={Math.random(100000)}>{a.text}</section>
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
