import React, { useState, createContext } from "react";

export const MovieContext = createContext();
//provider is used for providing your data whereever it require
const MovieProvider = ({ children }) => {
    //it store the movie detail 
    const [movie, setMovie] = useState({
        id: 0,
        original_title: "",
        overview: "",
        backdrop_path: "",
        poster_path: "",
    });
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);
    const rentMovie = () => {
        setIsOpen(true)
        setPrice(149)
    }
    const buyMovie = () => {
        setIsOpen(true)
        setPrice(599)
    }

    return (
        <MovieContext.Provider value={{ movie, setMovie, isOpen, setIsOpen, price, setPrice, rentMovie, buyMovie }}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieProvider;