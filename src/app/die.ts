export class Die
{
  maxRoll: number;
  get name(): string { return `d${this.maxRoll}`; };

  constructor(maxRoll: number)
  {
    this.maxRoll = maxRoll;
  }

  roll(): number
  {
    return Math.floor(Math.random() * this.maxRoll) + 1;
  }
}
