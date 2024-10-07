import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { Store } from '@mui/icons-material';
import {Store} from './Store/Store'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
	
		<BrowserRouter>

		<Provider store={Store}>
<GoogleOAuthProvider>
			<App />

</GoogleOAuthProvider>
		</Provider>
		</BrowserRouter>
	</React.StrictMode>
)