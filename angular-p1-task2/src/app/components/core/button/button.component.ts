import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label: String;
  @Input() class: String;
  @Output() onClick = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  handleClick(event){
    this.onClick.emit(event)
  }

}
