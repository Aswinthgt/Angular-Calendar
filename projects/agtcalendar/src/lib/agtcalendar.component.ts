import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'agt-calendar',
  template: `
   <div class="setwidth">
  <div class="inline">
    <button mat-icon-button (click)="preChange()">
      <mat-icon>arrow_back_ios</mat-icon>
    </button>

    <h1>{{month}} {{year}}</h1>

    <button mat-icon-button (click)="nextChange()">
      <mat-icon>arrow_forward_ios</mat-icon>
    </button>
  </div>

  <div class="days">

    <mat-grid-list cols="7" rowHeight="50px">
      <mat-grid-tile *ngFor="let week of weeks">{{week}}</mat-grid-tile>
      <mat-grid-tile class="blur" *ngFor="let pre of preday">{{pre}}</mat-grid-tile>
      <mat-grid-tile class="dayshover" *ngFor="let days of day"
        [ngClass]="{'today': days === today }">{{days}}</mat-grid-tile>
      <mat-grid-tile class="blur" *ngFor="let next of nextday">{{next}}</mat-grid-tile>
    </mat-grid-list>

  </div>

</div>
  `,
  styles: [
`

.setwidth {
  margin: 30px;
  width: 30%;
  margin-top: 5%;
  border: 2px solid rgb(210, 43, 173);
  border-radius: 0.4rem;
  padding: 20px;


}

.inline {
  display: flex;
  justify-content: space-evenly;

}

.dayshover:hover {

  border: 1px solid rgb(210, 43, 173);
  border-radius: 0.4rem;
}

.today{
  background-color: rgb(210, 43, 173);
  border-radius: 0.4rem;
}

/* .days {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
} */

/* .days mat-grid-tile {
  font-size: 1.4rem;
  width: calc(40.2rem / 7);
  display: flex;
  justify-content: center;
  align-items: center;

} */


.blur {
  opacity: 50%;
}


@media only screen and (max-width: 600px) {
  .setwidth {
    width: 80% !important;
  }
}

@media only screen and (max-width: 470px) {
  .setwidth {
    width: 70% !important;
  }
}



`




  ]
})
export class AgtcalendarComponent implements OnInit {


  preday: any;
  day: any;
  nextday: any;
  month: any;
  year: any;
  today!: string | number;
  weeks: string[] = [
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
    this.calRender();
  }

  calRender() {
    this.date.setDate(1)
    const arrangedaypre = this.date.getDay();
    const arrangedaynext = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();

    const arrnext = 7 - arrangedaynext - 1;
    this.preday = [];
    this.day = [];
    this.nextday = [];

    this.month = this.months[this.date.getMonth()];
    this.year = this.date.getFullYear();


    const lastday = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();

    const predays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();


    for (let x = arrangedaypre; x > 0; x--) {
      this.preday.push(predays - x + 1);
    }

    for (let i = 1; i <= lastday; i++) {
      this.day.push(i);
    }
    this.today = new Date().getMonth() === this.date.getMonth() && new Date().getFullYear() ===
      this.date.getFullYear() ? new Date().getDate() : "";

    for (let j = 1; j <= arrnext; j++) {
      this.nextday.push(j);
    }
  }






  nextChange() {

    if (this.month === "December") {
      this.date.setFullYear(this.date.getFullYear() + 1, 0);
      this.calRender();
    } else {
      this.date.setMonth(this.date.getMonth() + 1);
      this.calRender();
    }

  }

  preChange() {

    if (this.month === "January") {
      this.date.setFullYear(this.date.getFullYear() - 1, 11);
      this.calRender();
    } else {
      this.date.setMonth(this.date.getMonth() - 1);
      this.calRender();
    }
  }

}






