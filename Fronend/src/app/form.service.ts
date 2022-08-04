import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http:HttpClient) { }

  fetch(){
    return this.http.get("http://localhost:5000/fetch")
  }

  add(data:any){
    return this.http.post("http://localhost:5000/fetch",data)
  }

  update(data:any){
    return this.http.put("http://localhost:5000/fetch",data)
  }
  delete(id:any){
    return this.http.delete(`http://localhost:5000/fetch/`+id)
  }

}
