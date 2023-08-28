import Race from './Races';
import Energy from './Energy';
import { Dwarf } from './Races';
import getRandomInt from './utils';
import Archetype from './Archetypes';
import Fighter from './Fighter/Fighter';
import { Necromancer } from './Archetypes';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _energy: Energy;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;

  constructor(name: string) {
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._archetype = new Necromancer(name);
    this._dexterity = getRandomInt(1, 10);
    this._race = new Dwarf(name, this._dexterity);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }
    special(enemy: Fighter): void { // auto fix
        throw new Error('Method not implemented.');
    }

  get race(): Race { 
    return this._race; 
}

  get archetype(): Archetype { 
    return this._archetype; 
}

  get lifePoints(): number { 
    return this._lifePoints; 
}

  get strength(): number { 
    return this._strength; 
}

  get defense(): number { 
    return this._defense; 
}

  get dexterity(): number { 
    return this._dexterity; 
}

  get energy(): Energy {
    return { 
        type_: this._energy.type_,
        amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    if (damage > 0) {
        this._lifePoints -= damage;
      }
      if (damage <= 0) {
        this._lifePoints -= 1;
      }
      if (this._lifePoints <= 0) {
        this._lifePoints = -1;
      }
      return this._lifePoints;
    }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._energy.amount = 10;
    this._defense += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._maxLifePoints += getRandomInt(1, 10);

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }
}

export default Character;
