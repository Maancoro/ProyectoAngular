import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-skilldashboard',
  templateUrl: './skilldashboard.component.html',
  styleUrls: ['./skilldashboard.component.css']
})
export class SkilldashboardComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({
  })
}

  ngOnInit(): void {
  }

}
