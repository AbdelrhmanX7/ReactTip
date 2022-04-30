import styles from "./TipUI.module.css";

const UserResult = (porps) => {
  const onTest = () => {
    porps.onReset()
  }
  return (
    <div className={styles.userResult}>
      <div>
        <div className={styles.BillResult}>
          <div className={styles.BillText}>
            <h4>Tip Amount</h4>
            <p>/ person</p>
          </div>
          <h1>${porps.saveData.TipAmount}</h1>
        </div>
        <div className={styles.BillResult}>
          <div className={styles.BillText}>
            <h4>Total</h4>
            <p>/ person</p>
          </div>
          <h1>${porps.saveData.Total}</h1>
        </div>
      </div>
      <div className={styles.Reset}>
        <button onClick={onTest}>RESET</button>
      </div>
    </div>
  );
};

export default UserResult
