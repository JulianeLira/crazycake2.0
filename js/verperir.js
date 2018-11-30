
//classe onde está armazenada os itens

class vermaior{
	constructor(title,foto,legenda,preco){
		this.title = title;
		this.foto = foto;
		this.legenda = legenda;
	}
}
//itens armazenados na classe
var cup1 = new vermaior("CupCake Flores","ck/cup1.jpg","Massa de Baunilha, Cobertura de Morango, Recheio de Creme e Enfeites de Flores");
var cup2 = new vermaior("CupCake ChocoMenta","ck/cup2.jpg","Massa de Chocolate, Cobertura de Menta e Recheio de Chocolate");
var cup3 = new vermaior("CupCake RedCream","ck/cup3.jpg","Massa de Baunilha, Cobertura de Morango e Creme e Recheio de Creme");
var cup4 = new vermaior("CupCake BlueLove","ck/cup4.jpg","Massa de Chocolate, Cobertura de Chantilly, Recheio de Chocolate e Enfeites de Coração");
var cup5 = new vermaior("CupCake GreenLove","ck/cup5.jpg","Massa de Chocolate, Cobertura de Creme cor Verde e Recheio de Chocolate");
var cup6 = new vermaior("CupCake RomanticCream","ck/cup6.jpg","Massa de Chocolate, Cobertura de Creme, Recheio de Chocolate e Enfeites de Coração");
var cup7 = new vermaior("CupCake Red Fruits","ck/cup7.jpg","Massa de Chocolate, Cobertura de Creme (Frutas Vermelhas), Recheio de Chocolate e Enfeite de Framboesa");
var cup8 = new vermaior("CupCake ChocoGreen","ck/cup8.jpg","Massa de Chocolate, Cobertura de Menta e Recheio de Chocolate");
var cup9 = new vermaior("CupCake Rose","ck/cup9.jpg","Massa de Chocolate, Cobertura de Creme (morango) em Forma de uma Flor e Recheio de Chocolate");
var cup10 = new vermaior("CupCake IceCream","ck/cup10.jpg","Massa de Baunilha, Cobertura de Creme e Chocolate, Recheio de Creme de Morango e Enfeite de Cereja");
//variavel para colocar as classes, ou seja, os itens, dentro de um vetor

var sla = [];

//mandando as classes(itens) para o vetor "sla"

sla.push(cup1, cup2, cup3, cup4, cup5, cup6, cup7, cup8, cup9,
		cup10);


//FOR que cria os cards de cada classe(item)


for(var i = 0; i < sla.length; i++){

	var divs = document.createElement("div"); //cria uma div
	divs.setAttribute("class", "cards"); //atribui uma class(HTML)
	divs.setAttribute("id", "card"); //atribui um ID


	var as = document.createElement("a"); //cria um link a
	as.setAttribute("id", "clickimg"); //atribui um ID

	as.setAttribute("date-name","bolin"); //
	as.setAttribute("onclick","abastece("+i+")"); //atribui um ONCLICK para a function ABASTECE
	as.setAttribute("data-name","bolin");


	var fots = document.createElement("img"); //cria um img
	fots.setAttribute("id", "foto"); //atribui um ID
	fots.src = sla[i].foto; //no img, com a tag SRC é pega as imagens contida no "sla"

	var hs = document.createElement("h3"); //cria um h3
	hs.setAttribute("id", "cknome"); //atribui um ID
	hs.innerHTML = sla[i].title; //escreve no h3 o titulo contido no "sla"

	var leg = document.createElement("legend"); //cria uma legenda
	leg.setAttribute("id", "desc"); //atribui um ID
	leg.innerHTML = sla[i].legenda; //escreve na legenda a legenda contida no "sla"

	as.appendChild(fots); //adiciona o img dentro link(a)
	divs.appendChild(as); //adiciona o link(a) dentro da div
	divs.appendChild(hs); //adiciona o h3 dentro da div
	divs.appendChild(leg); //adiciona a lengenda dentro da div
    document.querySelector("#imgis").appendChild(divs); //adiciona a div dentro do #imgis

}



