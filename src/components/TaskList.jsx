import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodo } from '../features/taskSlice'

const TaskList = () => {
    const tasks = useSelector((state)=> state.tasks.tasks)
    const loading = useSelector((state)=> state.tasks.loading)
    const error = useSelector((state)=> state.tasks.error)
    const dispatch = useDispatch() 

    useEffect(()=> {
        dispatch(fetchTodo())
    }, [dispatch])

    if(loading){
        return <p>Tasks loading...</p>
    }
    if(error){
        return <p>There is an error {error}</p>
    }

  return (
    <div>
        <div>
            <h2>Tasks</h2>
            <ul className='space-y-4'>
                {tasks.map(task => 
                    <li key={task.id} className='bg-grey-50 p-4 rounded-md shadow-sm flex justify-between items-center'>
                        <div>
                            <p>{task.title}</p>
                            {task.description && <p>{task.title}</p>}
                            <p>Status: {task.status}</p>
                        </div>
                        <div>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    </div>
  )
}

export default TaskList