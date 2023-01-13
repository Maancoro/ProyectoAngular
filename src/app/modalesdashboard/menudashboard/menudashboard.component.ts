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
      edu: ['', [Validators.required]],
      exp: ['', [Validators.required]],
      skill: ['', [Validators.required]],
      portfolio: ['', [Validators.required]],
   })
  }

  ngOnInit(): void {}
  get edu(){
    return this.form.get("edu");
   }
   get exp(){
    return this.form.get("exp");
   } 
   get skill(){
    return this.form.get("skill");
   } 
   get portfolio(){
    return this.form.get("portfolio");
   } 

   get EduValid(){
    return this.edu?.touched && !this.edu?.valid;
  }
  get ExpValid(){
    return this.exp?.touched && !this.exp?.valid;
  }
  get SkillValid(){
    return this.skill?.touched && !this.skill?.valid;
  }
  get PortfolioValid(){
    return this.portfolio?.touched && !this.portfolio?.valid;
  }

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
  
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
  
  }

}
