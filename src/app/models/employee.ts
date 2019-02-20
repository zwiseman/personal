export class Employee {
    LastName: string;
    FirstName: string;
    Job: string;
    Equipment: string;
    Address: string;

    constructor(lastName, firstName, job, equipment, address) {
        this.LastName = lastName;
        this.FirstName = firstName;
        this.Job = job;
        this.Equipment = equipment;
        this.Address = address;
    }
}
