import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-greenbutton',
  templateUrl: './greenbutton.component.html',
  styleUrls: ['./greenbutton.component.css']
})
export class GreenbuttonComponent implements OnInit {

  @Input() label?: string;

  @Input() link?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
