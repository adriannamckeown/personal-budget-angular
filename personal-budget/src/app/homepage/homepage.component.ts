import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

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

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
      this.http.get('http://localhost:3000/budget')
      .subscribe((res: any) => {
        for (var i = 0; i < res.myBudget.length; i++) {
          this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
          this.dataSource.labels[i] = res.myBudget[i].title;
          this.createChart();
          // this.createD3();
      }
    });
  }

createChart() {
  // const ctx = document.getElementById('myChart').getContext('2d');
  const ctx = document.getElementById('myChart');
  const myPieChart = new Chart(ctx, {
      type: 'pie',
      data: this.dataSource
  });
}

}
