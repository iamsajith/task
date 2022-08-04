import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
import { FormModel } from '../form/form.model';
import * as AOS from 'aos';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  Data:FormModel[] | any


  constructor(private form:FormService,private router:Router) { }

  ngOnInit(): void {
    AOS.init();
    this.form.fetch().subscribe((data)=>{
      this.Data = JSON.parse(JSON.stringify(data))
    })


  }
  delete(id:any){
    this.form.delete(id).subscribe((data)=>{
console.log("deleted")
window.location.reload()
    })

  }
  update(id:any){
    localStorage.setItem("id",id)
    this.router.navigate(["/edit"])

  }

}
