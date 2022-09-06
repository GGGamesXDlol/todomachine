import React from 'react';
import './styles/TodoCounter.css';
import { TodoContext } from './TodoContext';


function TodoCounter() 
{
    const {totalTodos, completedTodos } = React.useContext(TodoContext);
    if (totalTodos === 0)
    {
        return(
            <h2 className='TodoCounter'>No hay TODOs, crea uno nuevo con el botón "+"</h2>
        )
    }
    else
    {
        if (totalTodos === 1) 
        {
            if (completedTodos == totalTodos) {
                return (
                    <h2 className='TodoCounter'>Has completado <strong className='Bold'>el</strong> TODO</h2>
                )
            }
            else
            {
                return (
                    <h2 className='TodoCounter'>No has completado <strong className='Bold'>el</strong> TODO</h2>
                )
            }
        }
        else
        {
            if (completedTodos == totalTodos) {
                return (
                    <h2 className='TodoCounter'>Has completado <strong className='Bold'>todos</strong> los TODOs</h2>
                )
            }
            else if (completedTodos > 0)
            {
                return (
                    <h2 className='TodoCounter'>Has completado <strong className='Bold'>{completedTodos}</strong> de <strong className='Bold'>{totalTodos}</strong> TODOs</h2>
                )
            }
            else
            {
                return (
                    <h2 className='TodoCounter'>No has completado <strong className='Bold'>ningún</strong> TODO</h2>
                )
            }
        }
        
    }
    
    
}


export { TodoCounter };
