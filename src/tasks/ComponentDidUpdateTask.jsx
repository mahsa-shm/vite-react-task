import React from "react";
import Template from "../template/Template";

export default class ComponentDidUpdateTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPost: 1,
      links: [
        { id: 1, title: " Post 1" },
        { id: 2, title: " Post 2" },
        { id: 3, title: " Post 3" },
        { id: 4, title: " Post 4" },
      ],
    };
  }
  render() {
    return (
      <Template title="change post by using componentDidUpdate">
        <div className="didUpdate-list">
          {this.state.links.map((link) => {
            return (
              <section
                key={link.id}
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({
                    currentPost: link.id,
                  });
                }}
              >
                <i className="bi bi-file-earmark-richtext">{link.title}</i>
              </section>
            );
          })}
        </div>
        <MyPost currentPost={this.state.currentPost}></MyPost>
      </Template>
    );
  }
}

class MyPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myPost: null,
    };
  }
  componentDidMount() {
    fetch(
      `https://gist.githubusercontent.com/mahsa-shm/0550a91d5f73e28e098f51eafaa004f5/raw/7d17ff99928d34a21b6a4ed26e025ea147cb11cf/myData.json`
    )
      .then((response) => response.json())
      .then((result) => {
        const post = result.datas.find(
          (p) => p["id"] === this.props.currentPost
        );
        this.setState({
          myPost: post,
        });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentPost !== this.props.currentPost) {
      fetch(
        `https://gist.githubusercontent.com/mahsa-shm/0550a91d5f73e28e098f51eafaa004f5/raw/7d17ff99928d34a21b6a4ed26e025ea147cb11cf/myData.json`
      )
        .then((response) => response.json())
        .then((result) => {
          const post = result.datas.find(
            (p) => p["id"] === this.props.currentPost
          );
          this.setState({
            myPost: post,
          });
        });
    }
  }
  render() {
    return (
      <>
        {this.state.myPost && (
          <div className="little-div">
            <img src={this.state.myPost.imgSrc} alt="" />
            <h2>{this.state.myPost.title}</h2>
            <p>{this.state.myPost.description}</p>
            <a
              href={`https://en.wikipedia.org/wiki/${this.state.myPost.title}`}
              target="_blank"
              className="more-info-button"
            >
              more information ...
            </a>
          </div>
        )}
      </>
    );
  }
}
