import React from "react";
import ComponentDidMountTask from "../tasks/ComponentDidMountTask";
import ComponentDidUpdateTask from "../tasks/ComponentDidUpdateTask";
import WithCommentTask from "../tasks/WithCommentTask";
import WithFunctionalComponentTask from "../tasks/WithFunctionalComponentTask";
import WithClassComponentTask from "../tasks/WithClassComponentTask";

const Home = () => {
  return (
    <>
      <ComponentDidUpdateTask />
      <ComponentDidMountTask />
      <WithCommentTask />
      <WithFunctionalComponentTask />
      <WithClassComponentTask />
    </>
  );
};

export default Home;
