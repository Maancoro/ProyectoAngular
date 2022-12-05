import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footerdashboard',
  templateUrl: './footerdashboard.component.html',
  styleUrls: ['./footerdashboard.component.css']
})
export class FooterdashboardComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group({
    })
   }
   

  ngOnInit(): void {
  }

}
