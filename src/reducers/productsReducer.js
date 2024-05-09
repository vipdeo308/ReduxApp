// src/reducers/productsReducer.js
import products from '../data/productsData'; // Adjust the path as needed

const initialState = products; // Initialize state with the data

const productsReducer = (state = initialState, action) => {
    // Handle actions related to products here
    return state;
};

export default productsReducer;
