import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { Health } from '@ionic-native/health'

const Tab1: React.FC = () => {
  const onClick = async () => {
    console.log("click")

    try {
      const available = await Health.isAvailable()
      console.log(available, "available")

      if(available) {
        const auth = await Health.requestAuthorization([
          'distance', 'nutrition',  //read and write permissions
          {
            read: ['steps'],       //read only permission
            write: ['height', 'weight']  //write only permission
          }
        ])
  
        console.log(auth, "Auth")
      }
    } catch(error) {
      console.log(error, "is Error")
    }
    // const isHealthKitAuth = await HealthKit.requestAuthorization({})
  //   console.log(isHealthKitAuth)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 123</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
      <IonButton onClick={onClick}>aaa</IonButton>
    </IonPage>
  );
};

export default Tab1;