class bolos{
	constructor(title,foto,legenda,preco){
		this.title = title;
		this.foto = foto;
		this.legenda = legenda;
	}
}
//itens armazenados na classe
var bolo1 = new bolos("Bolo de Doce de Leite","bolo/bolo1.png","Massa de Baunilha, Cobertura de Morango, Recheio de Creme e Enfeites de Flores");
var bolo2 = new bolos("Bolo de Churros","bolo/bolo2.png","Massa de Chocolate, Cobertura de Menta e Recheio de Chocolate");
var bolo3 = new bolos("CupCake RedCream","bolo/bolo3.png","Massa de Baunilha, Cobertura de Morango e Creme e Recheio de Creme");
var bolo4 = new bolos("CupCake BlueLove","bolo/bolo4.png","Massa de Chocolate, Cobertura de Chantilly, Recheio de Chocolate e Enfeites de Coração");
var bolo5 = new bolos("CupCake GreenLove","bolo/bolo5.jpg","Massa de Chocolate, Cobertura de Creme cor Verde e Recheio de Chocolate");
var bolo6 = new bolos("CupCake RomanticCream","bolo/bolo6.png","Massa de Chocolate, Cobertura de Creme, Recheio de Chocolate e Enfeites de Coração");
var bolo7 = new bolos("CupCake Red Fruits","bolo/bolo7.png","Massa de Chocolate, Cobertura de Creme (Frutas Vermelhas), Recheio de Chocolate e Enfeite de Framboesa");
var bolo8 = new bolos("CupCake ChocoGreen","bolo/bolo8.png","Massa de Chocolate, Cobertura de Menta e Recheio de Chocolate");
var bolo9 = new bolos("CupCake Rose","bolo/bolo9.png","Massa de Chocolate, Cobertura de Creme (morango) em Forma de uma Flor e Recheio de Chocolate");
var bolo10 = new bolos("CupCake IceCream","bolo/bolo10.png","Massa de Baunilha, Cobertura de Creme e Chocolate, Recheio de Creme de Morango e Enfeite de Cereja");
//variavel para colocar as classes, ou seja, os itens, dentro de um vetor

var puxaBolo = [];

//mandando as classes(itens) para o vetor "sla"

puxaBolo.push(bolo1, bolo2, bolo3, bolo4, bolo5, bolo6, bolo7, bolo8, bolo9,
		bolo10);


//FOR que cria os cards de cada classe(item)


for(var i = 0; i < puxaBolo.length; i++){

	var divs = document.createElement("div"); //cria uma div
	divs.setAttribute("class", "cards"); //atribui uma class(HTML)
	divs.setAttribute("id", "card"); //atribui um ID


	var as = document.createElement("a"); //cria um link a
	as.setAttribute("id", "clickimg"); //atribui um ID

	as.setAttribute("date-name","bolin"); //
	as.setAttribute("onclick","abastece("+i+")"); //atribui um ONCLICK para a function ABASTECE
	as.setAttribute("data-name","bolin");


	var fots = document.createElement("img"); //cria um img
	fots.setAttribute("id", "foto"); //atribui um ID
	fots.src = puxaBolo[i].foto; //no img, com a tag SRC é pega as imagens contida no "sla"

	var hs = document.createElement("h3"); //cria um h3
	hs.setAttribute("id", "cknome"); //atribui um ID
	hs.innerHTML = puxaBolo[i].title; //escreve no h3 o titulo contido no "sla"

	var leg = document.createElement("legend"); //cria uma legenda
	leg.setAttribute("id", "desc"); //atribui um ID
	leg.innerHTML = puxaBolo[i].legenda; //escreve na legenda a legenda contida no "sla"

	as.appendChild(fots); //adiciona o img dentro link(a)
	divs.appendChild(as); //adiciona o link(a) dentro da div
	divs.appendChild(hs); //adiciona o h3 dentro da div
	divs.appendChild(leg); //adiciona a lengenda dentro da div
    document.querySelector("#imgisBolos").appendChild(divs); //adiciona a div dentro do #imgis

}


