import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonModal, IonRow, IonToolbar, IonButtons, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [IonContent, IonChip, IonButton, RouterLink, IonGrid, IonRow, IonCol, IonModal, IonHeader, IonToolbar, IonButtons, IonTitle]
})
export class HomeComponent implements OnInit {
  public isModalOpen: boolean = false;

  ngOnInit() {
    alert('onInit')
  }
  
  ionViewWillEnter() {
    alert('will enter')
  }
}
