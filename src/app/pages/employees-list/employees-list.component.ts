import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
// import { SmartTableData } from 'ng2-smart-table';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  public contacts = [  {
    name: "Raghad AbuSharar",
    Date: "13.2.2022"
  }, {
    name: "Raghad AbuSharar",
    Date: "13.2.2022"
  }, {
    name: "Raghad AbuSharar",
    Date: "13.2.2022"
  }, {
    name: "Raghad AbuSharar",
    Date: "13.2.2022"
  }, {
    name: "Raghad AbuSharar",
    Date: "13.2.2022"
  }, {
    name: "Raghad AbuSharar",
    Date: "13.2.2022"
  }, {
    name: "Raghad AbuSharar",
    Date: "13.2.2022"
  }, {
    name: "Raghad AbuSharar",
    Date: "13.2.2022"
  }];
  
  constructor() { }

  ngOnInit(): void {
  }
}
