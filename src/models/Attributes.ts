export class Attributes<T> {
    constructor(private data:T){}

//generic constraint
//type of K can only ever be one of the keys of K
    get<K extends keyof T>(key:K): T[K]{
        return this.data[key]
    };

    set(update:T): void{
        Object.assign(this.data, update)
    };
};
