import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TelacadastroPage } from '../telacadastro/telacadastro';
import { TelalistarPage } from '../telalistar/telalistar';
import { TelaeditarPage } from '../telaeditar/telaeditar';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the TelaMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tela-menu',
  templateUrl: 'tela-menu.html',
})
export class TelaMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelaMenuPage');
  }

  isCadastrar() {
    this.navCtrl.push(TelacadastroPage);
  }

  isListar(){
    this.navCtrl.push(TelalistarPage);
  }

  isEditar(){
    this.navCtrl.push(TelaeditarPage);
  }

}
