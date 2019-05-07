import { Component, OnInit } from '@angular/core';
import { Die } from '../die';
import { DiceSet } from '../dice-set';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.scss']
})
export class DiceRollerComponent implements OnInit {

  constructor() { }

  dieOptions: number[] = [2, 3, 4, 6, 8, 10, 12, 20, 100];
  diceSets: DiceSet[] = [];
  dice: Die[] = [];
  result: number = 0;

  ngOnInit()
  {
    
  }

  addDie(maxRoll: number): void
  {
    this.dice.push(new Die(maxRoll));
  }

  clearDice(): void
  {
    this.dice = [];
    this.clearResult();
  }

  clearResult(): void
  {
    this.result = 0;
    this.dice.forEach(die => { die.clear(); })
  }

  rollResult(): void
  {
    this.clearResult();
    this.dice.forEach(die => { this.result += die.roll(); })
  }

}
