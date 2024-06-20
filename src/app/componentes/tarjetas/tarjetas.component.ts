import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaComponent } from '../tarjeta/tarjeta.component';
//import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

interface RolPermiso {
  rol: string;
  permisos: string;
}

@Component({
  selector: 'app-tarjetas',
  standalone: true,
  imports: [
    CommonModule,
    TarjetaComponent
  ],
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export default class TarjetasComponent implements OnInit{

  itemsRoles: string [] = []
  constructor(
    private authService: AuthService
  ){}

  ngOnInit(): void {
    
    this.authService.rol.forEach(
      rolPer =>{
        if(!this.itemsRoles.includes(rolPer.split(":")[0])) {
          this.itemsRoles.push(rolPer.split(":")[0]);
        } 
      });
  }
}
