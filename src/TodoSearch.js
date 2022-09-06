import React from 'react';
import './styles/TodoSearch.css';
import { TodoContext } from './TodoContext';

function TodoSearch() 
{
    const {searchValue, setSearchValue} = React.useContext(TodoContext);


    const onSearchValueChange = (event) => 
    {
        setSearchValue(event.target.value);
    }

    return (
        <section className="parentContainer">
            <input className='search-input' placeholder="Crear GTA VI" value={searchValue} onChange={onSearchValueChange}/>
        </section>
        
    )
}


export { TodoSearch };
