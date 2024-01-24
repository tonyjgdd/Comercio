import { Component,OnInit } from '@angular/core';
import { Producto } from '../../Modelo/Producto';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';



@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit{
  productos!:Producto[];  
  

  cant_pag:number=5;
  pag_act:number=1;
  nombreFiltro: string = '';
  fabricanteSeleccionado: string | undefined;
  productosOriginales: any[] = []; // Lista original de productos
  productosFiltrados: any[] = []; // Lista de productos después de aplicar el filtro
  


  constructor(private service:ServiceService,private router:Router){}

  ngOnInit(): void {
      this.service.getProductos().subscribe(
        data=>{this.productos=data;
        this.productosOriginales=data;
        this.productosFiltrados=data;
      }
      )
  }
  
  
  filtrarProductos() {
    this.productosFiltrados = this.productosOriginales.filter(producto =>
      producto.descripcion.toLowerCase().includes(this.nombreFiltro.toLowerCase()) 
      
    );  console.log('Productos filtrados:', this.productosFiltrados);

  }
  limpiarFiltros() {
    this.nombreFiltro = '';
    this.productosFiltrados = this.productosOriginales.slice(); // Utilizando slice para hacer una copia
  }
  

  onFabricanteSeleccionado(): void {
    console.log('Producto seleccionado:');
    this.fabricanteSeleccionado = undefined;
  }

  Editar(Producto:Producto){
    localStorage.setItem("id",Producto.idProducto.toString());
    this.router.navigate(["edit"]);
  }

  Delete(Producto:Producto){
this.service.deleteProducto(Producto).subscribe(
  data=>{this.productos=this.productos.filter(p=>p!=Producto)
    alert('producto eliminado');
  
  }

)
  }

}
