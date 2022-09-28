import axios from "axios";

const products = async (state) => {
    const peticion = await axios.get('https://fakestoreapi.com/products')
    state(peticion.data)

}

export {products}

