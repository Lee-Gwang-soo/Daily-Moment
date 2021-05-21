import {
	IonContent,
	IonHeader,
	IonPage,
	IonRouterLink,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import React from 'react';

const SettingsPage: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Settings</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className='ion-padding'>
				This is the SettingsPage.
			</IonContent>
		</IonPage>
	);
};

export default SettingsPage;
