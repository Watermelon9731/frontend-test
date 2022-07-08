import React from "react";
import { useState } from "react";
import List from "../../components/list/list";
import Single from "../../components/single/single";

export default function Home() {
  const [isListComp, setListComp] = useState(false);

  const onRender = () => {
    if (isListComp) {
      setListComp(false);
    } else {
      setListComp(true);
    }
  };

  const renderComp = (state) => {
    if (state) {
      return <List />;
    } else {
      return <Single />;
    }
  };

  return (
    <section id="homePage">
      <button
        className="switch-btn"
        onClick={() => {
          onRender();
        }}
      >
        Đổi giao diện
      </button>
      {renderComp(isListComp)}
    </section>
  );
}
