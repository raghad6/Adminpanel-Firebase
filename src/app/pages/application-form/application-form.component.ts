import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  
  popup = false
  name = 'Angular'; 

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
