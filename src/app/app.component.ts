import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  subtitles:string[] = ['Civilizations','Units','Buildings','Technology'];
  title = 'AGEIIOnePageAPP';

}
