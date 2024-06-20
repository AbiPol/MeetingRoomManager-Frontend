import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    //RouterModule
  ],
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit{

  //rutaSrc: string = './../../../assets/images/'
  rutaSrc: string = './../../assets/images/'
  src: string = '';
  alt: string = '';
  header: string = '';
  subheader: string = '';
  tarjeta: string = '';

  disableNew: boolean = true;
  disableUpd: boolean = true;
  disableDel: boolean = true;
  disableRead: boolean = true;

  @Input() 
    item!: string; 

    permisosAux: string[] = [];
  
  constructor(
    private router: Router,
    private authService: AuthService
  ){}
  
  ngOnInit(): void {
    //console.log("ItemAux en tarjeta: ", this.item);

    this.permisosAux = this.authService.rol.filter(rolPer => {
      //console.log("RolPer: ", rolPer.split(":")[0]);
      return rolPer.split(":")[0] === this.item
    });

    //console.log("Permisos para el Rol: ", this.permisosAux);
    this.permisosAux.forEach(
      permiso => {
        //console.log("Pemiso: ", permiso.split(":")[1])
        switch(permiso.split(":")[1]){
          case 'CREATE': {
            this.disableNew = false
            break;
          }
          case 'UPDATE': {
            this.disableUpd = false
            break;
          }
          case 'DELETE': {
            this.disableDel = false
            break;
          }
          case 'READ': {
            this.disableRead = false
            break;
          }
        }
    });

    switch(this.item){
      case 'ROLE_BASIC': {
        //console.log("Estoy en Rol Basic")
        this.src = `${this.rutaSrc}Reservas.svg`;
        this.alt = 'Reservas';
        this.header = 'Reservas';
        this.subheader = 'Gestion de Reservas';
        this.tarjeta = 'RE';
        break;
      }
      case 'ROLE_USUARIO':{
        //console.log("Estoy en Rol Usuario");
        this.src = `${this.rutaSrc}Usuario.svg`;
        this.alt = 'Usuarios';
        this.header = 'Usuarios';
        this.subheader = 'Gestion de usuarios';
        this.tarjeta = 'US';

        break;
      }
      case 'ROLE_EQUIPO':{
        //console.log("Estoy en Rol Equipo");
        this.src = `${this.rutaSrc}Equipamiento.svg`;
        this.alt = 'Equipamiento';
        this.header = 'Equipamiento';
        this.subheader = 'Gestion de Equipamientos';
        this.tarjeta = 'EQ';

        break;
      }
      case 'ROLE_SALA':{
        //console.log("Estoy en Rol Sala");
        this.src = `${this.rutaSrc}Salas.svg`;
        this.alt = 'Salas';
        this.header = 'Salas';
        this.subheader = 'Gestion de Salas';
        this.tarjeta = 'SA';

        break;
      }
      case 'ROLE_OFICINA':{
        //console.log("Estoy en Rol Oficina");
        this.src = `${this.rutaSrc}Oficina.svg`;
        this.alt = 'Oficina';
        this.header = 'Oficinas';
        this.subheader = 'Gestion de Oficinas';
        this.tarjeta = 'OF';

        break;
      }
      /*default:{
        console.log("Otros casos");
        this.src = '';
        this.alt = '';
        this.header = '';
        this.subheader = '';
        this.tarjeta = '';

        break;
      }
      */
    }
  }

  gestAccion(accion: string, tarjeta:any){
    //console.log("Accion a arealizar: ", accion);
    //console.log("Evento que recibo: ", tarjeta);

    let url: string = '';

    switch(tarjeta){
      case 'EQ':
        //console.log("Entro por equipamiento en tarjeta");
        url = '/home/equipamiento';
        break;

      case 'US':
        url = `/home/gestusu/${accion}`;
        break;
      case 'SA':
        //console.log("Entro por salas en tarjeta");
        url = '/home/salas';
        break;

      case 'RE':
        break;
      case 'OF':
        break;
      default:
        break;
    }

    this.router.navigateByUrl(url,{state: {accion: accion}});
    
  }
}
