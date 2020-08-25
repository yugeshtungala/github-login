import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService,private toastrService:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm){
    const {email,password} = f.form.value
     this.authService.signIn(email,password).then(
       (res)=>{this.router.navigateByUrl('/'),
       this.toastrService.success('signIn success')
      
      }
     ).catch((error)=>{
       console.log(error.message);
       this.toastrService.error('signIn failed')
     })
  }

}
