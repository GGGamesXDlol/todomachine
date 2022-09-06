import React from 'react';
import { useLocalStorage } from './UseLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props)
{
    const 
    {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    const [todoRepeated, setTodoRepeated] = React.useState(false);
    const [popanim, setPopanim] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if(!searchValue.length >= 1)
    {
        searchedTodos = todos;
    }
    else
    {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        })
    }
    const addTodo = (text) => 
    {
        const newTodos = [...todos];
        const result = newTodos.some((todo) => {
            let todoText = todo.text.toLowerCase();
            let newText = text.toLowerCase();
            return todoText == newText;
        });
        if(result == false)
        {
            newTodos.push({
                completed: false,
                text: text,
            });
            setOpenModal(false);
            saveTodos(newTodos);
            setTodoRepeated(false);
        }
        else
        {
            setTodoRepeated(true);
            setPopanim(true);
        }
        setTimeout(() =>
        {
            setPopanim(false);
        }, 200);
        
    };

    const completeTodos = (text) => 
    {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        if(newTodos[todoIndex].completed)
        {
            newTodos[todoIndex].completed = false;
        }
        else
        {
            newTodos[todoIndex].completed = true;
        }
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => 
    {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos);
        
    };
    return (
        <TodoContext.Provider value=
        {
            {
                loading,
                error,
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodos,
                addTodo,
                deleteTodo,
                openModal,
                setOpenModal,
                todoRepeated,
                setTodoRepeated,
                popanim,
                setPopanim,
            }
        }
            >
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider};
