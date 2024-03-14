function escribir() {
    var images = [
        "img/f1.jpg",
        "img/f2.jpg",
        "img/f3.jpg",
        "img/f4.jpg",
        "img/f5.jpg",
        "img/f6.jpg",
        "img/f7.jpg",
        "img/f8.jpg",
        "img/f9.jpg",
        "img/f10.jpg"
    ];
    var texto = document.getElementById("texto");
    texto.innerHTML = '';
    var contenedor = document.createElement('div'); 
    contenedor.id = 'contenedor-imagenes'; 
    images.forEach(function(imageUrl) {
        var img = document.createElement('img');
        img.src = imageUrl;
        img.alt = '';
        contenedor.appendChild(img); 
    });
    texto.appendChild(contenedor); 
}
escribir();

function contar(){
    a=0;
    b=1;
    for(var i=0; i<=10000; i++){
        console.log(b);
        b=b+a;
        a++;
    }
}
contar();