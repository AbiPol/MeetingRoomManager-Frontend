import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from "primeng/floatlabel"
import { MessagesModule } from 'primeng/messages';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-gest-usuario',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    PasswordModule,
    ReactiveFormsModule,
    FloatLabelModule,
    MessagesModule
  ],
  templateUrl: './gest-usuario.component.html',
  styleUrls: ['./gest-usuario.component.css']
})
export default class GestUsuarioComponent {

  formUser!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ){
    console.log("Accion recibida: " , this.route.snapshot.paramMap.get('accion'));
    this.inicializarForm();
  }

  inicializarForm(){
    //console.log("recuaerda: ", localStorage.getItem('RcdTkMttRmMng'))
    this.formUser = this.fb.group({
      username: ["", Validators.required],
      password: ["",[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]]
      //recuerda: [localStorage.getItem('RcdTkMttRmMng')?true:false, Validators.required]
    });
  }

  envioInfo(){
    console.log("enviando informacion: ", this.formUser.value);
  }

  volver(){
    //console.log("Volviendo al home");
    this.router.navigateByUrl("home");
  }
}
