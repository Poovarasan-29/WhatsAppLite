import React, { useState } from "react";

export default function Profile() {

    const [accessEditName, setAccessEditName] = useState(false)
    const [yourName, setYourName] = useState('Poovarasan S')
    const [nameCount, setNameCount] = useState(35 - yourName.length)

    const [accessEditAbout, setAccessEditAbout] = useState(false)
    const [yourAbout, setYourAbout] = useState('Search is Great Learn It/!!')
    const [aboutCount, setAboutCount] = useState(75 - yourAbout.length)


    function handleYourName(e) {
        if (35 - e.target.value.length >= 0) {
            setYourName(e.target.value)
            setNameCount(35 - e.target.value.length)
        }
    }
    function handleYourAbout(e) {
        if (75 - e.target.value.length >= 0) {
            setYourAbout(e.target.value)
            setAboutCount(75 - e.target.value.length)
        }
    }

    const inputStyle = { backgroundColor: 'transparent', outline: 'none', border: 'none', color: 'rgba(255,255,255,0.8)', width: '80%' }

    return <div className="text-white">
        <h3 className="px-3 py-3" style={{ height: '60px' }}>Profile</h3>
        <div className="d-flex position-relative mb-5">
            <img src="./Images/1.jpg" alt="" width="220px" height="220px" className="rounded rounded-circle mx-auto profile-img" />
            <div className="change-profile-img"><i className="bi bi-camera-fill fs-3 pb-2"></i><span style={{ lineHeight: '18px', color: 'rgba(255,255,255,.6)' }}> CHANGE <br />PROFILE PHOTO </span></div>
        </div>

        <div className="px-3" style={{ color: 'rgba(255,255,255,.8)' }}>
            <p className="text-success">Your name</p>
            {accessEditName ?
                <input type="text" placeholder="Enter your name" id="name" value={yourName} onChange={handleYourName} onBlur={() => setAccessEditName(false)} style={{ ...inputStyle, borderBottom: '2px solid rgba(255,255,255,.6)' }} />
                :
                <input type="text" placeholder="Enter your name" readOnly value={yourName} id="name" style={{ ...inputStyle, borderBottom: 'none' }} />}

            <label htmlFor="name" onClick={() => setAccessEditName(true)} className="ms-3 px-2 py-1"><i className="bi bi-pencil-fill"></i></label>
            {accessEditName && <p className="text-end me-5 pe-1" style={{ fontSize: '10px' }}>{nameCount}</p>}

            <p className="my-4" style={{color: 'rgba(255,255,255,.6)', fontSize: '12px'}}>This is not your username or PIN. This name will be visible to your WhatsApp contacts.</p>

            <p className="text-success">About</p>
            {accessEditAbout ?
                <textarea rows="2" placeholder="Enter your about" id="about" className="change-scollbar" value={yourAbout} onChange={handleYourAbout} onBlur={() => setAccessEditAbout(false)} style={{ ...inputStyle, borderBottom: '2px solid rgba(255,255,255,.6)', resize: 'none' }} ></textarea>
                :
                <textarea readOnly placeholder="Enter your about" value={yourAbout} className="change-scollbar" id="about" style={{ ...inputStyle, borderBottom: 'none', resize: 'none' }} ></textarea>}

            <label htmlFor="about" onClick={() => setAccessEditAbout(true)} className="ms-3 px-2 py-1"><i className="bi bi-pencil-fill"></i></label>
            {accessEditAbout && <p className="text-end me-5 pe-1" style={{ fontSize: '10px' }}>{aboutCount}</p>}

        </div>

    </div>
}