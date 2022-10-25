import "../Assets/css/Home.css";
import { useState, useContext } from "react";
import Contexto from "../Context/Contexto";
import Select from "react-select";



export default function Home() {

    const suppliers = [
        {  value: 'Carnes' , label: 'Carnes' },
        { value: 'Lacteos'  ,label: 'Lacteos'},
        { value: 'Bazar' , label: 'Bazar'  },
        { value: 'Productos de limpieza' , label: 'Productos de limpieza' },
    
    ]

    const [NombreProduc, setNombreProduc] = useState("");
    const [Cantidad, setCantidad] = useState("");
    const [FotoProduct, setFotoProduct] = useState("");
    const [Precio, setPrecio] = useState("");
    const [ Value, setValue] = useState(null);
    
    



    const [identificador, setIdentificador] = useState("");
    const { registro, Producto, modificar, eliminar } = useContext(Contexto);


    function iden(id) {
        const ide = id;
        setIdentificador(ide)
    }

    const registrarProducto = async (e) => {
        e.preventDefault();
        await registro(NombreProduc, Cantidad, FotoProduct, Precio, Value);

    }

    const modificarProducto = async (e) => {
        e.preventDefault();
        await modificar(identificador, NombreProduc, Cantidad, FotoProduct, Precio);
    }

    const eliminarProducto = async (e) => {
        e.preventDefault();
        await eliminar(identificador);
    }

  

   




    return (
        <>
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Alta producto</h2>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Añadir Nuevo producto</span></a>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Categoria</th>
                                    <th>Nombre</th>
                                    <th>Cantidad</th>
                                    <th>Foto Producto</th>
                                    <th>Precio</th>


                                </tr>
                            </thead>
                            <tbody>
                                {Producto.map((producto) => (
                                    <tr key={producto.id}>
                                        <td>
                                            <span className="custom-checkbox">
                                                <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                                                <label htmlFor="checkbox1"></label>
                                            </span>
                                        </td>
                                        
                                        <td>{producto.NombreProduc}</td>
                                        <td>{producto.Precio}</td>
                                        <td>{producto.Cantidad}</td>
                                        <td>{producto.FotoProduct}</td>


                                        <td>
                                            <a href="#editEmployeeModal" className="edit" onClick={() => iden(producto.id)} data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                            <a href="#deleteEmployeeModal" className="delete" onClick={() => iden(producto.id)} data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <!-- Añadir nuevo Libro --> */}
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div>
                            <div className="modal-header">
                                <h4 className="modal-title">Añadir Producto</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="Suppliers-container" >
                                    <Select
                                        defaultValue={suppliers.value}
                                        options={ suppliers }
                                        //onChange={handleSelectChange}
                                        onChange={(Value) => setValue(Value.value)}

                                    />

                                </div>
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input type="text" className="form-control" required onChange={(e) => setNombreProduc(e.target.value)} />
                                </div>
                                <div>
                                    <label>Cantidad</label>
                                    <input type="text" className="form-control" required onChange={(e) => setCantidad(e.target.value)} />
                                </div>
                                <div>
                                    <label>Foto Producto</label>
                                    <input type="text" className="form-control" required onChange={(e) => setFotoProduct(e.target.value)} />
                                </div>
                                <div>
                                    <label>Precio</label>
                                    <input type="text" className="form-control" required onChange={(e) => setPrecio(e.target.value)} />
                                </div>

                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-success" data-dismiss="modal" value="Añadir" onClick={registrarProducto} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Editar Libro */}
            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div>
                            <div className="modal-header">
                                <h4 className="modal-title">Editar Libro</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>numero</label>
                                    <input type="text" className="form-control" required onChange={(e) => setNombreProduc(e.target.value)} />
                                </div>

                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-info" value="Guardar" onClick={modificarProducto} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="deleteEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div>
                            <div className="modal-header">
                                <h4 className="modal-title">Eliminar numero</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <p>¿Estas Seguro que deseas Eliminar el numero?</p>
                                <p className="text-warning"><small>Esta accion no se puede deshacer.</small></p>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-danger" value="Eliminar" onClick={eliminarProducto} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )




}