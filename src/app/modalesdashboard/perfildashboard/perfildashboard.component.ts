import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfildashboard',
  templateUrl: './perfildashboard.component.html',
  styleUrls: ['./perfildashboard.component.css']
})
export class PerfildashboardComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({ 
  })
}

  ngOnInit(): void {
  }

}
