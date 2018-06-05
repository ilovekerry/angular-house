import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { tap, delay} from "rxjs/operators";

@Injectable()
export class LoginService {
  redirectUrl: string;
  isLoggedIn = false;
  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => {
        sessionStorage.setItem("isLoggedIn", "true");
        this.isLoggedIn = true;
      })
    );
  }
  logout(): void {
    sessionStorage.removeItem("isLoggedIn");
    this.isLoggedIn = false;
  }
}
