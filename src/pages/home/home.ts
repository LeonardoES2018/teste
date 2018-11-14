import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TelaMenuPage } from '../tela-menu/tela-menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  isPrincipal() {
    this.navCtrl.push(TelaMenuPage);
  }

  

}
