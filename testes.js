/*
==================================
COMO FUNCIONA COM JAVASCRIPT PURO
==================================
*/

// pegar ID
var id = document.getElementById('teste').innerHTML;

// pegar a classe
var classe = document.getElementsByClassName("teste");

// pegar elementos
var elemento = document.getElementsByTagName("div");

// pegar valores genericos
var generico_classe = document.querySelector(".teste");
var generico_id = document.querySelector("#teste");
var generico_tag = document.querySelector("div");


/*
==================================
COMO FUNCIONA COM JQUERY
==================================
*/
var item = $(".imagem");