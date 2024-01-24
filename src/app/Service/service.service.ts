import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Modelo/Producto';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //cualquier nombre ,yo puse http
  constructor(private http:HttpClient) { }
  Url="http://localhost:8080/productos";

getProductos(){
  return this.http.get<Producto[]>(this.Url);
}

getProductoId(id:number){
  return this.http.get<Producto>(this.Url+"/"+id);

}

createProducto(producto:Producto){
  return this.http.post<Producto>(this.Url,producto);
}

updateProducto(producto:Producto){
  return this.http.put<Producto>(this.Url+"/"+producto.idProducto,producto);
}

deleteProducto(producto:Producto){
return this.http.delete<Producto>(this.Url+"/"+producto.idProducto);
}

}
