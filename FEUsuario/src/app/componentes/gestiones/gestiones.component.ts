import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GestionesService } from 'src/app/Services/gestiones.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-gestiones',
  templateUrl: './gestiones.component.html',
  styleUrls: ['./gestiones.component.css']
})

export class GestionesComponent implements OnInit {
  user: {id:number , username:string , nombre: string, email: string, telefono: string}
  form: FormGroup;




  constructor(private fb: FormBuilder, private rutaActiva: ActivatedRoute, private _gestionesService: GestionesService,private router: Router,private toastr: ToastrService) { 
    this.form = this.fb.group(
      {
        userName:['', [Validators.required, Validators.maxLength(30), Validators.minLength(3)]],
        nombre:['', [Validators.required, Validators.maxLength(30), Validators.minLength(6)]],
        email:['', [Validators.required, Validators.maxLength(60), Validators.minLength(11), Validators.email]],
        telefono:['', [Validators.maxLength(30), Validators.minLength(11)]]
      }
    )
  }
  ngOnInit(): void {
    this.user={
     id: this.rutaActiva.snapshot.params.idUsuario,
     username: this.rutaActiva.snapshot.params.userName,
      nombre: this.rutaActiva.snapshot.params.nombre,
      email: this.rutaActiva.snapshot.params.email,
      telefono: this.rutaActiva.snapshot.params.telefono
    }
   
    if(this.user.id!=null){
      this.editarUsuario(this.user)
    };

  }
  
  agregarUsuario(){
    const usuario: any = {
      userName: this.form.get('userName')?.value,
      nombre: this.form.get('nombre')?.value,
      email: this.form.get('email')?.value,
      telefono: this.form.get('telefono')?.value
    }
    if(this.user.id==null){
      this._gestionesService.guardarUsuario(usuario).subscribe(data =>{
      this.toastr.success('El usuario se ha cargado');
      this.form.reset();
    }, error => {
      console.log(error);
    })
  }
  else{
    usuario.idUsuario= this.user.id;
    this._gestionesService.actualizarUsuario(this.user.id, usuario).subscribe(data =>{
      this.form.reset();
      this.user.id=null;
      this.toastr.info('El usuario se ha actualizado');
    },error =>{
      console.log(error);
    }
      )
  }
  }

  editarUsuario(usuario: any){
      this.form.patchValue({
      userName:usuario.username,
      nombre:usuario.nombre,
      email:usuario.email,
      telefono:usuario.telefono
    })
  }


}
