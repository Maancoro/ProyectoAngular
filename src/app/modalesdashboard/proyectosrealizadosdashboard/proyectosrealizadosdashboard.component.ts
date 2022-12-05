import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proyectosrealizadosdashboard',
  templateUrl: './proyectosrealizadosdashboard.component.html',
  styleUrls: ['./proyectosrealizadosdashboard.component.css']
})
export class ProyectosrealizadosdashboardComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({ 
  })
}

  ngOnInit(): void {
  }

}
