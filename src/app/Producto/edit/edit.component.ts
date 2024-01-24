import { Component, OnInit } from '@angular/core';
import { Producto } from '../../Modelo/Producto';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  producto: Producto = new Producto();
  opcionesImagenes: string[] = ['lap1','lap2','lap3','lap4','lap5','lap6','lap7','lap8','lap9','lap10','lap11','lap12','lap13'];

  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit(): void {
    this.Editar();
  }
  Editar() {
    let id = localStorage.getItem('id');
    this.service.getProductoId(Number(id)).subscribe(
       data => { this.producto = data}
      )
  }
  Actualizar(producto: Producto) {
    this.service.updateProducto(producto).subscribe(
      data => {this.producto = data;
      alert('se actualizo con exito');
      this.router.navigate(["listar"]);
    });
  }
}
