import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Settings() {
    const [searchValue, setSearchValue] = useState();
    function handleSearchBar(e) {
        setSearchValue(e.target.value)
    }

    const symbolsClassName = ["bi bi-person-circle", "bi bi-lock-fill", "bi bi-chat-right-text-fill", "bi bi-bell-fill", "bi bi-alphabet", "bi bi-question-circle-fill", "bi bi-box-arrow-right"]
    const symbolDescription = ["Account", "Privacy", "Chats", "Notifications", "Keyboard shortcuts", "Help", "Log out"]


    return <div className="text-white">
        <h3 className="px-3 py-3" style={{ height: '60px' }}>Settings</h3>
        <div className="mx-auto px-2 py-1 bg-dark rounded rounded-5 my-3" style={{ width: '90%' }}>
            <span className="d-inline-block text-center text-white-50" style={{ width: '10%' }}><i className="bi bi-search"></i></span>
            <input type="search" className="form-control-sm border-0 bg-transparent text-white" style={{ width: '90%', outline: 'none' }} placeholder="Search settings" value={searchValue} onChange={handleSearchBar} />

        </div>


        <div className="change-scollbar mt-1" style={{ height: '528px', overflowX: 'hidden' }}>

            <div className="single-contact align-items-center py-2 px-3 d-flex">
                <div className="" style={{ width: '80px' }}>
                    <img src={`./Images/1.jpg`} alt="ben" className="rounded rounded-circle settings-img" style={{ height: '80px', objectFit: 'cover', width: '80px' }} />
                </div>
                <div className="py-1 px-3" style={{ flexGrow: '1' }}>
                    <p className="m-0 fs-5">Flower King 29 💕</p>
                    <p className="m-0 text-white-50" style={{ fontSize: '13px' }}>Search is Great learn it</p>
                </div>
            </div>
            {
                symbolDescription.map((val, index) => (
                    <>
                        <div className="single-contact align-items-center px-4 fs-5 d-flex" style={{ paddingTop: '14px', paddingBottom: '14px', color: 'rgba(255,255,255,0.9)' }}  >
                            {index !== symbolDescription.length - 1 ? <>
                                <i className={symbolsClassName[index]}></i>
                                <p className="m-0 ms-3 fs-6">{val}</p>
                            </> : <Link to="/login" className="d-flex text-decoration-none" style={{ color: 'rgb(233, 70, 70)' }}>
                                <i className={symbolsClassName[index]}></i>
                                <p className="m-0 ms-3 fs-6">{val}</p>
                            </Link>
                            }
                        </div>
                        <p className="my-0 ms-auto" style={{ width: '85%', borderTop: '1px solid rgba(255,255,255,0.1)' }}></p>
                    </>
                ))
            }


        </div>









    </div>
}