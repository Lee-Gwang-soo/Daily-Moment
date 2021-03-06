import {IonApp, IonLoading} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {AuthContext, useAuthInit} from './auth';
import AppTabs from './AppTabs';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';

const App: React.FC = () => {
	const authState = useAuthInit();
	console.log(`rendering App with authState=${authState}`);
	if (authState.loading) {
		return <IonLoading isOpen />;
	}
	return (
		<IonApp>
			<AuthContext.Provider value={authState.auth}>
				<IonReactRouter>
					<Switch>
						<Route exact path='/login'>
							<LoginPage />
						</Route>
						<Route exact path='/register'>
							<RegisterPage />
						</Route>
						<Route path='/my'>
							<AppTabs />
						</Route>
						<Redirect exact path='/' to='/my/entries' />
						<Route>
							<NotFoundPage />
						</Route>
					</Switch>
				</IonReactRouter>
			</AuthContext.Provider>
		</IonApp>
	);
};

export default App;
