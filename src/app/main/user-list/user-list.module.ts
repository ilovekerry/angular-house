import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../common/module/shared.module";
import { UserListComponent } from "./user-list.component";
import { UserListRoutingModule } from "./user-list-routing.module";

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    UserListRoutingModule,
  ],
  declarations: [
    UserListComponent,
  ]
})
export class UserListModule { }
