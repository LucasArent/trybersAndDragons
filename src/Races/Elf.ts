import Race  from './Race';

    class Elf extends Race {
        private _maxLifePoints = 99;
        private static _createdInstances = 0;

        get maxLifePoints(): number {
            return this._maxLifePoints;
        }

        static get createdInstances(): number {
            Elf._createdInstances += 1;
            return Elf._createdInstances;
        }

}

export default Elf;