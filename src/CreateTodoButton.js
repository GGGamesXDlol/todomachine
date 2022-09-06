import React from 'react';
import './styles/CreateTodoButton.css';

function CreateTodoButton(props) 
{
    const onClickButton = () => {
        props.setOpenModal(true);
    }
    return (
        <section className="parentContainer">
            <button 
                className='todoButton'
                onClick={onClickButton}
            >+</button>
        </section>
    )
}


export { CreateTodoButton };
