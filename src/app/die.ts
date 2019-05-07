export class Die
{
  maxRoll: number;
  rollValue: number = 0;

  get name(): string {
    let name: string = `d${this.maxRoll}`;
    if (this.rollValue) {
      name += `(${this.rollValue})`;
    }
    return name;
  };

  constructor(maxRoll: number)
  {
    this.maxRoll = maxRoll;
  }

  roll(): number
  {
    this.rollValue = Math.floor(Math.random() * this.maxRoll) + 1;
    return this.rollValue;
  }

  clear(): void
  {
    this.rollValue = 0;
  }
}
