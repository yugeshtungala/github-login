import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit,OnChanges {
 @Input() repoUrl:string
 repos:[]
  constructor(private githubService:GithubService , private changeDetectRef:ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    if(this.repoUrl){
      this.githubService.getRepos(this.repoUrl).subscribe((data:[])=>{this.repos= data
      this.changeDetectRef.detectChanges()
      },
      (error)=>console.log(error))
    }
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }

}
