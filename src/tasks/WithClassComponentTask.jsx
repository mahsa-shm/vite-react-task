import React from "react";
import Template from "../template/Template";
import axios from "axios";
export default class WithClassComponentTask extends React.Component {
  constructor() {
    super();
    this.state = { myData: [] };
  }
  componentDidMount() {
    const url =
      "https://gist.githubusercontent.com/mahsa-shm/0550a91d5f73e28e098f51eafaa004f5/raw/7d17ff99928d34a21b6a4ed26e025ea147cb11cf/myData.json";

    axios
      .get(url)
      .then((result) => {
        const data = result.data.names;
        // console.log(data);
        this.setState({ myData: data });
      })
      .catch((e) => console.log(e));
  }
  render() {
    return (
      <Template id="info-component" title="show post with class component">
        {this.state.myData &&
          this.state.myData.map((data) => (
            <div className="little-sec-info" key={data.id}>
              <h3>
                <i className="bi bi-person"></i>
                {data.title}
              </h3>
              <h6>
                <i className="bi bi-info-circle"></i> {data.description}
              </h6>
              <h6>
                <i className="bi bi-book"></i> {data.job}
              </h6>
            </div>
          ))}
      </Template>
    );
  }
}
