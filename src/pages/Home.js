import React, { useEffect, useState } from "react";
import { products } from "../services";

const Home = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        products(setProductos)
    }, [])

    return (
        <div>
            {productos?.map((pro) => (
            <div key={pro.id}>
                 <div>{pro.id}</div>
            </div>
            ))}
        </div>
    )
}

export default Home