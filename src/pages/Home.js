import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { products } from "../services";

const Home = () => {

    const [data, setData] = useState([])
    const [productos, setProductos] = useState(data)

    useEffect(() => {
        products(setProductos)
        products(setData)
    }, [])

    const filterProduct = (cat) => {
        const updateList = data?.filter((el) => el?.category === cat)
        setProductos(updateList)
    }

    const ShowProducts = () => {
        return (
            <div>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setProductos(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronic</button>
                </div>
                <div className="row">
                    {productos.map((pro) => {
                        return (
                            <>
                                <div className="col-md-3 mb-4">
                                    <div className="card h-100 text-center p-4" key={pro?.id}>
                                        <img src={pro.image} className="card-img-top" alt={pro.title} height='250px' />
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">{pro.title.substring(0, 12)}</h5>
                                            <p className="card-text lead fw-bold">${pro.price}</p>
                                            <a href="#" className="btn btn-outline-dark">Details</a>
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
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Products</h1>
                        <hr />
                    </div>
                </div>
                <div>
                    {<ShowProducts />}
                </div>
            </div>
        </div>

        /* <div className="row">
            {productos?.map((pro) => (
                <div className="col-md-4">
                    <div className="card h-100 text-center p-4" key={pro.id}>
                        <img src={pro.image} className="card-img-top" alt={pro.title}/>
                            <div className="card-body">
                                <h5 className="card-title mb-0">{pro.title.substring(0,12)}</h5>
                                <p className="card-text">${pro.price}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>
                </div>
            ))}
        </div> */
    )
}

export default Home