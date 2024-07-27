import 'bootstrap-icons/font/bootstrap-icons.css';
import Chat from "./Template Components/Chat";
import SideFunctions from "./Template Components/SideFunctions";
import { useState } from 'react';

function AppUI({ loginNumber, setLoginNumber }) {

    const [clickedContact, setClickedContact] = useState("");

    return (
        <div className='d-flex main'>
            <div className='side-functions-page'><SideFunctions clickedContact={clickedContact} setClickedContact={setClickedContact} loginNumber={loginNumber} setLoginNumber={setLoginNumber} /></div>
            <div className='chat-page'><Chat clickedContact={clickedContact} setClickedContact={setClickedContact} loginNumber={loginNumber} /></div>
        </div>
    );
}

export default AppUI;
