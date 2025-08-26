import styles from "./page.module.css";
const Inputs = ({ type, text, value, onChange, styleInput, maxLength }) => {
    return (
        <div  className={styleInput}>
            <p className={styles.text}>{text}:</p>
            {
                maxLength ? <input type={type} value={value} onChange={(e) => onChange(e.target.value)} className={styles.inputContainer} maxLength={maxLength} />
                    : <input type={type} value={value} onChange={(e) => onChange(e.target.value)} className={styles.inputContainer} />
            }
        </div>
    );
};

export default Inputs;
