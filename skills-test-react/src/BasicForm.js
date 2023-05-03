import React, { useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function BasicForm() {

  const [todo, setTodo] = useState();

  const [todoList, setTodoList] = useState([]);

  const SubmitHandler = () => {
    fetch(`https://62b4742fa36f3a973d3473d0.mockapi.io/api/users`, {
      method: 'POST',
      body: JSON.stringify({
        todo: todo
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then((response) => response.json())
  }

  const getTodos = async() => {
    const response = await fetch(`https://62b4742fa36f3a973d3473d0.mockapi.io/api/users`)
    const json = await response.json()
    setTodoList(json)
  }

  const deleteHander = (id) => {
    fetch(`https://62b4742fa36f3a973d3473d0.mockapi.io/api/users/${id}`,
    {method: 'DELETE'})
    .then(
      getTodos()
    )
  }

  useEffect(()=> {
    getTodos()
    .catch(console.error)
  },[todoList])

  return(
  <div>
    <h1>TODO</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={(values) => {}}
    >
      <Form>
        <div className='todo-section'>
          <label htmlFor="todo">Add ToDo </label>
          <Field id="todo" name="Add ToDo" placeholder="TextHere" onChange={e=> setTodo(e.target.value)} />
          <button type="button" onClick={SubmitHandler}>Submit</button>
        </div>
      </Form>
    </Formik>
    
    <table className='tbl'>
      <thead>
        <tr>
          <td>ID</td>
          <td>Task</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {todoList.map((todolist)=> 
        <tr key={todolist.id}>
          <td>{todolist.id}</td>
          <td>{todolist.todo}</td>
          <td>
            <button onClick={()=> deleteHander(todolist.id)}>
              <DeleteForeverIcon />
            </button>
            </td>
        </tr>
        )}
      </tbody>
    </table>

  </div>
  )
}

export default BasicForm;
