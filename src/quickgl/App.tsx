import React, {useEffect, useState} from "react";
import styles from './index.lv.css';

// const reactLogo = require("./../assets/img/react_logo.svg");
// import "./../assets/scss/App.scss";

export default function App() {
  const [cnt, setCnt] = useState(0);

  // useEffect(() => {
  //   console.log('plus cnt');
  //   setTimeout(() => setCnt((cnt) => cnt + 1), 1000);
  // }, [cnt]);

  return (
    <obj className={styles.s1} onClicked={() => setCnt(cnt + 1)}>
      {/* <obj className={styles.s3}></obj> */}
      <obj className={styles.s3}>
        {`1hello${cnt}\nsecond`}
      </obj>
      <obj>{`2hello${cnt}`}</obj>
      <obj className={styles.s2}>{`3hello${cnt}`}</obj>
    </obj>
  );
}
