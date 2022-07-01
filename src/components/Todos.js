import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from './../services/actions/todosAction';

const Todos = () => {
    const { isLoading, todos, error } = useSelector(state => state);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllTodos())
    }, [])

    return (
        <div className="bg-gray-200 p-10 height-full">
            {/* <h3>Todos App</h3> */}


            {isLoading && <h3>Data is loading</h3>}
            {error && <h3>{error} !!</h3>}

            <ul className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                {todos.map((todo) => <li className="text-3xl bg-green-500 p-16 rounded-md text-capitalize" key={todo.id}>{todo.id}. {todo.title}</li>)}
            </ul>
        </div>
    );
};

export default Todos;