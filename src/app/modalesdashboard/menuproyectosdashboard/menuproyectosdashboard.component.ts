import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menuproyectosdashboard',
  templateUrl: './menuproyectosdashboard.component.html',
  styleUrls: ['./menuproyectosdashboard.component.css']
})
export class MenuproyectosdashboardComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group({
   })
  }

  ngOnInit(): void {
  }

}
