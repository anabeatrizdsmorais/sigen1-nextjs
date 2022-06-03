import styles from '../styles/Venda.module.css';
import Header from './header'
import Pdv from './pdv'
import Footer from './footer';

export default function Venda () {
    return (
        <div className={styles.all}>
            <Header></Header>
            <Pdv></Pdv>
            <Footer></Footer>
        </div>
    )
}