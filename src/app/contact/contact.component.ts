import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators ,ReactiveFormsModule,FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  public contactForm:FormGroup;
  public message="";

  constructor(private fb:FormBuilder, private route:Router){
    this.contactForm=this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      phone:[''],
      message:['',Validators.required]
    })
  }

  onBackButton(){
    this.route.navigate(['/gettingstarted'])
  }

  sendMessage(){
    if(this.contactForm.valid)
       this.message="Sorry, message cannot be sent. We do not have a backend service linked yet. Donations are welcome.";
    else
      this.message="Fill all the required fields";
  }
  

}
