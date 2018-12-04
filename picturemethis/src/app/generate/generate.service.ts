import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GenerateService {
  path = 'http://localhost:3000';

  imagePath;

  constructor(private http: HttpClient) { }

  generatePicture(data) {
    this.http.post<any>(this.path + '/generate', data).subscribe(res => {
      this.imagePath = res;
      
    });
  }
}