import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energy: EnergyType;
  constructor(name: string) {
    super(name);
    this._energy = 'mana';
  }

  private static _createInstances = 0;
  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    Necromancer._createInstances += 1;
    return Necromancer._createInstances;
  }
}

export default Necromancer;
