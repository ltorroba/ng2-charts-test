import { Component, NgModule, AfterViewInit } from '@angular/core'
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements AfterViewInit {
  private datasets = [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3]
    },
    {
      label: "# of Votes",
      data: [19, 3, 5, 2, 3,33]
    }
  ];

  private labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

  private options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  ngAfterViewInit() {
    let timer = Observable.timer(2000, 1000);

    timer.subscribe(() => {
      console.log('hi');
      this.datasets = [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3]
      }];
    });

  }
}
