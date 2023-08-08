import { Component, OnInit } from '@angular/core';
import { AdviceService } from './advice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  adviceId: number | undefined;
  adviceText: string = '';


    constructor(private adviceService: AdviceService) {}

    ngOnInit() {
      this.getRandomAdvice();
    }

    getRandomAdvice() {
      this.adviceService.getRandomAdvice().subscribe(
        (response: any) => {
          this.adviceId = response.slip.id;
          this.adviceText = response.slip.advice;
        },
        (error: any) => {
          console.error('Error fetching advice:', error);
        }
      );
    }
  }
