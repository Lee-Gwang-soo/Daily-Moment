import {
	IonButton,
	IonContent,
	IonHeader,
	IonInput,
	IonItem,
	IonLabel,
	IonList,
	IonLoading,
	IonPage,
	IonText,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import React, {useState} from 'react';
import {Redirect} from 'react-router';
import {useAuth} from '../auth';
import {auth} from '../firebase';

const LoginPage: React.FC = () => {
	const {loggedIn} = useAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [status, setStatus] = useState({loading: false, error: false});
	const [errmsg, setErrmsg] = useState('');

	const handleLogin = async () => {
		try {
			setStatus({loading: true, error: false});
			const credential = await auth.signInWithEmailAndPassword(
				email,
				password,
			);
		} catch (e) {
			setStatus({loading: false, error: true});
			setErrmsg(e.message);
		}
	};

	if (loggedIn) {
		return <Redirect to='/my/entries' />;
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>로그인</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className='ion-padding'>
				<IonList>
					<IonItem>
						<IonLabel position='stacked'>Email</IonLabel>
						<IonInput
							type='email'
							value={email}
							onIonChange={(e) => setEmail(e.detail.value)}
						/>
					</IonItem>
				</IonList>
				<IonList>
					<IonItem>
						<IonLabel position='stacked'>Password</IonLabel>
						<IonInput
							type='password'
							value={password}
							onIonChange={(e) => setPassword(e.detail.value)}
						/>
					</IonItem>
				</IonList>
				{status.error && <IonText color='danger'>{errmsg}</IonText>}
				<IonButton expand='block' onClick={handleLogin}>
					로그인
				</IonButton>
				<IonButton expand='block' fill='clear' routerLink='/register'>
					아이디가 없으신가요?
				</IonButton>
				<IonLoading isOpen={status.loading} />
			</IonContent>
		</IonPage>
	);
};

export default LoginPage;
