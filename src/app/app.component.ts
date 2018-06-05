import { Component } from "@angular/core";
// translate
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "app";
  constructor( public translate: TranslateService) {
    translate.addLangs(["en", "zh"]);
    translate.setDefaultLang("zh");
    const browserLang = translate.getBrowserLang();
    console.log("lang", browserLang);
    // 这里配置语言
    translate.use("en");
  }
}
