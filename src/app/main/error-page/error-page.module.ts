import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../common/module/shared.module";

import { ErrorPageRoutingModule } from "./error-page-routing.module";
import { ErrorPageComponent } from "./error-page.component";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ErrorPageRoutingModule,
  ],
  declarations: [
    ErrorPageComponent,
  ]
})
export class ErrorPageModule { }
