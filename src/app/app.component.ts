import { Component } from "@angular/core";
import {
  faMobileAlt,
  faEnvelope,
  faMapMarked
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "monamo-under-construction";
  faMobile = faMobileAlt;
  faEnvelope = faEnvelope;
  faMapMarked = faMapMarked;
}
