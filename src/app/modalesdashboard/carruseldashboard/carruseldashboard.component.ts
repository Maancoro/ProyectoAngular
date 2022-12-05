import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-carruseldashboard',
  templateUrl: './carruseldashboard.component.html',
  styleUrls: ['./carruseldashboard.component.css']
})
export class CarruseldashboardComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group({
   })
  }

  ngOnInit(): void {
  }

}
