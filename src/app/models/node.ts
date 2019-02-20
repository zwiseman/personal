export class Node {
    node: number;
    parent: number;
    public deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
    constructor() {}
}
