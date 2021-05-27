import {
	IonContent,
	IonHeader,
	IonItem,
	IonList,
	IonPage,
	IonRouterLink,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import React, {useEffect, useState} from 'react';
import {firestore} from '../firebase';
import {Entry, toEntry} from '../models';
import {useAuth} from '../auth';

const HomePage: React.FC = () => {
	const {userId} = useAuth();
	const [entries, setEntries] = useState<Entry[]>([]);

	useEffect(() => {
		const entreisRef = firestore
			.collection('users')
			.doc(userId)
			.collection('entries');
		entreisRef.get().then(({docs}) => {
			setEntries(docs.map(toEntry));
		});
	}, [userId]);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Home</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className='ion-padding'>
				<IonList>
					{entries.map((entry) => (
						<IonItem
							button
							key={entry.id}
							routerLink={`/my/entries/${entry.id}`}
						>
							{entry.title}
						</IonItem>
					))}
				</IonList>
			</IonContent>
		</IonPage>
	);
};

export default HomePage;
