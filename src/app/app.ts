import { Component, signal } from '@angular/core';
import { IonRouterOutlet, IonApp, IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  imports: [IonApp, IonRouterOutlet, IonFooter],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ionic-demo');
}
