import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginNumber as loginNumberAction } from "../slice/loginNumberSlice";
import { useDispatch } from "react-redux";



export default function LoginApp({ loginNumber, setLoginNumber }) {

    const [formValues, setFormValues] = useState({ phoneNumber: '', name: '', bio: '' });
    const [showError, setShowError] = useState(false)
    const [userExist, setUserExist] = useState(true)
    const navigate = useNavigate()
    const dispatch = useDispatch();


    function handlePhoneNumber(e) {
        const val = e.target.value;
        if (val <= 9999999999) {
            setFormValues({ ...formValues, phoneNumber: val })
        }
    }
    function handleName(e) {
        const val = e.target.value;
        if (val.length <= 35) {
            setFormValues({ ...formValues, name: val })
        }
    }
    function handleBio(e) {
        const val = e.target.value;
        if (val.length <= 75) {
            setFormValues({ ...formValues, bio: val })
        }
    }
    function backToPhoneNumber() {
        setUserExist(true)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (userExist) {
            if (formValues.phoneNumber >= 1000000000 && formValues.phoneNumber <= 9999999999) {

                fetch(process.env.REACT_APP_API_URL + 'contacts/' + formValues.phoneNumber, {
                    method: 'GET'
                })
                    .then(res => res.json())
                    .then(res => {
                        if (res.userDetails.length !== 0) {
                            setLoginNumber(formValues.phoneNumber)
                            dispatch(loginNumberAction(formValues.phoneNumber))
                            navigate('/')
                        } else {
                            setUserExist(false)
                            setShowError(false)
                        }
                    })
            }
            else {
                setShowError(true)
            }
        } else {
            if (formValues.name.length !== 0) {
                fetch(process.env.REACT_APP_API_URL + 'newUser', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formValues)
                })
                    .then(res => res.json())
                    .then(res => {
                        setLoginNumber(formValues.phoneNumber)
                        navigate('/')
                    })
            } else {
                setShowError(true)
            }
        }
    }


    return <div className="d-flex flex-column align-items-center">
        <div className="text-center">
            <img src="./Images/whatsapplogo.png" alt="" width="60%" />
        </div>
        <form onSubmit={handleSubmit} className="d-flex flex-column mt-3 gap-3 p-4 text-white" style={{ width: '380px' }}>
            <p className="text-danger m-0 text-end pe-2" style={{ fontSize: '12px', display: showError ? 'block' : 'none', letterSpacing: '.7px' }}>Enter correct details?</p>
            {userExist ? <div>
                <label htmlFor="phoneNumber" style={{ fontSize: '14px' }}>Phone number</label>
                <input type="number" className="loginFormInput" value={formValues.phoneNumber} id="phoneNumber" name="phoneNumber" onChange={handlePhoneNumber} required />
            </div> : <>
                <div className="position-relative">
                    <label htmlFor="name" style={{ fontSize: '14px' }}>Name</label>
                    <input type="text" className="loginFormInput pe-4" id="name" name="name" value={formValues.name} onChange={handleName} required />
                    <span className="position-absolute ifInputFocus" style={{ right: '10px', bottom: '4px', fontSize: '11px' }}>{35 - formValues.name.length}</span>
                </div>
                <div className="position-relative">
                    <label htmlFor="bio" style={{ fontSize: '14px' }}>Bio</label>
                    <textarea className="loginFormInput pe-4 change-scollbar" style={{ resize: 'none' }} id="bio" name="bio" value={formValues.bio} onChange={handleBio} />
                    <span className="position-absolute ifInputFocus" style={{ right: '10px', bottom: '4px', fontSize: '11px' }}>{75 - formValues.bio.length}</span>
                </div>
                <p className=" m-0 ms-auto py-1 text-primary text-decoration-underline" style={{ fontSize: '12px', cursor: 'pointer', width: 'fit-content' }} onClick={backToPhoneNumber}>Wrong Phone number ?</p>
            </>
            }
            <input type="submit" value="Submit" className="form-control btn btn-success" />

        </form>
    </div>
}