import { Component } from '@angular/core';
import { User } from './user';
import { ShowService } from './show.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  
 
 usermodel=new User(" "," ", "naveen" ,"joshi",91,9741181361,"nav@gm.com","A","A","A"," "," "," "," ");
 alert:boolean=false;

constructor(private showservice: ShowService){}

 onSubmit(){
  this.alert=true;
   this.showservice.register(this.usermodel).subscribe(
     data => console.log("Success ",data),
     error => console.log("Error",error)
   )
 }


}





  
