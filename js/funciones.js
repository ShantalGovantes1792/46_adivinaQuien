$(document).ready(function(){
	console.log("listo");
  // FUNCION PARA IMAGENES RANDOM
  var imgArray = [
                    { img:"img/adri.jpg",
                      name: "adri"
                    },
                    { img:"img/adrix.jpg",
                      name: "adrix"
                    },
                    { img:"img/ale.jpg",
                      name: "ale"
                    },
                    { img:"img/anaPao.jpg",
                      name: "pao"
                    },
                    { img:"img/bere.jpg",
                      name: "bere"
                    },
                    { img:"img/carmen.jpg",
                      name: "carmen"
                    },
                    { img:"img/edith.jpg",
                      name: "edith"
                    },
                    { img:"img/flor.jpg",
                      name: "flor"
                    },
                    { img:"img/hass.jpg",
                      name: "hass"
                    },
                    { img:"img/iana.jpg",
                      name: "iana"
                    },
                    { img:"img/irene.jpg",
                      name: "irene"
                    },
                    { img:"img/isabel.jpg",
                      name: "isabel"
                    },
                    { img:"img/isolda.jpg",
                      name: "iso"
                    },
                    { img:"img/jackie.jpg",
                      name: "jackie"
                    },
                    { img:"img/karen.jpg",
                      name: "karen"
                    },
                    { img:"img/linda.jpg",
                      name: "linda"
                    },
                    { img:"img/liz.jpg",
                      name: "liz"
                    },
                    { img:"img/marianaD.jpg",
                      name: "mariana"
                    },
                    { img:"img/marianaP.jpg",
                      name: "mariana"
                    },
                    { img:"img/moni.jpg",
                      name: "moni"
                    },
                    { img:"img/monse.jpg",
                      name: "monse"
                    },
                    { img:"img/natasha.jpg",
                      name: "natasha"
                    },
                    { img:"img/okaidy.jpg",
                      name: "okaidy"
                    },
                    { img:"img/oliva.jpg",
                      name: "oliva"
                    },
                    { img:"img/orianna.jpg",
                      name: "orianna"
                    },
                    { img:"img/paola.jpg",
                      name: "paola"
                    },
                    { img:"img/sandra.jpg",
                      name: "sandra"
                    },
                    { img:"img/shantal.jpg",
                      name: "shantal"
                    },
                    { img:"img/tania.jpg",
                      name: "tania"
                    },
                    { img:"img/valeria.jpg",
                      name: "valeria"
                    },
                    { img:"img/vannia.jpg",
                      name: "vannia"
                    },
                    { img:"img/veronica.jpg",
                      name: "veronica"
                    },
                    { img:"img/yaredi.jpg",
                      name: "yaredi"
                    },
                    { img:"img/yasury.jpg",
                      name: "yasury"
                    },
                    { img:"img/aleD.jpg",
                      name: "ale"
                    },
                    { img:"img/claudia.jpg",
                      name: "claudia"
                    },
                    { img:"img/lili.jpg",
                      name: "lily"
                    },
                    { img:"img/nayeli.jpg",
                      name: "nayeli"
                    },
                    { img:"img/varinia.jpg",
                      name: "varinia"
                    },
                    { img:"img/yess.jpg",
                      name: "yess"
                    },
                    { img:"img/cristina.jpg",
                      name: "cristina"
                    },
                    { img:"img/karem.jpg",
                      name: "karem"
                    }

                   ];
  var randomNumber = Math.floor((Math.random() * imgArray.length));
  var contador = 0;
  var contadorError = 0;
   var puntaje = 0;

// INICIAR LA PRIMERA IMAGEN RANDOM

  /*LA SIGUIENTE LINEA SIRVE PARA LLAMAR A LA IMAGEN DESDE EL JQUERY PERO COMO SI 
  SI LO ESTUVIERA PONIENDO EN EL CSS POR EJEMPLO:
  .sdfs{
  background-image: url("imgasfsf");
  }*/

    $("#iniciar").click(function () {
      baseUrl = "url('" + imgArray[randomNumber].img + "')";
      $(".foto-alum").css('background-image', baseUrl);
      $(".foto-alum").css('border', 'solid 5px #EC971F');

		});

    // COMPROBAR LA IMAGEN Y EL NOMBRE

    $("#comprobar").click(function(){
      var nombre = $("#input-name").val();

      if( imgArray[randomNumber].name == nombre){
        console.log("acertaste");
        $("#input-name").val("");
        $("#text-comp").append("acertaste").fadeOut(2000);
        randomNumber = Math.floor((Math.random() * imgArray.length));
        baseUrl = "url('" + imgArray[randomNumber].img + "')";
        $(".foto-alum").css('background-image', baseUrl);
        puntaje = puntaje + 5;
        console.log(puntaje);
        $("#contador").html(" "+ puntaje + " ");


      } else {
        contadorError++ ;
        console.log("incorrecto");
        console.log(contadorError);
        $("#input-name").val("");
        $("#text-comp").append("te quedan " + contador + "intentos").fadeOut(2000);
          
          if (contadorError == 5){
            //puntaje  - 1;

            randomNumber = Math.floor((Math.random() * imgArray.length));
            baseUrl = "url('" + imgArray[randomNumber].img + "')";
            $(".foto-alum").css('background-image', baseUrl);

            contadorError = 0;
            puntaje = puntaje -1;
             $("#contador").html(" "+ puntaje + " ");
          };

      };

    });


	
});
