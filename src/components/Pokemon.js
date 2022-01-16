import React from 'react'


const Pokemon = ({ color, image, name, id, type }) => {
    return (
        <div className="pokemon" style={{background: color}}>
            <div className="img-container">
                <img src={image} alt={name}/>
            </div>
            <div className="info">
                <span className="number">{id}</span>
                <h3 className="name">{name}</h3>
                <small className="type">Type: <span>{type}</span></small>
            </div>
        </div>
    )
}

export default Pokemon