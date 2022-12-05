import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menudashboard',
  templateUrl: './menudashboard.component.html',
  styleUrls: ['./menudashboard.component.css']
})
export class MenudashboardComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group({
   })
  }

  ngOnInit(): void {
  }

}
