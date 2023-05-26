import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user = { username: '', password: '', token:'' };

  constructor(private router: Router,private cookieService: CookieService) {}

  registerUser() {
    console.log("Login: "+this.user.username+"\nPass: "+this.user.password+"\nToken: "+this.user.token  )
    this.cookieService.set('user', JSON.stringify(this.user));
    this.router.navigateByUrl("")
  }
}
