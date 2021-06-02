import { Component } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { ShowService } from './show.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  
 
 usermodel=new User(" "," ", "naveen" ,"joshi",91,9741181361,"nav@gm.com","A","A","A"," "," "," "," ");
 alert:boolean=false;
  directors=["Martin","Quinton","Fincher","Nolan","Cameroon"]
constructor(private showservice: ShowService){}
token:any;

 onSubmit(){
  this.alert=true;
   this.showservice.register(this.usermodel).subscribe(
     data => console.log("Success ",data),
     error => console.log("Error",error)
   )
 }

 addDirec(value:any){
   console.log(value)
 }

}





  
