import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Pokemon } from '../../components/poke-card/poke-model'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pokemon: Array<Pokemon>;

  constructor(public navCtrl: NavController) {
    this.pokemon = [
      new Pokemon("assets/img/bulbasaur.jpg", "grass", "Plant in back"),
      new Pokemon("assets/img/charmander.jpg", "fire", "Flame in tail"),
      new Pokemon("assets/img/squirtle.jpg", "water", "Vamo a calmarno"),
      new Pokemon("assets/img/pikachu.jpg", "electric", "Rata electrica sobrevalorada"),
    ]
  }

}
