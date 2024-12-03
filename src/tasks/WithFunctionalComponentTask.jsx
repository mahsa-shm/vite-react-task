import React, { useState } from "react";
import Template from "../template/Template";
import axios from "axios";

const WithFunctionalComponentTask = () => {
  const [data, setData] = useState(null);

  const url =
    "https://gist.githubusercontent.com/mahsa-shm/0550a91d5f73e28e098f51eafaa004f5/raw/7d17ff99928d34a21b6a4ed26e025ea147cb11cf/myData.json";

  axios
    .get(url)
    .then((e) => setData(e.data.names))
    .catch((error) => console.log(error));

  return (
    <Template id="info-component" title="show post with functional component">
      {data &&
        data.map((d) => {
          return (
            <div className="little-sec-info" key={d.id}>
              <h3>
                <i className="bi bi-person"></i>
                {d.title}
              </h3>
              <h6>
                <i className="bi bi-info-circle"></i> {d.description}
              </h6>
              <h6>
                <i className="bi bi-book"></i> {d.job}
              </h6>
            </div>
          );
        })}
    </Template>
  );
};

export default WithFunctionalComponentTask;
