import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { clickedContact as clickedContactAction } from "../slice/clickdContactSlice";
import { useDispatch } from "react-redux";


export default function Contacts({ clickedContact, setClickedContact, loginNumber, setLoginNumber }) {

    const [searchValue, setSearchValue] = useState();
    const [contactList, setContactList] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        async function getContacts() {
            try {
                await fetch(`http://localhost:5000/api/v1/contacts/${loginNumber}`, {
                    method: 'GET'
                })
                    .then(res => res.json())
                    .then(res => setContactList(res.userDetails[0].contactList))
            } catch (error) {
                navigate('/login')
            }
        }
        getContacts()
    }, [])

    function contactClicked(e) {
        setClickedContact(e)
        dispatch(clickedContactAction(e))
    }

    function handleSearchBar(e) {
        setSearchValue(e.target.value)
    }

    return contactList && <div className="text-white">
        <div className="d-flex justify-content-between px-3 py-3" style={{ height: '60px', width: '100%' }}>
            <h3>Chats</h3>
            <div>
                <button value="AI" className="btn btn-warning rounded-circle" style={{ boxShadow: 'none' }} title="Meta AI">AI</button>
                <button value="new chat" className="mx-3 btn text-white-50 fs-5 rounded-circle" style={{ boxShadow: 'none' }} title="New Chat"><i className="bi bi-person-plus-fill"></i></button>
                <button value="more" className="btn text-white-50 rounded-circle" style={{ boxShadow: 'none' }} title="More"><i className="bi bi-three-dots-vertical"></i></button>
            </div>
        </div>
        <div className="mx-auto px-2 py-1 bg-dark rounded rounded-5 my-3" style={{ width: '90%' }}>
            <span className="d-inline-block text-center text-white-50" style={{ width: '10%' }}><i className="bi bi-search"></i></span>
            <input type="search" className="form-control-sm border-0 bg-transparent text-white" style={{ width: '90%', outline: 'none' }} placeholder="Search" value={searchValue} onChange={handleSearchBar} />
        </div>
        <div className="px-4 my-2">
            <button value="All" className="btn rounded rounded-pill text-white-50" style={{ background: 'rgb(10, 51, 44)' }}>All</button>
            <button value="Unread" className="btn rounded rounded-pill text-white-50 mx-2" style={{ background: 'rgb(32, 44, 51)' }}>Unread</button>
            <button value="Groups" className="btn rounded rounded-pill text-white-50" style={{ background: 'rgb(32, 44, 51)' }}>Groups</button>
        </div>

        <div className="change-scollbar mt-1" style={{ height: '515px', overflowX: 'hidden' }}>
            {contactList.map((contact, index) => (<div key={index}>
                <div className="single-contact align-items-center py-2 px-3 d-flex w-100" onClick={() => { contactClicked(contact.phoneNumber) }}>
                    <div className="" style={{ width: '48px' }}>
                        <img src={`./Images/2.jpg`} alt="ben" className="rounded rounded-circle" style={{ height: '48px', objectFit: 'cover', width: '48px' }} />
                    </div>
                    <div className="py-1 px-3" style={{ flexGrow: '1' }}>
                        <p className="m-0 fs-6">{contact.name}</p>
                        <p className="m-0 text-white-50" style={{ fontSize: '13px' }}>Ryttu tu daa</p>
                    </div>
                    <div className="d-flex flex-column align-items-center" style={{ width: '62px' }}>
                        <p className="text-white-50 m-0" style={{ fontSize: '13px' }}>Friday</p>
                        <p style={{ backgroundColor: 'rgb(6, 207, 156)', width: '22px', height: '22px' }} className="rounded rounded-circle text-center m-0 mt-1">1</p>
                    </div>
                </div>
                <p className="ms-auto my-0" style={{ width: '86%', borderTop: '1px solid rgba(255,255,255,0.1)' }}></p>
            </div>)
            )}
        </div>
    </div>
}