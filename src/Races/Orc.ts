import Race  from './Race';

    class Orc extends Race {
        private _maxLifePoints = 74;
        private static _createdInstances = 0;

        get maxLifePoints(): number {
            return this._maxLifePoints;
        }

        static get createdInstances(): number {
            Orc._createdInstances += 1;
            return Orc._createdInstances;
        }

}

export default Orc;