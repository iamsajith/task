import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormModel } from './form.model';
import * as AOS from 'aos';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  Data:FormModel[] | any
  data:any= new FormModel("","","","") 

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }
  Register(){

  }

}
