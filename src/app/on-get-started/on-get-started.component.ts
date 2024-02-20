import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-on-get-started',
  templateUrl: './on-get-started.component.html',
  styleUrls: ['./on-get-started.component.css']
})
export class OnGetStartedComponent {

  constructor(private route:Router)
  {}

  onClickProjects(){
    this.route.navigate(['/gettingstarted/projects']);
  }

  onClickAbout(){
    this.route.navigate(['/gettingstarted/about']);
  }

  onClickContacts(){
    this.route.navigate(['/gettingstarted/contactform']);
  }

  onBackButton(){
    this.route.navigate([''])
  }

}
