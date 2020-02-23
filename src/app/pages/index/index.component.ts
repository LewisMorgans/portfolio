import { Component, OnInit } from '@angular/core';
import { particlesConfig } from 'src/assets/particles';

declare let particlesJS: any; // Required to be properly interpreted by TypeScript.

@Component({
  selector: 'index-page',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', particlesConfig, function() {});
  }

}
