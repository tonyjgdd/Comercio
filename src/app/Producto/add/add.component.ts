import { Component,OnInit } from '@angular/core';
import { Producto } from '../../Modelo/Producto';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit{
  producto:Producto=new Producto();
  opcionesImagenes: string[] = ['lap1','lap2','lap3','lap4','lap5','lap6','lap7','lap8','lap9','lap10','lap11','lap12','lap13'];

  constructor(private router:Router,private service:ServiceService){}
  ngOnInit(): void {
      
  }

  Guardar(){
    this.service.createProducto(this.producto).subscribe(
      data=>{
        alert('se agrego producto con exito...');
        this.router.navigate(["listar"]);
      }
    )
  
  }
}
