import React, { useState } from 'react';

const AddUser = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [errors, sererrors] = useState({
        emailError: "",
        passwordError: ""
    })

    const handleForm = (evt) => {

        setUser({ ...user, [evt.target.name]: evt.target.value });

        if (evt.target.name == "email") {

            sererrors({
                ...errors, emailError: (evt.target.value.length == 0)
                    ? "Email is Required" :
                    (/[a-z0-9._%+-]+@[a-z0-9]+.com$/.test(evt.target.value) ?
                        "" : "Email must xxx@xxxx.com")
            })
        } else if (evt.target.name == "password") {

            sererrors({
                ...errors, passwordError: (evt.target.value.length == 0)
                    ? "Password is Required" :
                    (evt.target.value.length > 8 ?
                        "" : "password must younger than 8")
            })
        }

    }

    const hadleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <>
            <div className="col-3 mx-auto p-5">
                <form autoComplete='off' onSubmit={(e) => hadleSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
                        <input type="text" name="email" className={`form-control ${(errors.emailError) ? 'border-danger shadow-none' : ''}`}
                            id="formGroupExampleInput2" placeholder="Email" onChange={(e) => handleForm(e)} />
                        <p className="text-danger">{errors.emailError}</p>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Password</label>
                        <input type="password"
                            name="password" className={`form-control ${(errors.passwordError) ? 'border-danger shadow-none' : ''}`}
                            id="formGroupExampleInput" placeholder="Password" onChange={(e) => handleForm(e)} />
                        <p className='text-danger'>{errors.passwordError}</p>
                    </div>

                    {(errors.emailError) ? <button disabled className='btn btn-primary' type='submit'>Login</button> :
                        <button className='btn btn-primary' type='submit'>Login</button>}
                </form>
            </div>

        </>
    );
}

export default AddUser;
