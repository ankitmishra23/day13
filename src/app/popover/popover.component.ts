import { Component, OnInit } from '@angular/core';
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css'],
  providers: [NgbPopoverConfig]
})
export class PopoverComponent implements OnInit {

  constructor(config: NgbPopoverConfig) { 
    config.placement = 'right';
    config.triggers = 'hover';
  }

  ngOnInit(): void {
  }

}
