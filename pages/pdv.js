
import styles from '../styles/Pdv.module.css';
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import React from "react" ;

export default function Pdv () {
  
    return (
        <div className={styles.pdv}>
            <div className="container">

                <div className='row'>
                    <div className="col-md-3">
                        <label className='form-label'>Tabela de preço:</label>
                        <select className='form-select'>
                            <option>TESTE 1</option>
                            <option>TESTE 2</option>
                            <option>TESTE 3</option>
                            <option>TESTE 4</option>
                            <option>TESTE 5</option>
                        </select>
                    </div>

                    <div className="col-md-3">
                        <label className='form-label'>Código de barras:</label>
                        <div className='input-group'>
                            <input type="text" className="form-control"></input>
                            <span className="input-group-text" id="basic-addon2">tecle ENTER</span>
                        </div>
                        <small className={styles.smallObs}>Aperte &quot;F2&quot; para dar foco ao campo acima.</small>
                    </div>

                    <div className="col-md-3">
                        <label className='form-label'>Vendedor:</label>
                        <select className='form-select'>
                            <option>TESTE 1</option>
                            <option>TESTE 2</option>
                            <option>TESTE 3</option>
                            <option>TESTE 4</option>
                            <option>TESTE 5</option>
                        </select>
                    </div>

                    <div className="col-md-3">
                        <label className='form-label'>Prazo de entrega:</label>
                        <input type="text" className="form-control"></input>
                        <small className={styles.smallObs}>Impressão do Romaneio na VENDA DO DIA, quando estiver preenchido o prazo de entrega.</small>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-7' id={styles.tableScrool}>
                        <table className='table table-hover'>
                            <thead className='table-primary'>
                                <tr>
                                    <th width="40%">Produto</th>
                                    <th width="10%">Estoque</th>
                                    <th width="10%">Quantidade</th>
                                    <th width="20%">Valor</th>
                                    <th width="20%">Total</th>
                                    <th width="5%">Apagar</th>
                                </tr>
                            </thead>
                            <tbody className="table-light">
                                <tr>
                                    <td>Camisa G</td>
                                    <td>5,000</td>
                                    <td>1,000</td>
                                    <td>R$ 35,00</td>
                                    <td>R$ 35,00</td>
                                    <td><button className='btn btn-danger'>X</button></td>
                                </tr>
                                <tr>
                                    <td>Camisa M</td>
                                    <td>7,000</td>
                                    <td>2,000</td>
                                    <td>R$ 35,00</td>
                                    <td>R$ 70,00</td>
                                    <td><button className='btn btn-danger'>X</button></td>
                                </tr>
                                <tr>
                                    <td>Camisa G</td>
                                    <td>5,000</td>
                                    <td>1,000</td>
                                    <td>R$ 35,00</td>
                                    <td>R$ 35,00</td>
                                    <td><button className='btn btn-danger'>X</button></td>
                                </tr>
                                <tr>
                                    <td>Camisa M</td>
                                    <td>7,000</td>
                                    <td>2,000</td>
                                    <td>R$ 35,00</td>
                                    <td>R$ 70,00</td>
                                    <td><button className='btn btn-danger'>X</button></td>
                                </tr>
                                <tr>
                                    <td>Camisa G</td>
                                    <td>5,000</td>
                                    <td>1,000</td>
                                    <td>R$ 35,00</td>
                                    <td>R$ 35,00</td>
                                    <td><button className='btn btn-danger'>X</button></td>
                                </tr>
                                <tr>
                                    <td>Camisa M</td>
                                    <td>7,000</td>
                                    <td>2,000</td>
                                    <td>R$ 35,00</td>
                                    <td>R$ 70,00</td>
                                    <td><button className='btn btn-danger'>X</button></td>
                                </tr>
                                <tr>
                                    <td>Camisa G</td>
                                    <td>5,000</td>
                                    <td>1,000</td>
                                    <td>R$ 35,00</td>
                                    <td>R$ 35,00</td>
                                    <td><button className='btn btn-danger'>X</button></td>
                                </tr>
                                <tr>
                                    <td>Camisa M</td>
                                    <td>7,000</td>
                                    <td>2,000</td>
                                    <td>R$ 35,00</td>
                                    <td>R$ 70,00</td>
                                    <td><button className='btn btn-danger'>X</button></td>
                                </tr>
                                <tr>
                                    <td>Camisa G</td>
                                    <td>5,000</td>
                                    <td>1,000</td>
                                    <td>R$ 35,00</td>
                                    <td>R$ 35,00</td>
                                    <td><button className='btn btn-danger'>X</button></td>
                                </tr>
                                <tr>
                                    <td>Camisa M</td>
                                    <td>7,000</td>
                                    <td>2,000</td>
                                    <td>R$ 35,00</td>
                                    <td>R$ 70,00</td>
                                    <td><button className='btn btn-danger'>X</button></td>
                                </tr>
                            </tbody>
                        </table>
                    
                    </div>

                    <div className='col-md-5' id={styles.tableScrool}>
                        <table className='table table-hover'>
                            <thead className='table-success'>
                                <tr>
                                    <th width="50%">Pagamento</th>
                                    <th width="10%">Parcelas</th>
                                    <th width="30%">Valor Pago</th>
                                    <th width="5%">Apagar</th>
                                </tr>
                            </thead>
                            <tbody className="table-light">
                                <tr>
                                    <td>Dinheiro</td>
                                    <td>1</td>
                                    <td>R$ 55,00</td>
                                    <td><button className='btn btn-danger'>X</button></td>
                                </tr>
                                <tr>
                                    <td>Cartão Débito</td>
                                    <td>1</td>
                                    <td>R$ 50,00</td>
                                    <td><button className='btn btn-danger'>X</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </div>
    )
}