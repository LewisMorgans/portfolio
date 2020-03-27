import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';

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
    ['Jenkins', 85],
    ['Unit Testing', 85],
    ['Bootstrap', 90],
  ])
  constructor() { }

  ngOnInit(): void {
  }

  public chartDatasets: Array<any> = [
    {
      data: [
        100,
        100,
        100,
        100,
        100,
        95,
        95,
        95,
        90,
        85,
        85,
        85,
        80,
        70,
        70,
        70,
        60,
        0]
    }
  ];

  public chartLabels: Array<any> = [
    'HTML5',
    'CSS3',
    'ES6',
    'Angular 8',
    'REST API',
    'GIT',
    'TypeScript',
    'JavaScript',
    'Bootstrap',
    'OOP',
    'FP',
    'Jenkins',
    'Jasmine',
    'Node.js',
    'Express',
    'RXJS',
    'NGRX'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    colors: 'red',
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          color: "rgba(255,255,255,0.5)",
          zeroLineColor: "rgba(255,255,255,0.5)"
        }
      }],
    }
  }
}


