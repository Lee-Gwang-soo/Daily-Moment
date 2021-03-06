import {
	IonBackButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import React, {useEffect, useState} from 'react';
import {useParams, useRouteMatch} from 'react-router';
import {firestore} from '../firebase';
import {Entry, toEntry} from '../models';
import {useAuth} from '../auth';

interface RouteParams {
	id: string;
}

const EntryPage: React.FC = () => {
	const {userId} = useAuth();
	const match = useRouteMatch<RouteParams>();
	const {id} = match.params;
	const [entry, setEntry] = useState<Entry>();

	useEffect(() => {
		const entryRef = firestore
			.collection('users')
			.doc(userId)
			.collection('entries')
			.doc(id);
		entryRef.get().then((doc) => setEntry(toEntry(doc)));
	}, [userId]);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonBackButton />
					</IonButtons>
					<IonTitle>{entry?.title}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className='ion-padding'>
				{entry?.description}
			</IonContent>
		</IonPage>
	);
};

export default EntryPage;
