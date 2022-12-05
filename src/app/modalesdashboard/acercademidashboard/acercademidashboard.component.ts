import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-acercademidashboard',
  templateUrl: './acercademidashboard.component.html',
  styleUrls: ['./acercademidashboard.component.css']
})
export class AcercademidashboardComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group({
      
   })
  } 
  ngOnInit(): void {
  }

}
