export class Invoice{
    constructor(
        public client: string,
        public details: string,
        private amount: number
    ){}

    format(){
        return `The client ${this.client} owes $${this.amount} for ${this.details}`;
    }
}