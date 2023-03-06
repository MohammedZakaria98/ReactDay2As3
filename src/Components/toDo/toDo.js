import React from "react";

class ToDo extends React.Component {
    constructor() {
        super();
        this.state = { tasks: ["project", "task"] };
    }

    addTaskFunc = (t) => {
        this.setState(this.state.tasks.push(t))
        console.log(this.state);
    }

    deleteTaskFunc = (tId) => {
        this.tasks.clear(tId)
    }

    render() {
        return <>
            <div className="col-12 bg-dark mx-auto">

                <div className="col-6 bg-primary mx-auto p-5">
                    <h1 className='text-white text-center'>To-Do App!</h1>

                    <div className="mb-3">
                        <label className="form-label text-white">Add New ToDo</label>
                        <input type="text" className={"form-control"} placeholder="Enter New Task" />

                    </div>

                    <button className='btn btn-info' onClick={(t) => this.addTaskFunc(t)}>Add</button>

                </div>

                <div className="col-6 bg-secondary mx-auto p-5">
                    <h1 className='text-center'>Let's get some work done!</h1><br />

                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Task</th>
                                <th scope="col">Complete and Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.tasks.map((tasks, index) => {
                                return <>
                                    <tr>
                                        <td key={index}>{index + 1}</td>
                                        <td key={index}>{tasks.name}</td>
                                        <td>
                                            <div class="btn-group mx-auto" role="group" aria-label="Basic mixed styles example">
                                                <button type="button" class="btn btn-success" key={index}>Complete</button>
                                                <button type="button" class="btn btn-danger" key={index} onClick={(t) => this.deleteTaskFunc(t)}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            })}

                        </tbody>
                    </table>

                </div>
            </div>
        </>;
    }
}

export default ToDo;