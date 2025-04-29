import { RegisterComponent } from './user-auth-app/src/app/register/register.component';
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent {
  user = { name: "", email: "", password: "" };

  constructor(private auth: AuthService, private router: Router) {}

  onRegister() {
    this.auth.register(this.user);
    alert("Registration Successful!");
    this.router.navigate(["/login"]);
  }
}
