interface SimpleFighter {
  strength: number;
  lifePoints: number;
  
  attack(enemy: SimpleFighter): void;

  receiveDamage(attackPoints: number): number;
}
export default SimpleFighter;