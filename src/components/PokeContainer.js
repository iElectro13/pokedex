import React, {useEffect, useState} from 'react'
import Pokemon from './Pokemon'

const PokeContainer = () => {
    
    useEffect(() => {
        const getData = async() => {
            const data = await dataFetch()
            data.map(async (pokemon) => {
                const pokeInfo = await pokeFetch(pokemon.url)
                setPokeList(pokeList => [...pokeList, pokeInfo])
            })
        }
        getData()
    }, [])
    
    const dataFetch = async() => {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data = await resp.json();
        return data.results
    }

    const pokeFetch = async(url) => {
        const resp = await fetch(url)
        const data = await resp.json();
        return data
    }

    const [pokeList, setPokeList] = useState([])
    
    const pokeColors = {
        normal: '#b0b0b0',
        fighting: '#E8581B',
        flying: '#5dffef',
        poison: '#aeff00',
        ground: '#a94b00',
        rock: 'darkgrey',
        bug: '#28f800',
        ghost: 'lightgrey',
        steel: '#a6bac0',
        fire: 'red',
        water: '#55bbd8',
        grass: '#107d00',
        electric: 'blue',
        psychic: '#720096',
        ice: 'aquamarine',
        dragon: '#960000',
        dark: '#313131',
        fairy: '#ff79b7',
        unknown: 'white',
        shadow: '#6e553e'
    }

    return (
        <div className="poke-container" id="poke-container">
            {
                pokeList.map((pokemon) => (
                    <Pokemon color={pokeColors[pokemon.types[0].type.name]} image={pokemon.sprites.other.dream_world.front_default} name={pokemon.name} type={pokemon.types[0].type.name} id={pokemon.id} key={pokemon.id}/> 
                ))
            }
        </div>
    )
}

export default PokeContainer
