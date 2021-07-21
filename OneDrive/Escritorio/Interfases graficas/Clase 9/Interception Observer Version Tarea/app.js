//https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API

// Que ocupamos para implementar interception observer
// 1 - La lista de objetos a observar 
// 2 - Opciones de configuracion
// 3 - La funcion callback que va a realizar lo que deseemos.
// 4 - Instanciar el API de IntersectionObserver
// 5 - Ejecutar la funcion observe y pasar como parametro la lista de objetos a observar.

const video = document.getElementById("video")
const options={
    //root: El elemento html que se a estar escuchan, por defecto va a ser el viewport de la pagina.
    //rootmargin:'50px '//, //Define en px o porcentajes el margen del antes o despues para que se ejecute la intercepcion.
    threshold:0 //Este es el porcentaje de vision del objeto al interceptar el root. Este invoca a la funcion callback.
} 

//Callback
//Es una funcion que se recibe como parametro

///entries es el parametro que recibe todos los elemento que el observer va a estar escuchando
function callback(entries, observer){
    console.log('se está llamando a la funcion callback')
    if(entries[0].isIntersecting){
        console.log('se está intersectando el video')
        video.play()
    }
    else{
        video.pause()
    }
}

const observer = new IntersectionObserver(callback,options)
observer.observe(video)

// Tarea 
// Replicar el ejemplo del API de intersection observer para implementar el concepto de lazy loading con imagenes.
// Implementen el rootmargin para que la imagen se carge 50px antes de mostrarse.
//const elementos = document.getElementsByClassName("Lazy");
//const options={
    //root: El elemento html que se a estar escuchan, por defecto va a ser el viewport de la pagina.
  //  rootmargin:'50px '//, //Define en px o porcentajes el margen del antes o despues para que se ejecute la intercepcion.
    //threshold:0 //Este es el porcentaje de vision del objeto al interceptar el root. Este invoca a la funcion callback.
//} 


/*Se llamada a las fotos por medio de una clase Que es la de definimos como lazy*/

document.addEventListener("DOMContentLoaded",function(){var e;if("IntersectionObserver"in window){entries=document.querySelectorAll(".lazy");
        var Element=new IntersectionObserver
    
        (function(entries,observer){entries.forEach(function(entries){if(entries.isIntersecting){
            var observer=entries.target;observer.src=observer.dataset.src,observer.classList.remove("lazy"),Element.unobserve(observer)}})});
            entries.forEach(function(entries){Element.observe(entries)})}else{var observer;function r(){
                observer&&clearTimeout(observer),observer=setTimeout(function(){
                    var Element=window.pageYOffset;entries.forEach(function(entries){
                        entries.offsetTop<window.innerHeight+Element&&
                        (entries.src=entriese.dataset.src,entriese.classList.remove("lazy"))})
                        ,50==entries.length&&(document.removeEventListener("scroll",r),
                        window.removeEventListener("resize",r),
                        window.removeEventListener("orientationChange",r))},0)}
                        entries=document.querySelectorAll(".lazy"),
        document.addEventListener("scroll",r),window.addEventListener("resize",r),
        window.addEventListener("orientationChange",r)}});
        