import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../common/module/shared.module";
import { HomeIndexComponent } from "./home-index.component";
import { HomeIndexRoutingModule } from "./home-index-routing.module";

@NgModule({
  imports: [
    CommonModule,
    HomeIndexRoutingModule,
    SharedModule,
  ],
  declarations: [
    HomeIndexComponent
  ]
})
export class HomeIndexModule { }
