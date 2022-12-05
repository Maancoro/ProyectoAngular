import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulariocontactodashboard',
  templateUrl: './formulariocontactodashboard.component.html',
  styleUrls: ['./formulariocontactodashboard.component.css']
})
export class FormulariocontactodashboardComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({
  })
}

  ngOnInit(): void {
  }

}
