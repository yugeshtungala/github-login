import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService,private toastrService:ToastrService) { }


  ngOnInit(): void {
  }
  onSubmit(f:NgForm){
    const {email,password} = f.form.value
     this.authService.signUp(email,password).then(
       (res)=>{this.router.navigateByUrl('/'),
       this.toastrService.success('signUp success')
      
      }
     ).catch((error)=>{
       console.log(error.message);
       this.toastrService.error('sign up failed')
     })
  }

}
