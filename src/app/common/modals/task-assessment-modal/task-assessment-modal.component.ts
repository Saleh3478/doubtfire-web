import { Component, OnInit, Inject, Input, ViewChild } from '@angular/core';
import { alertService } from 'src/app/ajs-upgraded-providers';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Subject} from 'rxjs';

@Component({
  selector: 'task-assessment-modal',
  templateUrl: './task-assessment-modal.component.html',
  styleUrls: ['./task-assessment-modal.component.scss'],
})
export class TaskAssessmentModalComponent implements OnInit {
  @Input() task: any;
  noDataFlag: boolean;
  refreshTrigger: Subject<boolean> = new Subject();

  constructor(
    public dialogRef: MatDialogRef<TaskAssessmentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    @Inject(alertService) private alerts: any, ) { }

  ngOnInit() {
    this.task = this.data;
  }

  setNoDataFlag($event) {
    this.noDataFlag = $event;
  }

  resfreshChildComponent(){
    this.refreshTrigger.next(true);
  }
}
