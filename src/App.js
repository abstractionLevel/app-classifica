import Home from './pages/Home'
import {
	BrowserRouter as Router,
	Routes,
	Route,
  } from "react-router-dom";
import store from './redux/store';
import './App.css';
import { Provider } from 'react-redux';


function App() {
  return (
	<Provider store={store}>
		<div>
			<Router>
			{/*<CookiePolicy cookieAcconsent={isAcconsentCookie} />*/}
				<div className="App">
					<div className="image">
						<Routes>
							<Route exact path='/'element={<Home />} />
						</Routes>
					</div>
				</div>
			
			</Router>
		</div>
	</Provider>

  );
}

export default App;
