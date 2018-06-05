import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../common/module/shared.module";
import { TestPageRoutingModule } from "./test-page-routing.module";
import { TestPageComponent } from "./test-page.component";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TestPageRoutingModule
  ],
  declarations: [TestPageComponent]
})
export class TestPageModule { }
