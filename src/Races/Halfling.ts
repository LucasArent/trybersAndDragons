import Race  from './Race';

    class Halfling extends Race {
        private _maxLifePoints = 60;
        private static _createdInstances = 0;

        get maxLifePoints(): number {
            return this._maxLifePoints;
        }

        static get createdInstances(): number {
            Halfling._createdInstances += 1;
            return Halfling._createdInstances;
        }

}

export default Halfling;