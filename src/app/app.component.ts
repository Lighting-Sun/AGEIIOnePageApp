import { Component, OnInit } from '@angular/core';
import { Civilizations } from './civilizations.model';
import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  subtitles:string[] = ['Civilizations','Units','Buildings','Technology'];
  title = 'AGEIIOnePageAPP';

  constructor(){}

  ngOnInit(){}
}
