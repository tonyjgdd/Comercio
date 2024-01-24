export class Producto{
    idProducto:number=0;
    descripcion:String='';
    precioUnidad:number=0.0;
    stock!:number; //inicializaar campos asi !:
    estado:string='';
    imagen!:string;
    modelo!:string;
    fabricante!:string;
}