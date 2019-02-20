export class Hierarchy implements Deserializable {
    name: string;
    value: number;
    children: Children;
    deserialize(input: any) {
        Object.assign(this, input);
        this.children = new Children().deserialize(input.children);
        return this;
    }
}

export class Children {
    name: string;
    value: number;
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}

export interface Deserializable {
    deserialize(input: any): this;
}
