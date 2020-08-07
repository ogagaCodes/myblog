import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  email: FormControl
  message: FormControl
  contactForm : FormGroup

  constructor(private router:Router, private fb: FormBuilder){

  }


  ngOnInit(){
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.message = new FormControl('', [Validators.required, Validators.email]);
    this.contactForm = new FormGroup({
      email:this.email,
      message:this.message
    })
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  sendMessage(contactForm){
    if(contactForm.invalid){
     console.log("error submitting form");
     console.log(contactForm.controls.message.valid);
     console.log(contactForm.controls.email.valid);

    }
    if(contactForm.value.valid){
      window.alert("thanks for contacting me")
      this.router.navigate(['/'])
    }
  }
}
