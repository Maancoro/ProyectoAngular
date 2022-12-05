import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-educaciondashboard',
  templateUrl: './educaciondashboard.component.html',
  styleUrls: ['./educaciondashboard.component.css']
})
export class EducaciondashboardComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({  
  })
}

  ngOnInit(): void {
  }

}
