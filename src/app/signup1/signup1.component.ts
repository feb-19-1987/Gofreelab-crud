import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Detail } from '../Shared/detail.model';
import { DetailService } from '../Shared/detail.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.css']
})
export class Signup1Component implements OnInit {
  validationMessage:any={}
  public detail:any
  isEdit=false

detObj: any = new Detail()
  
  detData: Detail[] = []
  constructor(private detservice:DetailService,private fb:FormBuilder) {
    this.validationMessage.fname={
      required:"fullName required",
      minlength:"minimum of 2 charector",
      maxlength:"maximum of 12 charector"

    }
    this.validationMessage.lname={
      required:"LastName required",
      minlength:"minimum of 2 charector",
      maxlength:"maximum of 12 charector"

    }
    this.validationMessage.email={
      required:"E-mail is mandatory",
      email:"Enter correct format"

    }

    this.validationMessage.password={
      required:"Password required",
      minlength:"minimum of 2 charector",
      maxlength:"maximum of 12 charector"

    }

  }

  ngOnInit(): void {
    
  }
  signForm = this.fb.group({
    _id:[''],
    fname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
    lname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required],
    password1:['',Validators.required],
    position:['',Validators.required]
  })

  submit(){
   // this.submitted=true;
    if(!this.isEdit){    
    this.detObj.fname = this.signForm.value.fname
    this.detObj.lname = this.signForm.value.lname
    this.detObj.email = this.signForm.value.email
    this.detObj.password = this.signForm.value.password
    this.detObj.password1 = this.signForm.value.password1
    this.detObj.position = this.signForm.value.position

    this.detservice.postDetail(this.detObj).subscribe((res) => { alert('inserted')},(err) => { alert('not inserted') })
  
    }

  }
}
