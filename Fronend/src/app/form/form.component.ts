import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormModel } from './form.model';
import * as AOS from 'aos';
import { FormService } from '../form.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  data:any= new FormModel("","","","") 

  constructor(private form:FormService, private toastr:ToastrService) { }

  ngOnInit(): void {
    AOS.init();
  }
  Register(){
    this.form.add(this.data).subscribe((data)=>{
      console.log("Success")
      this.toastr.success("Success")
    })
  }

}
