import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TelaInicialAlunoPage } from '../tela-inicial-aluno/tela-inicial-aluno';
import { HomePage } from '../home/home';
import { TelaInicialProfessorPage } from '../tela-inicial-professor/tela-inicial-professor';

/**
 * Generated class for the TelaPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tela-perfil',
  templateUrl: 'tela-perfil.html',
})
export class TelaPerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelaPerfilPage');
  }

  isTelaInicial(teste) {
     /* var tela = teste;
      console.log(tela);
    if (tela == "aluno") {
      this.navCtrl.push(TelaInicialAlunoPage);
    } else {
      this.navCtrl.push(TelaInicialProfessorPage);
    }

    }*/
    this.navCtrl.push(TelaInicialAlunoPage);
  }

  isSair(){
    this.navCtrl.push(HomePage);
  }



    
}
