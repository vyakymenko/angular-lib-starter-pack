import { Injectable } from '@angular/core';

@Injectable()
export class HelloWorldService {

  /**
   * Get Hello World!
   *
   * @name hello
   *
   * @returns {string}
   */
  get hello(): string {
    return `Hello World!`;
  }
}
