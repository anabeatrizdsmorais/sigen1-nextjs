import styles from '../styles/Footer.module.css';
import { Button } from 'react-bootstrap';

export default function Footer () {
    return (
        <>
            <div className={styles.footer}>

                <div className='container'>

                    <div className='row'>
                        <Button variant="warning" className={styles.buttons}>Produto (F1)</Button>
                        <Button variant="danger" className={styles.buttons}>Adicionar cliente (F3)</Button>
                        <Button variant="primary" className={styles.buttons}>Pagamento (F4)</Button>
                        <Button variant="success" className={styles.buttons}>Finalizar (F6)</Button>
                    </div>

                </div>


            </div>
        </>
    )
}