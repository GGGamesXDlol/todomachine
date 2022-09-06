import React from 'react';
import './styles/TodoForm.css';
import { TodoContext } from './TodoContext';

function TodoForm() 
{
    const [newTodoValue, setnewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
        todoRepeated,
        setTodoRepeated,
        popanim,
        setPopanim,
    } = React.useContext(TodoContext);

    const onChange = (event) => 
    {
        setnewTodoValue(event.target.value);
    }

    const onCancel = () =>
    {
        setOpenModal(false);
        setTodoRepeated(false);
    }

    const onSubmit = (event) =>
    {
        event.preventDefault();
        addTodo(newTodoValue);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='divParent'>
                <textarea value={newTodoValue} onChange={onChange} className='textarea' placeholder="Crear GTA VI"/>
                <div className='sectionParent'>
                    <button 
                        className='cancel'
                        type="button"
                        onClick={onCancel}
                    >Cancelar</button>
                    <button 
                        className='create'
                        type="submit"
                    >Crear Todo</button>
                </div>
                <p className={`todoAdvice ${todoRepeated && 'repeated'} ${popanim && 'popanim'}`}>No puedes crear TODOS repetidos</p>
            </div>
            
        </form>
    );
}

export { TodoForm };