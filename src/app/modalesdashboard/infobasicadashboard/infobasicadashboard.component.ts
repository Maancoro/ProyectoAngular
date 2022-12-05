import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-infobasicadashboard',
  templateUrl: './infobasicadashboard.component.html',
  styleUrls: ['./infobasicadashboard.component.css']
})
export class InfobasicadashboardComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({ 
  })
}

  ngOnInit(): void {
  }

}
