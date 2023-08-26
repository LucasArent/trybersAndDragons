import { EnergyType } from '../Energy';

abstract class Archetype {
  constructor(
    private _name: string,
    private _cost: number = 0,
    private _special: number = 0,
  ) {}

  //   constructor(name: string) {
  //     this._name = name;
  //     this._cost = 0;
  //     this._special = 0;
  //   }

  get name() {
    return this._name;
  }

  get cost() {
    return this._cost;
  }

  get special() {
    return this._special;
  }

  static createdArchetypeInstances(): number {
    throw Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;
