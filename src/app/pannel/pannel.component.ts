import { Component, OnInit, Input } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-pannel',
  templateUrl: './pannel.component.html',
  styleUrls: ['./pannel.component.css']
})
export class PannelComponent implements OnInit {

  products = products
  @Input() subtitle;

  constructor() { }

  ngOnInit(): void {
  }

}
