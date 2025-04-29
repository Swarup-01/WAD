import { AuthService } from './user-auth-app/src/app/auth.service';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private userData: any = null;

  register(user: any) {
    localStorage.setItem("user", JSON.stringify(user));
    this.userData = user;
  }

  login(email: string, password: string): boolean {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (storedUser.email === email && storedUser.password === password) {
      this.userData = storedUser;
      return true;
    }
    return false;
  }

  getUser() {
    return this.userData;
  }
}
