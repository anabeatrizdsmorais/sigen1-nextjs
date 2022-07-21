import styles from '../styles/Footer.module.css';
import { 
    Button, 
    Modal, 
    ModalBody, 
    ModalFooter 
} from "reactstrap";
import { useState } from 'react';


export default function Footer () {

    const [modalProduto, setModalProduto] = useState(false);
    const [modalCliente, setModalCliente] = useState(false);
    const [modalPagamento, setModalPagamento] = useState(false);

    return (
        <>
            <div className={styles.footer}>

                <div className='container'>

                    <div className='row'>
                        <Button 
                            color="warning" 
                            type="button"
                            className={styles.buttons} 
                            onClick={() => setModalProduto(!modalProduto)}
                        >
                            Produto (F1)
                        </Button>
                        
                        <Button 
                            color="danger" 
                            type="button"
                            className={styles.buttons}
                            onClick={() => setModalCliente(!modalCliente)}

                        >
                            Adicionar cliente (F3)
                        </Button>

                        <Button 
                            color="primary"
                            type="button"
                            onClick={() => setModalPagamento(!modalCliente)}
                            className={styles.buttons}
                        >
                            Pagamento (F4)
                        </Button>

                        <Button 
                            color="success"
                            type="button"
                            className={styles.buttons}
                        >
                            Finalizar (F6)
                        </Button>
                    </div>

                </div>


            </div>

        {/* MODAL PRODUTOS */}
            <>
                <Modal toggle={() => setModalProduto(!modalProduto)} isOpen={modalProduto}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"> Produtos </h5>
                        <button
                            aria-label="Close"
                            className="close"
                            type="button"
                            onClick={() => setModalProduto(!modalProduto)}
                        >
                        <span aria-hidden={true}>×</span>
                        </button>
                    </div>
                    <ModalBody>
                        <div>
                            <input type="text" className='form-control' placeholder='Digite o produto, código ou código de barras'/>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="secondary"
                            type="button"
                            onClick={() => setModalProduto(!modalProduto)}
                        >
                            Fechar
                        </Button>
                        <Button color="primary" type="button">
                            Salvar
                        </Button>
                    </ModalFooter>
                </Modal>
            </>

        {/* MODAL CLIENTE */}
            <>
                <Modal toggle={() => setModalCliente(!modalCliente)} isOpen={modalCliente}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"> Adicionar Cliente</h5>
                        <button
                            aria-label="Close"
                            className="close"
                            type="button"
                            onClick={() => setModalCliente(!modalCliente)}
                        >
                        <span aria-hidden={true}>×</span>
                        </button>
                    </div>
                    <ModalBody>
                        <div>
                            <div>
                                <label>Cliente:</label>
                                <input type="text" className='form-control'/>
                            </div><br/>
                            <div>
                                <label>Celular:</label>
                                <input type="text" className='form-control'/>
                            </div><br/>
                            <div>
                                <label>Observação:</label>
                                <textarea type="text" className='form-control'/>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="secondary"
                            type="button"
                            onClick={() => setModalCliente(!modalCliente)}
                        >
                            Fechar
                        </Button>
                        <Button color="primary" type="button">
                            Salvar
                        </Button>
                    </ModalFooter>
                </Modal>
            </>

        {/* MODAL PAGAMENTO */}
            <>
                <Modal toggle={() => setModalPagamento(!modalPagamento)} isOpen={modalPagamento}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Pagamento</h5>
                        <button
                            aria-label="Close"
                            className="close"
                            type="button"
                            onClick={() => setModalPagamento(!modalPagamento)}
                        >
                        <span aria-hidden={true}>×</span>
                        </button>
                    </div>
                    <ModalBody>
                        <div className={styles.cardsPayment}>
                            <div className={styles.cardPayment}>DINHEIRO</div>
                            <div className={styles.cardPayment}>CARTAO DÉBITO</div>
                            <div className={styles.cardPayment}>CARTÃO CRÉDITO</div>
                            <div className={styles.cardPayment}>PIX</div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="secondary"
                            type="button"
                            onClick={() => setModalPagamento(!modalPagamento)}
                        >
                            Fechar
                        </Button>
                        <Button color="primary" type="button">
                            Salvar
                        </Button>
                    </ModalFooter>
                </Modal>
            </>

        </>
    )
}