import { SkiResortName } from './skiResortName.model';

export class SkiResortNameSearch {
    skiResorts: SkiResortName[];

    constructor(obj?: any) {
        this.skiResorts = obj;
    }
}