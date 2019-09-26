import { Component, OnInit } from '@angular/core';
import { IssueService } from 'src/app/issue.service';
import { Issue } from 'src/app/models/issue.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  issueList: Issue[] = [];

  constructor(private issueService: IssueService) { }

  ngOnInit() {
    this.issueService.getIssues().subscribe((response) => {
      this.issueList = response;
    });
  }

}
