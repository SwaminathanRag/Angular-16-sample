import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: "app-form-test",
    styleUrls:['./form-test.component.css'],
    templateUrl: './form-test.component.html'
})
export class FormTestComponent {
    @ViewChild('f') ngForm!: NgForm;

    onSubmit() {        
        let subscriptionForm = new SubscriptionForm(this.ngForm.value.email,
                                    this.ngForm.value.subscription,
                                    this.ngForm.value.password);
        console.log(subscriptionForm);
        console.log(this.ngForm.form.controls);
        console.log(this.ngForm.form.controls['email']);
        console.log(this.ngForm.form.get('email'));
    }

    forbiddenNames(control: string): {[s: string]: boolean} { return {nameIsForbidden: false}}
}
export class SubscriptionForm {
    constructor(public email: String, public subscription: string, public password: string) {}
}
