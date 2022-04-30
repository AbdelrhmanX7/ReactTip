import { useState } from "react";
import styles from "./TipUI.module.css";
import logo from "./logo.svg";
import UserInput from "./UserInput";
import UserResult from "./UserResult";
const TipUI = () => {
  const DUMMY_DATA = {
    TipAmount: 0.0,
    Total: 0.0,
  };
  const ResetData = { Bill: 0, Tip: 0, NOP: 0 }
  const [saveData, SetSavaData] = useState(DUMMY_DATA);
  const [Test, setTest] = useState(false);

  const onReset = () => {
    setTest(true)
    SetSavaData(DUMMY_DATA)
  };
  const onR = () => {
    setTest(false)
  }
  const getData = (Data) => {
    SetSavaData(Data);
  };
  return (
    <div className={styles.main}>
      <img src={logo} alt="logo" />
      <div className={styles.continer}>
        <UserInput getData={getData} Reset={ResetData} Test={Test} onR={onR}/>
        <UserResult saveData={saveData} onReset={onReset} />
      </div>
    </div>
  );
};

export default TipUI;
