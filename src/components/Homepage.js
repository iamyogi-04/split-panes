import React from "react";
import "./homepage.css";
import Split from "react-split";
const Homepage = () => {
    // using react split we can split components into responsive components by using split panes bar and i used bootstrap for simplicity
  return (
    <>
      <Split
        direction="vertical"
        style={{ height: "calc(100vh - 1rem)" }}
        className="d-flex flex-column"
      >
        <Split className="d-flex flex-row">
          <div className="container-fluid bg-primary text-white"> Hello World</div>
          <div className="container-fluid bg-dark text-white"> Hello World</div>
        </Split>
        <div className="container-fluid bg-secondary text-white">Hello World</div>
      </Split>
    </>
  );
};
export default Homepage;
