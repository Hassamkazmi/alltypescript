import React, { useState } from 'react'

const TodoApp = () => {
    interface TodoApp{
        id: string;
        name: string;
    }
    const [todo, setTodo] = useState<TodoApp[]>([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo !== '') {
            const newId = crypto.randomUUID();
            const newTodaItem = {
                id: newId,
                name: newTodo
            };
            setTodo([...todo, newTodaItem]);
            setNewTodo('');
        }
    }

    const removeTodo = (id:string) => {
        const updatedTodo = todo.filter((todo) => todo.id !== id);
        console.log(updatedTodo, id, "updatedTodo")
        setTodo(updatedTodo)
        
    }

  return (
      <div>
          <input type='text' placeholder='Enter Todo' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
          <button onClick={addTodo}>Add</button>
          {
              todo?.map((item) => {
                  return (
                      <div>
                          <h2>{item.name}</h2>
                          <button onClick={() => removeTodo(item.id)}>Remove</button>
                          
                      </div>
                  )
              })
          }
    </div>
  )
}

export default TodoApp