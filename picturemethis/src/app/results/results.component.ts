import { Component, OnInit } from '@angular/core';
import { GenerateService } from '../generate/generate.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent implements OnInit {

  path;
  message = 'Loading....';

  constructor(private generateService: GenerateService) {
    this.path = '';
    setTimeout(() => {
      this.path = './assets/result.png';
      this.message = '';
    }, 3000);    
  }

  ngOnInit() {
  }

}
