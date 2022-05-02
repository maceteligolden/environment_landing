import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-whiteborderbutton',
  templateUrl: './whiteborderbutton.component.html',
  styleUrls: ['./whiteborderbutton.component.css']
})
export class WhiteborderbuttonComponent implements OnInit {

  
  @Input() label?: string;

  @Input() link?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
