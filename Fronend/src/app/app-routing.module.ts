import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [{path:"add",component:FormComponent},{path:"",component:TableComponent},{path:"edit",component:UpdateComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