class tortas{
	constructor(title,foto,legenda,preco){
		this.title = title;
		this.foto = foto;
		this.legenda = legenda;
	}
}
//itens armazenados na classe
var torta1 = new tortas("CupCake Flores","torta/torta1.jpg","Massa de Baunilha, Cobertura de Morango, Recheio de Creme e Enfeites de Flores");
var torta2 = new tortas("CupCake ChocoMenta","torta/torta2.jpg","Massa de Chocolate, Cobertura de Menta e Recheio de Chocolate");
var torta3 = new tortas("CupCake RedCream","torta/torta3.jpg","Massa de Baunilha, Cobertura de Morango e Creme e Recheio de Creme");
var torta4 = new tortas("CupCake BlueLove","torta/torta4.jpg","Massa de Chocolate, Cobertura de Chantilly, Recheio de Chocolate e Enfeites de Coração");
var torta5 = new tortas("CupCake GreenLove","torta/torta5.jpg","Massa de Chocolate, Cobertura de Creme cor Verde e Recheio de Chocolate");
var torta6 = new tortas("CupCake RomanticCream","torta/torta6.jpg","Massa de Chocolate, Cobertura de Creme, Recheio de Chocolate e Enfeites de Coração");
var torta7 = new tortas("CupCake Red Fruits","torta/torta7.png","Massa de Chocolate, Cobertura de Creme (Frutas Vermelhas), Recheio de Chocolate e Enfeite de Framboesa");
var torta8 = new tortas("CupCake ChocoGreen","torta/torta8.jpg","Massa de Chocolate, Cobertura de Menta e Recheio de Chocolate");
var torta9 = new tortas("CupCake Rose","torta/torta9.jpg","Massa de Chocolate, Cobertura de Creme (morango) em Forma de uma Flor e Recheio de Chocolate");
var torta10 = new tortas("CupCake IceCream","torta/torta10.jpg","Massa de Baunilha, Cobertura de Creme e Chocolate, Recheio de Creme de Morango e Enfeite de Cereja");
//variavel para colocar as classes, ou seja, os itens, dentro de um vetor

var puxaTorta = [];

//mandando as classes(itens) para o vetor "sla"

puxaTorta.push(torta1, torta2, torta3, torta4, torta5, torta6, torta7, torta8, torta9,
		torta10);


//FOR que cria os cards de cada classe(item)



for(var i = 0; i < puxaTorta.length; i++){

	var divs = document.createElement("div"); //cria uma div
	divs.setAttribute("class", "cards"); //atribui uma class(HTML)
	divs.setAttribute("id", "card"); //atribui um ID


	var as = document.createElement("a"); //cria um link a
	as.setAttribute("id", "clickimg"); //atribui um ID

	as.setAttribute("date-name","bolin"); //
	as.setAttribute("onclick","abastece("+i+")"); //atribui um ONCLICK para a function ABASTECE
	as.setAttribute("data-name","bolin");


	var fots = document.createElement("img"); //cria um img
	fots.setAttribute("id", "foto"); //atribui um ID
	fots.src = puxaTorta[i].foto; //no img, com a tag SRC é pega as imagens contida no "sla"

	var hs = document.createElement("h3"); //cria um h3
	hs.setAttribute("id", "cknome"); //atribui um ID
	hs.innerHTML = puxaTorta[i].title; //escreve no h3 o titulo contido no "sla"

	var leg = document.createElement("legend"); //cria uma legenda
	leg.setAttribute("id", "desc"); //atribui um ID
	leg.innerHTML = puxaTorta[i].legenda; //escreve na legenda a legenda contida no "sla"

	as.appendChild(fots); //adiciona o img dentro link(a)
	divs.appendChild(as); //adiciona o link(a) dentro da div
	divs.appendChild(hs); //adiciona o h3 dentro da div
	divs.appendChild(leg); //adiciona a lengenda dentro da div
    document.querySelector("#imgisTortas").appendChild(divs); //adiciona a div dentro do #imgis

}

