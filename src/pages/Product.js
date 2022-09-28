import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";
import Navbar from "../components/Navbar";

const Product = () => {

    const { id } = useParams()
    const [prod, setProd] = useState({})

    useEffect(() => {
        const getProduct = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProd(response?.data)
            console.log(response.data)
        }
        getProduct()
    }, [])

    const ShorProd = () => {
        return (
            <>
                <div className="col-md-6 ">
                    <img src={prod.image} alt={prod.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">{prod.category}</h4>
                    <h1 className="display-5">{prod.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {prod.rating && prod.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h2 className="display-6 fw-bold my-4">$ {prod.price}</h2>
                    <p className="lead"> {prod.description}</p>
                    <p className="lead">Product: {prod.id}</p>
                </div>
            </>
        )
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <h2 className="text-uppercase text-black-50 fw-bold py-4">Detail</h2>
                <div className="row">
                    <ShorProd />
                </div>
            </div>
        </div>
    )
}

export default Product