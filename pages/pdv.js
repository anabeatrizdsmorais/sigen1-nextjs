
import styles from '../styles/Pdv.module.css';


export default function Pdv () {
    return (
        <div className={styles.pdv}>
            <div className="container">

                <div className='row'>
                    <div className="col-md-3">
                        <label className='form-label'>Tabela de preço:</label>
                        <input type="text" className="form-control"></input>
                    </div>

                    <div className="col-md-3">
                        <label className='form-label'>Código de barras:</label>
                        <div className='input-group'>
                            <input type="text" className="form-control"></input>
                            <span className="input-group-text" id="basic-addon2">tecle ENTER</span>
                        </div>
                        <small>Aperte &quot;F2&quot; para dar foco ao campo acima.</small>
                    </div>

                    <div className="col-md-3">
                        <label className='form-label'>Vendedor:</label>
                        <input type="text" className="form-control" placeholder='Selecione um vendedor'></input>
                    </div>

                    <div className="col-md-3">
                        <label className='form-label'>Prazo de entrega:</label>
                        <input type="text" className="form-control"></input>
                        <small>Impressão do Romaneio na VENDA DO DIA, quando estiver preenchido o prazo de entrega.</small>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-7'>
                        <table className='table table-hover'>
                            <thead className='table-primary'>
                                <tr>
                                    <th>Produto</th>
                                    <th>Estoque</th>
                                    <th>Quantidade</th>
                                    <th>Valor</th>
                                    <th>Total</th>
                                    <th>Apagar</th>
                                </tr>
                            </thead>
                            <tbody className="table-light">
                                <tr>
                                    <td>TESTE</td>
                                    <td>TESTE</td>
                                    <td>TESTE</td>
                                    <td>TESTE</td>
                                    <td>TESTE</td>
                                    <td>TESTE</td>
                                </tr>
                                <tr>
                                    <td>TESTE</td>
                                    <td>TESTE</td>
                                    <td>TESTE</td>
                                    <td>TESTE</td>
                                    <td>TESTE</td>
                                    <td>TESTE</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    
                    </div>

                    <div className='col-md-5'>
                        <table className='table table-hover'>
                            <thead className='table-success'>
                                <tr>
                                    <th>Pagamento</th>
                                    <th>Parcelas</th>
                                    <th>Valor Pago</th>
                                    <th>Apagar</th>
                                </tr>
                            </thead>
                            <tbody className="table-light">
                                <tr>
                                    <td>TESTE</td>
                                    <td>TESTE</td>
                                    <td>TESTE</td>
                                    <td>TESTE</td>
                                </tr>
                                <tr>
                                    <td>TESTE</td>
                                    <td>TESTE</td>
                                    <td>TESTE</td>
                                    <td>TESTE</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

           
        </div>
    )
}