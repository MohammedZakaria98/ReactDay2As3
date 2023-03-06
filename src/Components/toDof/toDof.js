import React, { useState } from "react"

const ToDoF = () => {
    // const tasks = ["task1", "task2"]
    const cuonter = 0;
    const [task, setTask] = useState(["task1", "task2"]);
    const [ts, setTs] = useState('')

    const handleChange = (event) => {
        setTs(event.target.value);
        // setTask(...task, event.target.value)
    };

    const addTaskFunc = () => {
        setTask([...task, ts])
    }

    const deleteTaskFunc = (index) => {
        task.splice(index, 1)
        setTask([...task])
        console.log(task);
    }

    return <>
        <div className="col-12 bg-dark mx-auto">
            <div className="col-6 bg-primary mx-auto p-5">
                <h1 className='text-white text-center'>To-Do App!</h1>

                <div className="mb-3">
                    <label className="form-label text-white">Add New ToDo</label>
                    <input type="text" id="task1" name="task" onChange={handleChange}
                        className="form-control" placeholder="Enter New Task" />
                </div>

                <button className='btn btn-info' onClick={addTaskFunc}>Add</button>

            </div>
            <div className="col-6 bg-secondary mx-auto p-5">
                <h1 className='text-center'>Let's get some work done!</h1><br />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Task</th>
                            <th scope="col">Complete and Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(Array.isArray(task)) ?
                            (task.map((tasks, index) => {
                                return <>
                                    {console.log(index)}
                                    {console.log(ts)}
                                    {console.log(task)}
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{tasks}</td>
                                        <td>
                                            <div class="btn-group mx-auto" role="group" aria-label="Basic mixed styles example">
                                                <button type="button" className="btn btn-success">Complete</button>
                                                <button type="button" className="btn btn-danger" onClick={(i) => deleteTaskFunc(i = index)}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            })) : ""}
                    </tbody>
                </table>
            </div>
        </div>
    </>;
}
export default ToDoF;