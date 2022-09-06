import React from 'react';
import { TodoContext } from './TodoContext';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoForm } from './TodoFrom';
import { Modal } from './Modal';
import './styles/AppUI.css';

function AppUI()
{
	const {
			error,
		   	loading,
		   	searchedTodos, 
		   	completeTodos, 
		   	deleteTodo,
			openModal,
			setOpenModal,
		} = React.useContext(TodoContext)
    return (
        <React.Fragment>
			<TodoCounter/>
			<TodoSearch/>
				<TodoList>
					{loading && <p>Cargando...</p>}
					{error && <p>Error, recarga la pagina</p>}
					{(!loading && !searchedTodos.length) && <p> </p>}
					{searchedTodos.map(todo => (
						<TodoItem 
						key={todo.text} 
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodos(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
					))}
				</TodoList>

					{!!openModal &&(
						<Modal>
							<TodoForm/>
						</Modal>
					)}

			<CreateTodoButton
				setOpenModal={setOpenModal}
			/>
		</React.Fragment>
    );
}

export { AppUI };