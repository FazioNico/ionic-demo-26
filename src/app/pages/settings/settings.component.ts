import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  imports: [IonContent]
})
export class SettingsComponent {
  constructor() {}


  ionViewWillEnter() {
    alert('will enter')
  }
}
