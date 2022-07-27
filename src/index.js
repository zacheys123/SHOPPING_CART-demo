import React from 'react';
import ReactDOM from 'react-dom/client';
import Context from './context/Context';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Context>
			{' '}
			<App />
		</Context>
	</React.StrictMode>,
);
