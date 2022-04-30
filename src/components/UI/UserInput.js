import styles from "./TipUI.module.css";
import dollar from "./icon-dollar.svg";
import person from "./icon-person.svg";
import { useState, useEffect } from "react";
const UserInput = (porps) => {

    const btnClicked = document.querySelectorAll('button')
    const [Bill, setBill] = useState(142.55)
    const [Tip, setTip] = useState(14)
    const [CustomTip,setCustomTip] = useState(14)
    const [NOP, setNOP] = useState(5)
    const onBill = (e) => {
        setBill(e.target.value)
        if (+e.target.value === 0) {
          e.target.style.border = "2px solid red"
        }
        else {
          e.target.style.border = "2px solid hsl(172, 67%, 45%)"
        }
    }
    const onTip = (e) => {
        for(let i = 0; i < btnClicked.length - 1; i++) {
          btnClicked[i].style.cssText = 'color: white; background-color: hsl(183, 100%, 15%)'
          btnClicked[i].style.cssText = `hover {}`
        }
        e.target.style.backgroundColor = "hsl(172, 67%, 45%)"
        e.target.style.color = "hsl(183, 100%, 15%)"
        setTip(parseInt(e.target.innerText))
    }
    const onTipCustom = (e) => {
        setTip(e.target.value)
        for(let i = 0; i < btnClicked.length - 1; i++) {
          btnClicked[i].style.cssText = 'color: white; background-color: hsl(183, 100%, 15%)'
          btnClicked[i].style.cssText = `hover {}`
        }
        if (+e.target.value === 0) {
          e.target.style.border = "2px solid red"
        }
        else {
          e.target.style.border = "2px solid hsl(172, 67%, 45%)"
        }
    }
    const onNOP = (e) => {
        setNOP(e.target.value)
        if (+e.target.value === 0) {
          e.target.style.border = "2px solid red"
        }
        else {
          e.target.style.border = "2px solid hsl(172, 67%, 45%)"
        }
    }
    useEffect(() => {
      if(porps.Test === true) {
        for(let i = 0; i < btnClicked.length - 1; i++) {
          btnClicked[i].style.cssText = 'color: white; background-color: hsl(183, 100%, 15%)'
          btnClicked[i].style.cssText = `hover {}`
        }
        setBill(porps.Reset.Bill)
        setTip(porps.Reset.Tip)
        setCustomTip(0)
        setNOP(porps.Reset.NOP)
        porps.onR()
      }
    }, [porps.Test])
    useEffect(() => {
        if(+Bill !== 0 && +Tip !== 0 && +NOP !== 0)
        {
          porps.getData({
            TipAmount: ((Bill * Tip) / 100 / NOP).toFixed(2),
            Total: ((Bill * Tip) / 100).toFixed(2)
        })
        }
    }, [Bill, Tip, NOP])
  return (
    <div className={styles.userInput}>
      <div>
        <div className={styles.Alert}>
          <p>Bill</p>
          {+Bill === 0 ? <p>Can't be zero</p> : ''}
        </div>
        <div className={styles.billContiner}>
          <img src={dollar} alt="dollar" />
          <input type="number" placeholder="0.0" onChange={onBill} value={Bill}/>
        </div>
      </div>
      <div>
        <p>Select Tip %</p>
        <div className={`${styles.TipBtn}`}>
          <button onClick={onTip}>5%</button>
          <button onClick={onTip}>10%</button>
          <button onClick={onTip}>15%</button>
          <button onClick={onTip}>25%</button>
          <button onClick={onTip}>50%</button>
          <input type="number" placeholder="Custom" onChange={onTipCustom} value={CustomTip}/>
        </div>
      </div>
      <div>
        <div className={styles.Alert}>
          <p>Number of People</p>
          {+NOP === 0 ? <p>Can't be zero</p> : ''}
        </div>
        <div className={styles.billContiner}>
          <img src={person} alt="person" />
          <input type="number" placeholder="5" onChange={onNOP} value={NOP}/>
        </div>
      </div>
    </div>
  );
};
export default UserInput