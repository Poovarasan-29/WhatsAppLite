// import 'bootstrap-icons/font/bootstrap-icons.css';
// import Chat from "./Template Components/Chat";
// import SideFunctions from "./Template Components/SideFunctions";
// import { useState } from 'react';

// function App() {

// 	const [clickedContact, setClickedContact] = useState("");


// 	return (
// 		<div className='d-flex main'>
// 			<div className='side-functions-page'><SideFunctions clickedContact={clickedContact} setClickedContact={setClickedContact} loginNumber={loginNumber} setLoginNumber={setLoginNumber} /></div>
// 			<div className='chat-page'><Chat clickedContact={clickedContact} setClickedContact={setClickedContact} /></div>
// 		</div>
// 	);
// }

// export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppUI from './AppUI';
import LoginApp from './Template Components/LoginApp';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
	const [loginNumber, setLoginNumber] = useState("")

	return <Provider store={store}>
		<BrowserRouter >
			<Routes>
				<Route path="/" element={<AppUI loginNumber={loginNumber} setLoginNumber={setLoginNumber} />} />
				<Route path="/login" element={<LoginApp loginNumber={loginNumber} setLoginNumber={setLoginNumber} />} />
			</Routes>
		</BrowserRouter>
	</Provider>

}

export default App;
