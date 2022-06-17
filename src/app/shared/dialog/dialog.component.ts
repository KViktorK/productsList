import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogService } from './dialogService';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Output() delete: EventEmitter<any> = new EventEmitter()
  @Input() message: string;
  check:boolean = false
  
  constructor(
    private _dialogService:DialogService
  ) { }
  onToggle(){
    this.check = !this.check
  }
  onDelete(){
    this._dialogService.showDialog = !this._dialogService.showDialog
    this.delete.emit()
  }
  onCancel(){
    this._dialogService.showDialog = !this._dialogService.showDialog
  }
  ngOnInit() {
  }

}
