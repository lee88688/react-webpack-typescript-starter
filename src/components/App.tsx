import React, {useEffect, useState} from "react";

// const reactLogo = require("./../assets/img/react_logo.svg");
// import "./../assets/scss/App.scss";

export default function App() {
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    console.log('plus cnt');
    setTimeout(() => setCnt((cnt) => cnt + 1), 1000);
  }, [cnt]);

  return (
    <obj id="label">
      {`hello${cnt}`}
    </obj>
  );
}
