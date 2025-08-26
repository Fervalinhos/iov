"use client"
import styles from "./page.module.css";
const Doctors_region = () => {
    return (
        <div className={styles.containerDoutor}>
            <div className={styles.divBars}>
                <h1>ANTECEDETES PESSOAIS:</h1>
                <div className={styles.bar}></div>
            </div>
            <h1>QUEIXA:</h1>
            <div className={styles.queixas}>
                <p>( ) Rotina</p>
                <ul className={styles.list_queixas}>
                    <li>
                        <p>(  ) BAV AO</p>
                        <p>(  ) OD</p>
                        <p>(  ) OE</p>
                    </li>

                    <li>
                        <p>(  ) Hiperemia</p>
                        <p>(  ) OD</p>
                        <p>(  ) OE</p>
                    </li>
                </ul>
                <div className={styles.divBars}>
                    <p>( ) Outros</p>
                    <div className={styles.bar}></div>
                </div>
            </div>



            <div className={styles.REF}>
                <h1>REFRAÇÃO (RX)</h1>
                <h1>LENSO</h1>
            </div>
            <div className={styles.containerListREF}>

            </div>
            <ul className={styles.list_REF}>
                <li>
                    <div className={styles.divBars1}>
                        <p>OD:</p>
                        <div className={styles.bar}></div>
                    </div>
                    <div className={styles.divBars2}>
                        <p>OD:</p>
                        <div className={styles.bar}></div>
                    </div>
                </li>

                <li>
                    <div className={styles.divBars1}>
                        <p>OE:</p>
                        <div className={styles.bar}></div>
                    </div>
                    <div className={styles.divBars2}>
                        <p>OE:</p>
                        <div className={styles.bar}></div>
                    </div>
                </li>
            </ul>

            <div className={styles.BIO}>
                <h1>BIO AO:</h1>
                <div className={styles.BIOs}>
                    <p>( ) sem alterações</p>
                    <ul className={styles.list_bio}>
                        <li>
                            <div className={styles.divBars1}>
                                <p>( )OD Catarata N</p>
                                <div className={styles.bar}></div>
                            </div>
                            <div className={styles.divBars2}>
                                <p>( )OE Catarata N</p>
                                <div className={styles.bar}></div>
                            </div>
                        </li>

                        <li>
                            <div className={styles.divBars1}>
                                <p>( )OD: PT</p>
                                <div className={styles.bar}></div>
                            </div>
                            <div className={styles.divBars2}>
                                <p>( )OE: PT</p>
                                <div className={styles.bar}></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.div_outros}>
                <div className={styles.divBars}>
                    <h1>OUTROS:</h1>
                    <div className={styles.bar}></div>
                </div>
            </div>

            <div className={styles.div_list}>
                <ul>
                    <li>
                        <p><strong>FO AO:</strong>( ) escavação fisiológica.</p>
                        <p><strong>TOPO: K1:</strong>________________________</p>
                    </li>
                    <li>
                        <p><strong>FO OD:</strong>( ) escavação 0,____x 0,____x</p>
                        <p><strong>K2:</strong>________________________</p>
                    </li>
                    <li>
                        <p><strong>FO OE:</strong>( ) escavação 0,____x 0,____x</p>
                    </li>
                    <li>
                        <p><strong>OUTROS:</strong>________________________</p>
                    </li>
                </ul>
            </div>

            <div className={styles.me}>
                <p><strong>PIO:</strong>________ / ________.</p>
                <p><strong>PAQUI:</strong>________ / ________.</p>
                <p>ME: ________________________</p>
            </div>

            <div className={styles.conduta}>
                <p><strong>CONDUTA:</strong>( ) Rx</p>
                <p>( ) Retorno</p>
                <p>( ) Orientações</p>
                <p>( ) Outros________________</p>
            </div>

            <div className={styles.obs}>
                <div className={styles.divBars}>
                    <h1>OBS:</h1>
                    <div className={styles.bar}></div>
                </div>
                <div className={styles.dr}>
                    <p>DR. ROBERTO NOVAES CAMPELLO HOROVITZ</p>
                    <p><strong>CRM</strong>:134017-SP</p>
                </div>
            </div>

        </div>
    );
};

export default Doctors_region;
