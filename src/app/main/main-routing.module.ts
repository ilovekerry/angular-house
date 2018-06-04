import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {MainComponent } from "./main.component";
import {AuthGuardService} from "../common/service/auth-guard.service";


const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: "", redirectTo: "homeIndex", pathMatch: "full" },
      { path: "homeIndex", loadChildren: "./home-index/home-index.module#HomeIndexModule" },
      { path: "userList", loadChildren: "./user-list/user-list.module#UserListModule" },
      { path: "errorPage", loadChildren: "./error-page/error-page.module#ErrorPageModule" },
      { path: "testPage", loadChildren: "./test-page/test-page.module#TestPageModule"},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
