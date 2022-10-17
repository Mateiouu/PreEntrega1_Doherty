
    let nombre = prompt('Ingrese su nombre:')
    if(nombre == ''){
        while(nombre == ''){
            alert('Nombre invalido, intentelo de nuevo')
            nombre = prompt('Ingrese su nombre:')
    
    }
    alert(`Bienvenido ${nombre}! Esperamos que disfrute de nuestro servicio`)
    
    }   else{
        alert(`Bienvenido ${nombre}! Esperamos que disfrute de nuestro servicio`)
    
    }


let price = 0
const items= ['remera', 4000, 'pantalon', 8200, 'zapatillas', 22500, 'gorra', 2000, 'buzo', 10300, 'campera', 21500]
function add_cart(producto){
    let cantidad = parseInt(prompt(`Cuantos/as ${producto}s queres comprar?`))
 
    let pos = items.indexOf(producto)
    price = items[pos + 1]
        
    alert(`El precio final es de $${price * cantidad}`)
    let add = prompt(`Quieres agregar ${cantidad} ${producto}/s al carrito?`)
    if(add.toLowerCase() == 'si'){
        total = total + (price * cantidad)
    }
}





let total = 0

do {
    let opcion = 'si'
    let choice = prompt('Lista de productos: \n Remera \n Pantalon \n Zapatillas \n Gorra \n Buzo \n Campera \nQue producto desea comprar?')
    choice = choice.toLowerCase()
    if (choice == 'remera') {
        add_cart(choice)
        
    }
    else if (choice == 'pantalon') {
      
        add_cart(choice)
    }
    else if (choice == 'zapatillas') {
      
        add_cart(choice)
    }
    else if (choice == 'gorra') {
        
        add_cart(choice)
    }
    else if (choice == 'buzo') {
        
        add_cart(choice)
    }
    else if (choice == 'campera') {
       
        add_cart(choice)
    }else{
        
        alert('Su opcion no es valida, por favor intentelo de nuevo')
        opcion = 'no'
        
    }
    if (opcion == 'si'){
    seguir = prompt('Quieres seguir viendo productos?')
    }
    if (seguir == 'no'){
        alert('El total de los productos es de $' + total)
    }
    
    

}while((seguir.toLowerCase() == 'si') || (opcion == 'no'))
