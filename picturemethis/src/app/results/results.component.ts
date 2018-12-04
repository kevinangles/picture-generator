import { Component, OnInit } from '@angular/core';
import { GenerateService } from '../generate/generate.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent implements OnInit {

  path;

  constructor(private generateService: GenerateService) {
    // this.path = this.generateService.imagePath;
    this.path = './assets/result.png';
  }

  ngOnInit() {
  }

}
