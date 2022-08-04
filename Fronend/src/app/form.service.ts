import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http:HttpClient) { }

  fetch(){
    return this.http.get("http://localhost:5000/users")
  }

  add(data:any){
    return this.http.post("http://localhost:5000/user",data)
  }

  update(data:any){
    console.log(data)
    return this.http.put("http://localhost:5000/user/"+data._id,data)
  }
  delete(id:any){
    return this.http.delete(`http://localhost:5000/user/`+id)
  }
  updatefetch(id:any){
    return this.http.get(`http://localhost:5000/data/`+id)

  }

}
