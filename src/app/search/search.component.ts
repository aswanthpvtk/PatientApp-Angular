import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  pcode=""
  searchData:any=""
  constructor(private api:ApiService){}
  readValues=()=>
  {
    let data:any={"pcode":this.pcode}
    console.log(data)
    this.api.searchData(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length == 0){
          alert("Invalid Employee Code")
        }else{
          this.searchData=response
        }
      }
    )
  }

  deleteClick=(id:any)=>
  {
    let data:any={"id":id}
    this.api.deleteData(data).subscribe(
      (generated:any)=>
      {
        console.log(generated)

      }
    )
  }

}
