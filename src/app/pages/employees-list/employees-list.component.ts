import { Component, OnInit } from '@angular/core';

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
  user: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(user:any) {
    if (window.confirm('Are sure you want to delete this User ?')) { 
      this.user.DeleteUser(user.$key) 
    }
  }
}
