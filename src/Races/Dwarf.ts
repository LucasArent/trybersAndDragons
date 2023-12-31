import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _createdInstances = 0;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    Dwarf._createdInstances += 1;
    return Dwarf._createdInstances;
  }
}

export default Dwarf;