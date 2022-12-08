import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

  name=""
  address=""
  mob=""
  doctor=""
  date=""

  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"name":this.name,"address":this.address,"mob":this.mob,"date":this.date,"doctor":this.doctor}
    console.log(data)
    this.api.addPatient(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status == "success") {

          alert("Successfully added")
  
          this.name=""
  
          this.address=""
  
          this.mob=""
  
          this.date=""
  
          this.doctor=""
  
        } else {
  
          alert("Something went wrong")
  
        }
      }
    )
  }


}
