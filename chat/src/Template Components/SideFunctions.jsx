import React, { useEffect, useState } from "react";
import Contacts from "./Contacts";
import Status from "./Status";
import Channels from "./Channels";
import Communities from "./Communities";
import Settings from "./Settings";
import Profile from "./Profile";


export default function SideFunctions({ clickedContact, setClickedContact, loginNumber, setLoginNumber }) {
    const [icon, setIcon] = useState({ Chats: false, Status: false, Channels: false, Communities: false, Settings: false, Profile: false })
    const type = ["Chats", "Status", "Channels", "Communities"]
    const iconUnchecked = ["bi bi-chat-right-text", "bi bi-filter-circle", "bi bi-chat-dots", "bi bi-people", "bi bi-gear"]
    const iconChecked = ["bi bi-chat-right-text-fill", "bi bi-filter-circle-fill", "bi bi-chat-dots-fill", "bi bi-people-fill", "bi bi-gear-fill"]

    useEffect(() => {
        setIcon((previosValues) => ({ ...previosValues, Chats: true }))
    }, [])

    function changeIcon(e) {
        let seleceted = e.target.getAttribute('name');
        const changeIconClass = { [seleceted]: true }
        const setAllToFalse = { Chats: false, Status: false, Channels: false, Communities: false, Settings: false, Profile: false }
        setIcon(() => ({ ...setAllToFalse, ...changeIconClass }))
    }

    return <div className="d-flex h-100">
        <div className="py-2 d-flex flex-column justify-content-between align-items-center side-functions">
            <div>
                {
                    type.map((value, index) => {
                        return <div key={index}>
                            <input type="radio" name="side-function" value={value} id={value} />
                            <label htmlFor={value} titleName={value} name={value} className="side-function-btns" onClick={changeIcon}><i name={value} className={icon[value] ? iconChecked[index] + " text-white fs-5" : iconUnchecked[index] + " text-white fs-5"} onClick={changeIcon}></i></label>
                        </div>
                    })
                }
            </div>

            <div>
                <input type="radio" name="side-function" value="Settings" id="Settings" />
                <label htmlFor="Settings" titleName="Settings" name="Settings" className="side-function-btns" onClick={changeIcon}><i name="Settings" className={icon['Settings'] ? iconChecked[4] + " text-white fs-5" : iconUnchecked[4] + " text-white fs-5"} onClick={changeIcon}></i></label>

                <input type="radio" name="side-function" value="Profile" id="Profile" />
                <label htmlFor="Profile" titleName="Profile" name="Profile" className="side-function-btns" onClick={changeIcon}><img src="./images/ben10.png" alt="ben" className="w-100 rounded-circle" name="Profile" onClick={changeIcon} /></label>

            </div>
        </div>

        <div className="contacts" style={{ flexGrow: '1', height: '695px' }} >
            {
                icon["Chats"] ? <Contacts clickedContact={clickedContact} setClickedContact={setClickedContact} loginNumber={loginNumber} setLoginNumber={setLoginNumber} /> : icon["Status"] ? <Status /> : icon["Channels"] ? <Channels /> : icon["Communities"] ? <Communities /> : icon["Settings"] ? <Settings /> : icon["Profile"] ? <Profile /> : null
            }
        </div>

    </div >

}