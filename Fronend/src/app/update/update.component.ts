import { Component, OnInit } from '@angular/core';
import { FormModel } from '../form/form.model';
import * as AOS from 'aos';
import { FormService } from '../form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  // Data:FormModel[] | any
  data:any= new FormModel("","","","") 

  constructor(private form:FormService,private router:Router) { }

  ngOnInit(): void {
    AOS.init();
    this.form.updatefetch(localStorage.getItem("id")).subscribe((data)=>{
      this.data = JSON.parse(JSON.stringify(data))
    })
  }
  Update(){
    this.form.add(this.data).subscribe((data)=>{
      console.log("Success")
      this.router.navigate(["/"])


    })

  }

}
