import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { task } from './task';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})


export class TodolistComponent {
  taskArray : task[]=[];
  buttonDisabled : boolean = false;
  editingIndex : number | null = null;
  taskInput:any

  onSubmit(form: NgForm) {
    if(form.valid){
      if (this.editingIndex !== null) {
        this.taskArray[this.editingIndex].task = form.controls['task'].value;
        this.editingIndex = null;
      } else {
        this.taskArray.push({ task: form.controls['task'].value, isCompleted: false });
      }
      form.reset();
    }     
  }
  edit(index:number){
    this.editingIndex = index
  }
  delete(index:number){
   this.taskArray.splice(index,1);    
  }
  
}
