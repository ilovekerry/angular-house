import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full", // 只有在空路由的时候才跳转到登录页
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "main",
    loadChildren: "./main/main.module#MainModule",
  },
  {
    path: "**", // 回调路由必须放在最后
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
