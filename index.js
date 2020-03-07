//               0, 1, 2, 3, 4, 5, 6, 7
var listData = [ 2, 3, 5, 5, 9, 3, 5, 7 ];
console.log(listData[4]);
console.log('ver longitud',listData.length);
// index c = c + 1      7             1

function MenorValor(){
    var valuemin = listData.reduce( (a,b) => Math.min(a, b) )
    console.log('valor minimo',valuemin );
}

function maximoValor(){
    var maximo = Math.max(...listData)
    console.log('valor maximo', maximo);

}

var factura = {
    numero: 201,
    cliente: 'transportes srl',
    divisa:'sol',  
    subtotal: 350.25,
    igv: 75.55,
    total: 78
    }

var numeroFactura =  factura.numero;
// var totalFactura  = factura.total();

console.log('la factura : '  + numeroFactura +' tiene un importe de :'  + factura.total);


var nombres =  ["juan","jose","luis","carlos"];

function addElement () {
    
    var name = document.getElementById("nombre").value;
    // console.log(name);
    alert('el nombre es' + name);
    nombres.push(name);
    console.log(nombres);
}
