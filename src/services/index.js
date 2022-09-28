import axios from "axios";

//Petición para obtener la informacipon del endpoint

const products = async (state) => {
    const peticion = await axios.get('https://fakestoreapi.com/products')
    state(peticion.data) //Se cargan los datos dentro del estdo
}

export { products } //Se exporta un objeto que contiene la función


