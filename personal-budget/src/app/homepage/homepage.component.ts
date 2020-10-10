import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import { DataService } from 'src/shared/data.service';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  myBudget: any;

  constructor(private dataService: DataService) { }
  public dataSource = {
    datasets: [
    {
      data: [],
      backgroundColor: [
          '#fffb87',
          '#ffa1e1',
          '#a3fff7',
          '#ffc66b',
          '#be9eff',
          '#aafaa0',
          '#ff4d4d',
          ]
        }
      ],
      labels: []
  };

    // constructor(private http: HttpClient) { }
    getBudget(): void {
      this.dataService.getBudget().subscribe(budget => {
      this.myBudget = budget;
      });
    }

    ngOnInit() {
      this.getBudget();
      for (var i = 0; i < this.myBudget.length; i++) {
        this.dataSource.datasets[0].data[i] = this.myBudget[i].budget;
        this.dataSource.labels[i] = this.myBudget[i].title;
        this.createChart();
        this.createD3Chart();
    }
  }

createChart() {
  const ctx = document.getElementById('myChart');
  const myPieChart = new Chart(ctx, {
      type: 'pie',
      data: this.dataSource
  });
}

createD3Chart() {
  const ctx = document.getElementById('donutChart');
  const myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: this.dataSource
});
}

}
