import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-redesdashboard',
  templateUrl: './redesdashboard.component.html',
  styleUrls: ['./redesdashboard.component.css']
})
export class RedesdashboardComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({ 
  })
}

  ngOnInit(): void {
  }

}
