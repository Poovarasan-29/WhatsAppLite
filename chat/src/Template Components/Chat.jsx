import React, { useEffect, useState } from "react";
import InputEmoji from 'react-input-emoji';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clickedContact as cc } from "../slice/clickdContactSlice";


export default function Chat({ setClickedContact, clickedContact, loginNumber }) {
    const [text, setText] = useState('')
    const [paddingBotttomVal, setPaddingBotttomVal] = useState('575px');
    const [userSenderDetails, setUserSenderDetails] = useState({});
    const [userReceiverDetails, setUserReceiverDetails] = useState({});
    const [userReceiverName, setUserReceiverName] = useState();
    const navigate = useNavigate()
    const phoneNumber = useSelector(state => state.loginNumber)
    const contact = useSelector(state => state.contact)
    const dispatch = useDispatch()

    // const loginNumber = 6384889012
    // const clickedContact = 9566952545

    useEffect(() => {

        async function getSenderDetails() {
            try {
                await fetch(`http://localhost:5000/api/v1/contacts/${phoneNumber}`, {
                    method: 'GET'
                })
                    .then(res => res.json())
                    .then(res => {
                        setUserSenderDetails(res.userDetails[0])
                        for (let val of res.userDetails[0].contactList) {
                            if (Number(val.phoneNumber) === Number(contact)) {
                                setUserReceiverName(val.name)
                                break;
                            }
                        }
                    })
            } catch (error) {
            }
        }
        async function getReceiverDetails() {
            try {
                await fetch(`http://localhost:5000/api/v1/contacts/${contact}`, {
                    method: 'GET'
                })
                    .then(res => res.json())
                    .then(res => setUserReceiverDetails(res.userDetails[0]))
            } catch (error) {
            }
        }
        getSenderDetails()
        getReceiverDetails()
    }, [contact])

    let combaining = [];
    if (contact.length !== 0) {

        if (Object.keys(userReceiverDetails).length !== 0 && Object.keys(userSenderDetails).length !== 0) {

            combaining = [...userReceiverDetails.messages, ...userSenderDetails.messages]
            combaining = combaining.filter(val => Number(val.receiver) === Number(contact) || Number(val.receiver) === Number(phoneNumber))
            if (combaining.length > 1)
                combaining.sort((a, b) => new Date(a.date + " " + a.time) - new Date(b.date + " " + b.time))
            if (combaining.length > 0) {
                const date = new Date()
                const todayDate = date.getDate();
                const todayMonth = date.getMonth() + 1;
                const todayYear = date.getFullYear();
                const Today = todayYear + "-" + todayMonth + "-" + todayDate;

                let currentTime = date.getTime();
                let yesterdayTime = currentTime - (24 * 60 * 60 * 1000);
                date.setTime(yesterdayTime);
                const yesterdayDate = date.getDate();
                const yesterdayMonth = date.getMonth() + 1;
                const yesterdayYear = date.getFullYear();
                const Yesterday = yesterdayYear + "-" + yesterdayMonth + "-" + yesterdayDate;

                let firstDate = combaining[0].date
                for (let i = 1; i < combaining.length; i++) {
                    if (combaining[i].date === firstDate) {
                        combaining[i].date = null
                    }
                    else
                        firstDate = combaining[i].date
                }

                let notNull = combaining.filter((val) => val.date !== null)
                let lastDate = notNull.at(-1).date
                if (lastDate === Today) {
                    notNull.at(-1).date = "Today"
                } else {
                    if (lastDate === Yesterday) {
                        notNull.at(-1).date = "Yesterday"
                    }
                }
                if (notNull.length > 1 && lastDate !== Yesterday) {
                    lastDate = notNull.at(-2).date
                    if (lastDate === Yesterday) {
                        notNull.at(-2).date = "Yesterday"
                    }
                }
            }
        }
    }

    function handleOnEnter(text) {
        setText(text)
        let footer = document.getElementById('chat-footer');
        setPaddingBotttomVal((645 - (footer.offsetHeight + 10)) + "px")
    }

    function handleSendMsg() {
        const date = new Date()
        const Today = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

        let meridiam = "am";
        let hours = date.getHours();
        if (hours >= 12) {
            hours -= 12;
            meridiam = "pm"
        }
        const Time = hours + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + meridiam;
        const details = { senderNumber: phoneNumber, receiverNumber: contact, text, date: Today, time: Time }
        setText('')
        try {
            fetch(process.env.REACT_APP_API_URL + 'savemessage', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(details)
            })
                .then(res => res.json())
                .then(res => setUserSenderDetails(res.userDetails[0]))
        } catch (error) {

        }
    }

    return contact ? <div className="chat w-100 change-scollbar" style={{ height: '695px', overflowX: 'hidden' }}>

        <div style={{ height: '60px', backgroundColor: 'rgb(32, 44, 51)', position: 'sticky', top: '0px', width: '100%' }} className="d-flex px-2 align-items-center ">
            <img src="./Images/1.jpg" alt="" width="45px" height="45px" className="rounded rounded-circle" />
            <div className="py-1 px-3 chat-header">
                <p className="m-0 fs-6 text-white single-line">{userReceiverName}</p>
                <p className="m-0 text-white-50 single-line" style={{ fontSize: '11px' }}>online</p>
            </div>
            <div style={{ flexGrow: '1' }} className=" d-flex justify-content-end">
                <button value="voice call" className="btn text-white-50 rounded-circle" style={{ boxShadow: 'none' }} title="voice call"><i className="bi bi-telephone-fill"></i></button>

                {/* <button value="video call" className="btn text-white-50 rounded-circle mx-2" style={{ boxShadow: 'none' }} title="video call"><i className="bi bi-camera-video-fill"></i></button> */}

                <button value="search" className="btn text-white-50 rounded-circle" style={{ boxShadow: 'none' }} title="search message"><i className="bi bi-search"></i></button>
                <button value="more" className="btn text-white-50 rounded-circle ms-2" style={{ boxShadow: 'none' }} title="More"><i className="bi bi-three-dots-vertical"></i></button>
            </div>
        </div>


        <div className="change-scollbar text-white" style={{ height: paddingBotttomVal, overflowX: 'hidden' }}>
            {
                combaining.map((smsg, index) => <div key={index}>
                    {
                        smsg.date && <p className="text-center mx-auto p-2 px-3 rounded my-3" style={{ width: 'fit-content', backgroundColor: 'rgb(32, 44, 51)', fontSize: '14px', color: 'rgba(255,255,255,.7)' }}>
                            {smsg.date.split('-').reverse().join('/')}
                        </p>
                    }
                    {Number(smsg.receiver) === Number(phoneNumber) ?
                        <div className="py-1 rounded my-1 mx-3 position-relative" style={{ width: 'fit-content', maxWidth: '60%', backgroundColor: 'rgb(32, 44, 51)', fontSize: '14px', paddingRight: '55px', paddingLeft: '6px' }}>
                            <p className="m-0 px-1">{smsg.msg}</p>
                            <span className="ps-1 position-absolute" style={{ fontSize: '10px', letterSpacing: '1px', color: 'rgba(255,255,255,.7)', right: '5px', bottom: '0px' }}>{smsg.time.split(':').at(0) + ":" + smsg.time.split(':').at(1) + " " + smsg.time.split(':').pop().split(' ').pop().toLowerCase()}</span>
                        </div>
                        :
                        <div className="py-1 rounded my-1 ms-auto me-3 position-relative" style={{ width: 'fit-content', maxWidth: '60%', backgroundColor: 'rgb(0, 92, 75)', fontSize: '14px', paddingRight: '55px', paddingLeft: '6px' }}>
                            <p className="m-0 px-1">{smsg.msg}</p>
                            <span className="ps-1 position-absolute" style={{ fontSize: '10px', letterSpacing: '1px', color: 'rgba(255,255,255,.7)', right: '5px', bottom: '0px' }}>{smsg.time.split(':').at(0) + ":" + smsg.time.split(':').at(1) + " " + smsg.time.split(':').pop().split(' ').pop().toLowerCase()}</span>
                        </div>
                    }
                </div>
                )
            }
        </div>


        <div className="position-relative d-flex align-items-center w-100 px-2" style={{ minHeight: '60px', backgroundColor: 'rgb(32, 44, 51)', bottom: '0px' }} id="chat-footer">
            <button className="my-auto btn bg-transparent p-0 px-1"><i className="bi bi-plus-lg fs-5" style={{ color: 'rgba(255,255,255,.6)' }}></i></button>

            {
                text.length !== 0 ? <button style={{ transform: 'rotate(45deg)' }} className="my-auto mx-1 btn bg-transparent p-0 px-1" onClick={handleSendMsg}><i className="bi bi-send-fill fs-5" style={{ color: 'rgba(255,255,255,.6)' }}></i></button> : <button className="my-auto mx-1 btn bg-transparent p-0 px-1"><i className="bi bi-mic-fill fs-5" style={{ color: 'rgba(255,255,255,.6)' }}></i></button>
            }


            <InputEmoji
                value={text}
                onChange={handleOnEnter}
                cleanOnEnter
                onEnter={handleOnEnter}
                placeholder="Type a message"
                background="rgb(42, 57, 66)"
                color="white"
                borderRadius="6px"
                borderColor="transparent"
            />
        </div>

    </div> :
        <div className="chat h-100 d-flex justify-content-center align-items-center text-white fs-3 text-center">
            Download WhatsApp for Windows
        </div>

}
