import { Component, OnInit } from '@angular/core';

import { HelloWorldService } from '../../services';

@Component({
  selector: 'hello-world',
  templateUrl: 'hello-world.component.html',
  styleUrls: ['hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  text = '';

  constructor(private helloWorldService: HelloWorldService) {}

  ngOnInit() {
    this.text = this.helloWorldService.hello;
  }
}
