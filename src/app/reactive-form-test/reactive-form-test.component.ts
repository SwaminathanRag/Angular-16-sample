import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
    selector: 'reactive-form-test',
    templateUrl: './reactive-form-test.component.html',
    styleUrls: ['./reactive-form-test.component.css']
})
export class ReactiveTestComponent {
    projectForm: FormGroup;

    constructor() {
        this.projectForm = new FormGroup({
            'projectName': new FormControl(null, [Validators.required], [this.validateProjectName]),
            'email': new FormControl(null, [Validators.required,Validators.email] ),
            'projectStatus': new FormControl('Critical', Validators.required)
        });
    }

    validateProjectName(control: AbstractControl): Promise<any> | Observable<any> {
        return new Promise(
            (resolve, reject) => {
                setTimeout(
                    () => {
                        if(control.value === 'Test') {
                            resolve({isProjectNameInvalid: true});
                        } else {
                            resolve(null);
                        }
                    }
                , 1500);
            }
        )
    }

    onSubmit() {
        console.log(this.projectForm.value);
    }
}