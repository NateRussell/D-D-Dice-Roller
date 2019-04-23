import { Component, OnInit } from '@angular/core';
import { Die } from '../die';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.scss']
})
export class DiceRollerComponent implements OnInit {

  constructor() { }

  dieOptions: Die[] = [];
  dice: Die[] = [];
  result: number = 0;

  ngOnInit()
  {
    this.createDiceOptions();
  }

  createDiceOptions()
  {
    this.addDieOption(4);
    this.addDieOption(6);
    this.addDieOption(8);
    this.addDieOption(10);
    this.addDieOption(12);
    this.addDieOption(20);
  }

  addDieOption(maxRoll: number) {
    this.dieOptions.push(new Die(maxRoll));
  }

  addDie(die: Die): void
  {
    this.dice.push(die);
  }

  clearDice(): void
  {
    this.dice = [];
    this.clearResult();
  }

  clearResult(): void
  {
    this.result = 0;
  }

  rollResult(): void
  {
    this.clearResult();
    this.dice.forEach(die => { this.result += die.roll(); })
  }

}
