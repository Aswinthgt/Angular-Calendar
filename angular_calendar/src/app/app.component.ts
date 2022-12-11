import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  preday:any;
  day: any;
  nextday:any;
  month: any;

  weeks :string[]=[
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ]

  months: string[] =
    ["January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"]

  date: any = new Date();



  ngOnInit(): void {

    this.date.setDate(1)
    const arrangedaypre = this.date.getDay();


    const arrangedaynext = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();

    const arrnext = 7 - arrangedaynext -1;
   this.preday =[];
    this.day = [];
    this.nextday = [];

    this.month = this.months[this.date.getMonth()];


    const lastday = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();

    const predays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();


    for (let x = arrangedaypre; x > 0; x--) {
      this.preday.push(predays - x +1);
    }




    for (let i = 1; i <= lastday; i++) {
      this.day.push(i);
    }

    for(let j= 1; j <= arrnext; j++) {
      this.nextday.push(j);
    }

  }

  nextChange() {

    this.date.setMonth(this.date.getMonth() + 1);
    this.ngOnInit();


  }

  preChange() {
    this.date.setMonth(this.date.getMonth() - 1);
    this.ngOnInit();
  }

}
