import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experienciadashboard',
  templateUrl: './experienciadashboard.component.html',
  styleUrls: ['./experienciadashboard.component.css']
})
export class ExperienciadashboardComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group({
   })
  }

  ngOnInit(): void {
  }

}
