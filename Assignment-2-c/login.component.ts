import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent {
  email = "";
  password = "";

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    if (this.auth.login(this.email, this.password)) {
      alert("Login successful");
      this.router.navigate(["/profile"]);
    } else {
      alert("Invalid credentials");
    }
  }
}
