import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-saludoproyectosdashboard',
  templateUrl: './saludoproyectosdashboard.component.html',
  styleUrls: ['./saludoproyectosdashboard.component.css']
})
export class SaludoproyectosdashboardComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({
  })
}

  ngOnInit(): void {
  }

}
