import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Detail } from '../Shared/detail.model';
import { DetailService } from '../Shared/detail.service';

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.css']
})
export class Signup1Component implements OnInit {
signForm!:FormGroup
submitted=false;

detObj: any = new Detail()
  
  detData: Detail[] = []
  constructor(private detservice:DetailService) { }

  ngOnInit(): void {
    this.signForm=new FormGroup({
      'id':new FormControl(null,Validators.required),
      'fname':new FormControl(null,Validators.required),
      'lname':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,Validators.required),
      'position':new FormControl(null,Validators.required)

    })
  }

  submit(){
    this.submitted=true;
    if(this.signForm.valid){
      console.log(this.signForm.value)
      this.detObj.name = this.signForm.value.name
      this.detObj.position = this.signForm.value.position
      this.detObj.office = this.signForm.value.office
      this.detObj.salary = this.signForm.value.salary
      this.detservice.postDetail(this.detObj).subscribe((res) => {alert('inserted')},(err) => { alert('not inserted') }),
      this.signForm.reset()   
    }
      
    }
    
  

}
