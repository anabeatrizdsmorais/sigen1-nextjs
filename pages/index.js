import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';

import styles from '../styles/Home.module.css'
import Venda from './venda';


export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>SIGE - Sistema de Gestão</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Venda></Venda>
		</div>
	)
}
