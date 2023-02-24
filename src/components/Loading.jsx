import React from "react";

function Loading() {
  return (
    <section className="loading">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span>Loading...</span>
    </section>
  );
}

export default Loading;
