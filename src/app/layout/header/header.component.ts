import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email=null
  constructor(private authService:AuthService,private router:Router,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe((user)=>{
      this.email = user?.email
    })
  }
  async handleSignOut(){
       try{
         const res = await this.authService.singnOut()
         this.router.navigateByUrl('signin')
         this.toastrService.info('login again to continue');
         this.email=null

       }
       catch(error){
         this.toastrService.error('something is wrong')
       }
  }

}
