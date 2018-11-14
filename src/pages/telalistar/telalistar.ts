import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the TelalistarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-telalistar',
  templateUrl: 'telalistar.html',
})
export class TelalistarPage {

  /*Por que any? Por que o retorno que ele vai utilizar não é tipado*/
  post:any;
                                        /*Nominar a varivél do tipo de serviço que ela vai ofertar. Ex: rest Provider variavel=rest serviço=Provider  */
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider :RestProvider) {
    this.ListPost();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelalistarPage');
  }

  ListPost(){
    /*then -> Devido estar usando a promise, então se usa o then por que ele deve ter um resultado, então ele realmente está trazendo a variavél "data" que está lá no Provider. */
    this.restProvider.getPostagem()
    .then(data=>{
      this.post = data;
      console.log(this.post);
    });
  }

  /*items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];*/

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

}
