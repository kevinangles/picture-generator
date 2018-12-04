import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { GenerateService } from './generate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.sass']
})
export class GenerateComponent implements OnInit {
  pictureForm: FormGroup;

  styles = ['Style 0', 'Style 1', 'Style 2', 'Style 3', 'Style 4'];
  fonts = ['FreeMonoBold.ttf', 'Font 1', 'Font 2', 'Font 3', 'Font 4'];
  sizes = ['Small', 'Medium', 'Large'];
  
  constructor(private fb: FormBuilder, private generateService: GenerateService, private router: Router) {
  }

  post() {
    this.pictureForm.value.picture = this.pictureForm.value.picture.split(/(\\|\/)/g).pop();
    this.generateService.generatePicture(this.pictureForm.value);
  }

  ngOnInit() {
    this.pictureForm = this.fb.group({
      'picture': new FormControl(''),
      'style': new FormControl(''),
      'message': new FormControl(''),
      'font': new FormControl(''),
      'size': new FormControl('')
    });
  }

  
}
