import React, { useState } from 'react';

const RegUser = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        userName: "",
        password: ""
    })

    const [errors, sererrors] = useState({
        nameError: "",
        emailError: "",
        userNameError: "",
        passwordError: "",
        password2Error: ""
    })

    const handleForm = (evt) => {

        setUser({ ...user, [evt.target.name]: evt.target.value });

        if (evt.target.name == "name") {

            sererrors({
                ...errors, nameError: (evt.target.value.length == 0)
                    ? "Name is Required" : ""
            })
        } else if (evt.target.name == "email") {

            sererrors({
                ...errors, emailError: (evt.target.value.length == 0)
                    ? "Email is Required" :
                    (/[a-z0-9._%+-]+@[a-z0-9]+.com$/.test(evt.target.value) ?
                        "" : "Email must xxx@xxxx.com")
            })
        } else if (evt.target.name == "userName") {

            sererrors({
                ...errors, userNameError: (evt.target.value.length == 0)
                    ? "User Name is Required" :
                    (evt.target.value.includes(" ") ?
                        "User Name mustn't have spaces" : "")
            })
        } else if (evt.target.name == "password") {

            sererrors({
                ...errors, passwordError: (evt.target.value.length == 0)
                    ? "Password is Required" : (/[@$!%*#?&]/.test(evt.target.value)
                        ? (/[A-Z]/.test(evt.target.value)
                            ? (/[a-z]/.test(evt.target.value)
                                ? "" : "Password is low") : "Password is low") : "Password is low")
            })
        } else if (evt.target.name == "password2") {

            sererrors({
                ...errors, password2Error: (evt.target.value == user.password) ? "" : "Password is Required"
            })
        }

    }

    const hadleSubmit = (e) => { e.preventDefault() }

    return (
        <>
            <div className="col-6 mx-auto p-5">
                <form autoComplete='off' onSubmit={(e) => hadleSubmit(e)}>

                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
                        <input type="text" name="name" className={`form-control ${(errors.nameError) ? 'border-danger shadow-none' : ''}`}
                            id="formGroupExampleInput2" placeholder="Name" onChange={(e) => handleForm(e)} />
                        <p className="text-danger">{errors.nameError}</p>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                        <input type="text" name="email" className={`form-control ${(errors.emailError) ? 'border-danger shadow-none' : ''}`}
                            id="formGroupExampleInput2" placeholder="Email" onChange={(e) => handleForm(e)} />
                        <p className="text-danger">{errors.emailError}</p>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">User Name</label>
                        <input type="text" name="userName" className={`form-control ${(errors.userNameError) ? 'border-danger shadow-none' : ''}`}
                            id="formGroupExampleInput2" placeholder="User Name" onChange={(e) => handleForm(e)} />
                        <p className="text-danger">{errors.userNameError}</p>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Password</label>
                        <input type="password"
                            name="password" className={`form-control ${(errors.passwordError) ? 'border-danger shadow-none' : ''}`}
                            id="formGroupExampleInput" placeholder="Password" onChange={(e) => handleForm(e)} />
                        <p className='text-danger'>{errors.passwordError}</p>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Confirm Password</label>
                        <input type="password"
                            name="password2" className={`form-control ${(errors.password2Error) ? 'border-danger shadow-none' : ''}`}
                            id="formGroupExampleInput" placeholder="Confirm Password" onChange={(e) => handleForm(e)} />
                        <p className='text-danger'>{errors.password2Error}</p>
                    </div>

                    {(errors.nameError || errors.emailError || errors.userNameError || errors.passwordError || errors.password2Error)
                        ? <button disabled className='btn btn-primary' type='submit'>Register</button>
                        : <button className='btn btn-primary' type='submit'>Register</button>}
                </form>
            </div>

        </>
    );
}

export default RegUser;
