import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-component',
  templateUrl: './skills-component.component.html',
  styleUrls: ['./skills-component.component.scss']
})
export class SkillsComponentComponent implements OnInit {

  public skillsMap = new Map<String, number>([
    ['HTML5', 100],
    ['CSS3', 100],
    ['JavaScript', 85],
    ['TypeScript', 90],
    ['ES6', 100],
    ['Node.js', 75],
    ['GIT', 95],
    ['Jasmine', 80],
    ['Angular 8', 100],
    ['Express', 75],
    ['REST API', 100],
    ['OOP', 85],
    ['FP', 85],
    ['RXJS', 70],
    ['NGRX', 60],
    ['XML', 100],
    ['JSON', 100],
    ['Jenkins', 85],
    ['Unit Testing', 85],
    ['Bootstrap', 90],
  ])
  constructor() { }

  ngOnInit(): void {
  }

}

