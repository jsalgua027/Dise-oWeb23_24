
	/* 	

		ACTIVIDAD 1

		CON SIBLINGS OJO CON EL NIVEL DE LOS SELECTORES DE COMO FUNCIONA EL SIBLINGS
		$(document).ready(function () {
			$("article>img").mouseenter(function () {
				$(this).siblings("article>h3").toggle();
			});

			$("article>img").mouseleave(function () {
				$(this).siblings("article>h3").toggle();
			});
		});
 */
		
		/*
			CON CHILDREN CAMBIA LA FORMA DE USAR LOS SELECOTORES
		 $(document).ready(function () {
			$("article ").mouseenter(function () {
				$(this).children("h3").toggle();
			});

			$("article").mouseleave(function () {
				$(this).children("h3").toggle();
			});
		}); 
		*/
		/* CON HOVER */
		/*$(document).ready(function () {
			$("article ").hover(function () {
				$(this).children("h3").toggle()
			});

			
		});*/ 

		// ACTIVIDAD 2 
		
		$(document).ready(function () {
			$("article ").click(function () {
				$(this).children("h3").css("display", "inline");
			});
			$("article").dblclick(function () {
				$(this).children("h3").css("display", "none");
			});
			
		}); 
		
		

