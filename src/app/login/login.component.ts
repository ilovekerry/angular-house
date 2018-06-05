import { Component, OnInit } from "@angular/core";
import { LoginService } from "./login.service";
import { Router } from "@angular/router";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

  message: string;

  constructor(public loginService: LoginService, public router: Router) {
    this.setMessage();

  }
  ngOnInit() {
    this.loginService.isLoggedIn = sessionStorage.getItem("isLoggedIn") ? true : false;
    console.log(this.loginService.isLoggedIn);
    this.setMessage();
  }
  setMessage() {
    this.message = "Logged " + (this.loginService.isLoggedIn ? "in" : "out");
  }

  login() {
    this.message = "Trying to log in ...";

    this.loginService.login().subscribe(() => {
      this.setMessage();
      if (this.loginService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.loginService.redirectUrl ? this.loginService.redirectUrl : "/main/homeIndex";

        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }

  logout() {
    this.loginService.logout();
    this.setMessage();
  }
}
