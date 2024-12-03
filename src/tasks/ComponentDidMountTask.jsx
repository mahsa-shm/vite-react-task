import React from "react";
import Template from "../template/Template";

export default class ComponentDidMountTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      fetch(
        `https://gist.githubusercontent.com/mahsa-shm/0550a91d5f73e28e098f51eafaa004f5/raw/7d17ff99928d34a21b6a4ed26e025ea147cb11cf/myData.json`
      )
        .then((response) => response.json())

        .then((result) => {
          const data = result.datas;
          this.setState({ posts: data, loading: false });
        });
    }, 3000);
  }
  render() {
    return (
      <Template title="Get post in componentDidMount">
        {
          <>
            {this.state.loading ? (
              <div className="loading">Loading ...</div>
            ) : (
              this.state.posts && (
                <div className="didMount-div">
                  {this.state.posts.map((e) => (
                    <div key={e.id} className="section">
                      <img src={e.imgSrc} alt="" />
                      <h3>{e.title}</h3>
                      <p>{e.description}</p>
                    </div>
                  ))}
                </div>
              )
            )}
          </>
        }
      </Template>
    );
  }
}
