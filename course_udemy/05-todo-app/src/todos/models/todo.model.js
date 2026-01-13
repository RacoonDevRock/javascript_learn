import { v4 as uuidv4 } from "uuid";

export class Todo {

    constructor(description) {
        this.id = uuidv4(); // autogenerate with UUID
        this.description = description;
        this.done = false;
        this.createdAt = new Date(); // fecha actual
    }

}
