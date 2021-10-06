import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
 listaDeUsuarios: any[] = [];
 form: FormGroup;


  constructor(private fb: FormBuilder,private _usuarioService: UsuarioService, private toastr: ToastrService) {
    this.form = this.fb.group(
      {
        userName:['', [Validators.required, Validators.maxLength(30), Validators.minLength(3)]],
        nombre:['', [Validators.required, Validators.maxLength(30), Validators.minLength(6)]],
        email:['', [Validators.required, Validators.maxLength(30), Validators.minLength(11), Validators.email]],
        telefono:['', [Validators.maxLength(30), Validators.minLength(11)]]
      }
    )
   }

 

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this._usuarioService.getListaUsuarios().subscribe(data => {
      console.log(data);
      this.listaDeUsuarios = data;
    }, error => {
      console.log(error);
    })
  }
  

  eliminarUsuario(id:number){
    this._usuarioService.deleteUsuario(id).subscribe(data =>{
      this.toastr.error('El usuario se ha eliminado');
      this.obtenerUsuarios();
    }, error => {
      console.log(error);
    }
    )
  }

  

}


