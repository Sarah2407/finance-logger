import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// Inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// List Template Instance
const list = document.querySelector('ul')!;
const ul = new ListTemplate(list);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [toFrom.value, details.value, amount.valueAsNumber];

    let doc : HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(...values);
    } 
    else{
        doc = new Payment(...values);
    }

    ul.render(doc, type.value, 'end');
});