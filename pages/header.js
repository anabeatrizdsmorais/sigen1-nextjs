import Image from 'next/image';
import styles from '../styles/Header.module.css';
import logoSige from '../public/images/logosige.jpg';
import logoCliente from '../public/images/logocliente.png';

export default function Header() {

	return (
		<>
			<div className={styles.pageHeader}>
				<div className={styles.container}>

					<div className={styles.pageLogo}>
						<Image 
							src={logoSige} 
							alt="Logo Sige" 
							width={140}
							height={50}
						/>
					</div>

					<div className='row'>
						<div className='col-md-4'>
							<h5>Valor Total</h5>
							<i>
								<h2>
									R$ 0,00
								</h2>
							</i>
						</div>
						
						<div className='col-md-4'>
							<h5>Valor Pagar</h5>
							<i>
								<h2>
									R$ 0,00
								</h2>
							</i>
						</div>
						
						<div className='col-md-4'>
							<h5>Troco</h5>
							<i>
								<h2>
									R$ 0,00
								</h2>
							</i>
						</div>

					</div>

					<div className={styles.pageLogo}>
						<Image 
							src={logoSige} 
							alt="Logo Cliente" 
							width={140}
							height={50}
						/>
					</div>
						
				</div>
			</div>
		</>
	)
}

// export default Vendas;

