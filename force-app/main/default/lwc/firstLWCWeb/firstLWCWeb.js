import { LightningElement } from 'lwc';

export default class FirstLWCWeb extends LightningElement {

    greeting = 'World';
    changeHandler(event) {
      this.greeting = event.target.value;
    }
}