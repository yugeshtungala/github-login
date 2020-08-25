import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user=null;
  userName:string;
  error=null

  constructor(private githubService:GithubService,private changeDetecter:ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  handleUser(){
    this.githubService.getUserDetails(this.userName).subscribe((user)=>{
      this.user=user;
      this.changeDetecter.detectChanges();
      this.error=null
    },
    (error)=>{this.user = null
    this.error= "user not found"
    })
  }

}
