import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { products } from "../services";

const Home = () => {

    //Se carga la peticion dentro del estado 

    const [data, setData] = useState([]) 
    const [productos, setProductos] = useState(data)

    useEffect(() => { //cuando se genere el componente nos cargan las funciones
        products(setProductos) 
        products(setData)
    }, [])

    const filterProduct = (cat) => { //filtado de productos mediante el metodo filter
        const updateList = data?.filter((el) => el?.category === cat)
        setProductos(updateList)
    }

    const ShowProducts = () => {
        return (
            <div>
                <div className="buttons d-flex justify-content-center mb-4 pb-4">
                    <button className="btn btn-outline-dark me-2" onClick={() => setProductos(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronic</button>
                </div>
                <div className="row">
                    {productos.map((pro) => { // Se obtiene la lista de productos mediante map
                        return (
                            <>
                                <div className="col-md-3 mb-4">
                                    <div className="card h-100 text-center p-4" key={pro?.id}>
                                        <img src={pro.image} className="card-img-top" alt={pro.title} height='250px' />
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">{pro.title.substring(0, 12)}</h5>
                                            <p className="card-text lead fw-bold">${pro.price}</p>
                                            <Link to={`/products/${pro.id}`} className="btn btn-outline-dark">Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="container my-2 py-2">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h1 className="display-6 fw-bolder text-center">Products</h1>
                        <hr />
                    </div>
                </div>
                <div>
                    {<ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Home