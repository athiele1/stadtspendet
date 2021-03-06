/**
main.js

Eine externe und zentrale Javascriptdatei, wo alle anderen Seiten
drauf zugreifen können sobald
"<script src="main.js"></script>" 
im Head hinzugefügt wurde.

**/

/*var b1S = ["pics/b_initiative.png","pics/b_initiative2.png"];
var b2S = ["pics/b_finder.png","pics/b_finder2.png"];
var b3S = ["pics/b_partner.png","pics/b_partner2.png"];
var b1 = document.createElement("input");
var b2 = document.createElement("input");
var b3 = document.createElement("input");*/

//Die obenren Menübezeichnungen
var buttonText = ["HOME","SPENDEN-FINDER","SPENDEN-SUCHE","PARTNER","TEAM","BIBLIOTHEK"];
//Die Links der Buttons
var buttonLink = ["initiative.html","finder.html","mediator.html","partner.html","team.html","library.html"];

//Die obenren Menübuttons
var btns = [];


//Füllt den oberen Kopfbereich
function addHeadMenu(container) {
		/*<div id="SocialLinks">
                <p>  <a  href="https://www.facebook.com/bremenspendet/" target="_blank"><img src="pics/facebook.svg" width="40" height="40"></a>
                    <a href="https://www.instagram.com/bremenspendet/" target="_blank"><img src="pics/instagram.svg" width="40" height="40"></a></p> 
            </div></div>*/
			
	
			
	var divSoc = document.createElement("div");
	divSoc.className = "socialDiv";
	
	var p = document.createElement("p");
	var faceb = document.createElement("a");
	var insta = document.createElement("a");
	
	faceb.href = "https://www.facebook.com/bremenspendet/";
	insta.href = "https://www.instagram.com/bremenspendet/";
	
	faceb.target="_blank";
	insta.target="_blank";
	
	var pic1 = new Image();
	var pic2 = new Image();
	
	pic1.className = "socialLinks";
	pic2.className = "socialLinks";
	
	pic1.src= "pics/facebook.svg";
	pic2.src="pics/instagram.svg";
	
	pic1.width = "40";
	pic2.width = "40";
	
	faceb.appendChild(pic1);
	insta.appendChild(pic2);
	
	p.appendChild(faceb);
	p.appendChild(insta);
	divSoc.appendChild(p);
	container.appendChild(divSoc);

    /*var header = new Image();
	header.src = "pics/logo_200.png";*/
    //var headerDiv = document.createElement("div");

    //headerDiv.id = "div100";
    //headerDiv.appendChild(header);

    //container.appendChild(headerDiv);


    //var container = document.createElement("div");
    ////container.align = "center";


    var divUpMenu = document.createElement("div");
    //divUpMenu.style.width = "1242px";
    divUpMenu.style.height = "50px";
    divUpMenu.style.borderTop = "3px solid white";
    divUpMenu.style.borderBottom = "3px solid #72e6ab";
    divUpMenu.style.backgroundColor = "white";

    //divUpMenu.style.boxShadow =  "0px 10px 10px grey";

    var divHolder = document.createElement("div");
    //divHolder.style.border = "1px solid red";

    divHolder.style.width = "1100px";
    divHolder.style.margin = "0 auto";
    divHolder.style.marginTop = "4px";
    divHolder.style.display = "block";

    for(var i = 0; i < buttonText.length; i++){

        var btni = document.createElement("input");
        btni.type = "button";
        btni.value = buttonText[i];
        btni.classList.add("topButton");
        btni.id = "" + i;

        btni.addEventListener("click", function(){
            window.location = buttonLink[this.id];

        });




        /*
		var span1 = document.createElement("span");
		span1.style.width = "200px";
		span1.style.height = "20px";
		span1.style.display = "inline-block";
		span1.style.position = "relative";
		span1.style.marginTop = "10px"

		var span2 = document.createElement("span");
		span2.style.height = "30px";
		span2.style.display = "table";
		span2.style.margin = "0 auto";


		span2.innerHTML = buttonText[i];

		span2.classList.add("noselect");


		span2.style.border = "5px solid white";
		//span2.style.background = "white";
		//span2.style.userSelect = "none";

		//span2.style.position = "relative";

		//var bi = document.createTextNode(buttonText[i]);
		//bi.textAlign = "center";

		//span1.style.border = "thick solid #0000FF";




		if(i != 2){
			span1.style.borderRight = "1px solid grey";

		}		

		span2.id = "" + i;
		span2.addEventListener("mouseover", function(){
			//this.style.borderBottom = "5px solid red";
			selectButton(this);
		})

		span2.addEventListener("mouseleave", function(){

			deselectButton(this);

		})



		//span2.style.border = "thick solid #FF0000";
		//divi2.style.border = "thick solid #000000";


		//bi.childNodes[0].style.color = "red";

		//buttons2.push(bi);
		//span2.appendChild(bi);
		span1.appendChild(span2);
		//divi2.appendChild(bi);

		divUpMenu.appendChild(span1);
		*/

        btns.push(btni);
        divHolder.appendChild(btni);

        if(i < buttonText.length-1){
            var lineI = document.createElement("span");
            //lineI.style.width = "2px";
            //lineI.innerHTML = "&nbsp";
            //lineI.style.background = "grey";
            lineI.style.borderLeft = "2px solid grey";
            divHolder.appendChild(lineI);
        }


    }

    /*var fb = new Image();
	fb.src = "pics/facebook.png";
	fb.style.display = "inline";
	fb.style.width = "30px";
	fb.style.height = "30px";*/

    divUpMenu.appendChild(divHolder);

    //divUpMenu.appendChild(fb);

    container.append(divUpMenu);

    /*container.append(document.createElement("br"));



	var spacer = new Image();

	b1.type = "image";
	b2.type = "image";
	b3.type = "image";

	resetButtons(); //Setzt das default image


	spacer.src = "pics/b_spacer.jpg";


	//Macht die "Buttons" anklickbar

	b1.addEventListener("click", function(){
		window.location="index.html";

	});

	b2.addEventListener("click", function(){
		window.location="finder.html";

	});

	b3.addEventListener("click", function(){
		window.location="partner.html";

	});




	//Fügt die Elemente in der richtigen Reihenfolge mit "Spacern" dazwischen ein.



	container.appendChild(spacer);
	container.appendChild(spacer.cloneNode(true));
	container.appendChild(spacer.cloneNode(true));
	container.appendChild(spacer.cloneNode(true));
	container.appendChild(b1);
	container.appendChild(spacer.cloneNode(true));
	container.appendChild(spacer.cloneNode(true));
	container.appendChild(b2);
	container.appendChild(spacer.cloneNode(true));
	container.appendChild(spacer.cloneNode(true));
	container.appendChild(b3);
	container.appendChild(spacer.cloneNode(true));
	container.appendChild(spacer.cloneNode(true));
	container.appendChild(spacer.cloneNode(true));
	container.appendChild(spacer.cloneNode(true));
	*/
    //document.body.appendChild(container);	
	

	
	
	
}

//Füllt den unteren (Impressum etc) Bereich
function addButtomMenu(container2) {
    
    var footer = document.createElement("footer");
    footer.style.position = "relative";
    footer.id = "bottom-footer"

    //var textMenu = document.createTextNode("Impressum");	

    var impressum = document.createElement("p");
    impressum.innerHTML = '<a href="impressum.html" title="Impressum">Impressum</a>';

    var contact = document.createElement("p");
    contact.innerHTML = '<a href="contact.html" title="Kontakt">Kontakt</a>';


	impressum.className = "bottomLink";
	contact.className = "bottomLink";
    //var contact = document.createElement("p");
    //contact.innerHTML = '<a href="contact.html" title="Kontakt">Kontakt</a>';
    
    footer.appendChild(impressum);
    footer.appendChild(contact);
    container2.appendChild(footer);


}

//Deselectiert alle oberen Menüknöpfe
function resetButtons(){
    for(var btni in btns){
        btni.className = "topButton";		
    }	
}

//Selectiert einen oberen Menüknöpfe
function markButton(i){
    resetButtons();
    btns[i].className = "topButtonClicked";
    //btns[i].classList.add("topButtonClicked");

}

/*function selectButton(spani){
	spani.style.borderBottom = "5px solid red";
	
	spani.innerHTML = buttonText[spani.id].fontcolor("red");
	//buttons2[i].innerHTML.style.color = "red";
}

function deselectButton(spani){
	if(spani.id == "none"){
		spani = spani.parentNode;	
	}

	spani.style.borderBottom = "0px";

	spani.innerHTML = buttonText[spani.id].fontcolor("black");

	//buttons2[i].innerHTML.style.color = "red";
}
*/
	
	/**
	
	*************************************************************************
	HIER BEGINNT DER CODE, WELCHER MIT GOOGLE MAPS / SPENDENFINDER ZU TUN HAT
	*************************************************************************
	
	
	**/
	
	
	//Ob die Marker direkt auf der Karte angezeigt werden sollen
	var showDirect = true;

	//Die Google Map
    var infowindow,service,map;
	
	//Beinhaltet für jede Kategorie ein true/false, je nachdem ob es ausgewählt wurde
	var kategorien = [];
	
	//Enthält für jeden Marker einen bool, über den er sich abschalten lässt
	var markerActivated = [];
	
	
	//Eine Liste aller google maps marker
	var markers = [];
	
	
	//Eine Liste von Listen, welche für jeden Marker dessen Attribute  speichert ([name, bGrad, lGrad, adresse, spendenAnnahmen, spendenSpecials])
	var markerContent = [];
	

	//Passt die Kategorien Bilder Pfade an
	function pathLabelToPath(katPath){
		return 	"pics/finder/c_" + katPath + ".png";
		
	}
	
		//Alle Kategorien
	var katLabels = ["Bücher","Elektronik","Möbel","Spielzeug","Haushaltswaren","Kleidung","Lebensmittel","Sonstiges"];
	
	//Die Pfade zu den Bildern der Kategorie (ohne Dateiendung)
	var katPaths = ["buch","elektronik","moebel","spielzeug","haushalt","kleidung","lebensmittel","sonstige"];
	
	//Passt die Pfade an
	for(var i = 0; i < katPaths.length; i++){
		katPaths[i] = 	pathLabelToPath(katPaths[i]);		
	}

	
	
	
	
//Sobald über Katg-Bild im Popup Fenster eines Markers gehovert wird
	function hoverKatSymbol(parent, img,specials){
		
		if(specials.length > 0){
			var divi = document.createElement("div");
			
			divi.className = "katSymbolDiv";
			divi.id = "katSymbolDivId";
			
			
			
			//Relative Pos. zum Parent Node: https://stackoverflow.com/questions/26423335/elements-coordinates-relative-to-its-parent
			var childrenPos = img.getBoundingClientRect(), relativePos = {};
			
			if(parent != null){
				var parentPos = parent.getBoundingClientRect();
				relativePos.top = childrenPos.top - parentPos.top,
				relativePos.left = childrenPos.left - parentPos.left;
			}else{
				relativePos.left = childrenPos.left;
				
				relativePos.top = childrenPos.top + window.scrollY;
			}
			
			
			divi.style.top = relativePos.top;
			divi.style.left = relativePos.left + 35 + "px";
		
			
			var liste = document.createElement("ul");
			
			for(i in specials){
					var listElem = document.createElement("li");
					listElem.appendChild(document.createTextNode(specials[i]));
					liste.appendChild(listElem);			
			}
			
			
			
			divi.appendChild(liste);
			
			
			if(parent != null){
				parent.appendChild(divi);
			}else{
				document.body.appendChild(divi);
			}
			
		}
	}
	//Sobald über Katg-Bild im Popup Fenster eines Markers rausgehovert wird
	function hoverOutKatSymbol(){
		
		var divi = document.getElementById("katSymbolDivId");
		var map = document.getElementById("map");
		
		try{
			document.body.removeChild(divi);
			
		}catch(err){map.removeChild(divi);};
			
		
		
		
	}
	
	
	
	
	//Anleitungen/hilfstools:
	
	//https://developers.google.com/places/place-id#find-id
	//https://developers.google.com/maps/documentation/javascript/examples/place-details?hl=de
	
	//var labeli = 1;
	
	
	//Fügt eine Einrichtungstandort hinzu
	function addPlace4(nr, name, bGrad, lGrad, adresse, spendenAnnahmen, spendenSpecials, url){
		
		var pos = {lat: bGrad, lng: lGrad};
	
		
	
		var marker = new google.maps.Marker({
             map: markerActivated[nr] ? map : null,
             position: pos,
			//label: nr + "",
			 animation: google.maps.Animation.DROP
			 
        });
			
		//markers.push(marker);
		markers[nr] = marker;
		//labeli++;
		
		
		markerContent[nr] = [name, bGrad, lGrad, adresse, spendenAnnahmen, spendenSpecials, url]; 
		
		
      	google.maps.event.addListener(marker, 'click', function() {
			
			try{
		
		
			//markerContent[num][0] == name
			var content = '<div><span style="font-weight:bold">' + markerContent[nr][0] + '</span><br>';
			
			//markerContent[num][4] == spendenAnnahmen
			var ic = 0;
			for(h in markerContent[nr][4]){
			
				
				for(var i = 0; i < katLabels.length; i++){
										
					
					if(markerContent[nr][4][h] === katLabels[i]){
						//markerContent[num][5] == spendenSpecials
						
						var overString = "";
						var specialI = markerContent[nr][5][ic];
						
						
						
						if(specialI != null){
							ic++;
							var specStringI = "";
						
							for(var j = 0; j < specialI.length; j++){
								specStringI = specStringI + '\'' + specialI[j] + '\'';
								if(j < specialI.length-1){
									specStringI = specStringI + ',';
								}
							
							}
							
							var mapString = "'map'";
							overString = 'onmouseout="hoverOutKatSymbol()" onmouseover="hoverKatSymbol(document.getElementById('+mapString+'),this,['+specStringI+']);"';
							
						}
						
						
						
						content += '<img  src="' + katPaths[i] + '" width = "30px" name="'+ katLabels[i]  + '" '+overString+'>'	
					
					}
					
				}
				
			}
			
			
			//markerContent[num][0] == adresse, markerContent[num][6] == url
			content += '<br>' + markerContent[nr][3] + '</div><div class="zurWebsiteDiv">&#x2192<a target="_blank" href="'+ markerContent[nr][6] +'">Zur Website</a></div>';
			
			
			
			infowindow.setContent(content);
			infowindow.open(map, this);
			 
			}catch(err){
				alert(err)	
				
			}
			 
        });
		
	}
	var p_c = 0;
	function addPlace(name, place_id, spendenAnnahmen,spendenSpecials, url){
		
		
		
		addPlace2(p_c, name, place_id, spendenAnnahmen,spendenSpecials, url);
		p_c++;
	}
	
	var p_c2 = 0;
	function addPlace2(nr, name, place_id, spendenAnnahmen,spendenSpecials, url){
		
		
		
		// [name, bGrad, lGrad, adresse, spendenAnnahmen, spendenSpecials, url]; 
		markerContent[nr] = [name,0,0,place_id,spendenAnnahmen,spendenSpecials,url];
		markerActivated[nr] = showDirect;
		
		
		 window.setTimeout(function() {
			
			addPlace3(nr,name, place_id, spendenAnnahmen,spendenSpecials, url);
		 }, p_c2*200+500);
		 
		p_c2++;
	}
	
	//Fügt eine Einrichtungstandort hinzu
	function addPlace3(nr, name, place_id, spendenAnnahmen,spendenSpecials, url){
		
		var request = {
 			 placeId: place_id
		};

		service = new google.maps.places.PlacesService(map);
		service.getDetails(request, callback);

		function callback(place, status) {
 		 	if (status == google.maps.places.PlacesServiceStatus.OK) {
				
				var lng = place.geometry.location.lng();
				var lat = place.geometry.location.lat();
			
				addPlace4(nr,name, lat, lng,place.formatted_address.split(",")[0],spendenAnnahmen,spendenSpecials,url);
				
 			}else{
				
				//RETRY
				addPlace2(nr, name, place_id, spendenAnnahmen,spendenSpecials, url)	
			}
		}
		
		
		
		/*service.getDetails({
          placeId: place_id
        }, function(place, status) {
			
          //if (status === google.maps.places.PlacesServiceStatus.OK) {
			
			
			var lng = place.geometry.location.lng();
			var lat = place.geometry.location.lat();
			var nam = place.name;
			
			if(name != null){
				nam = name;	
			}
			
			
			addPlace4(nr,nam, lat, lng,place.formatted_address.split(",")[0],spendenAnnahmen,spendenSpecials,url);
			
			
			  
		  
		});	  */
	}
	
	
	/*function addPlace(place_id, spendenAnnahmen){
			
		addPlace3(null,place_id, spendenAnnahmen);
		
	}*/
	
	
	//Updated die Marker (Falls zum Beispiel andere Kategorien ausgewählt wurden + LOS)
	function updateMarkers(filterKats){
		try{
		
		if(infowindow != null){
			infowindow.close();
		}
		
		
		var choosedKatg = [];
		
		if(filterKats){
			for(h in katLabels){
				if(kategorien[h]){
					choosedKatg.push(katLabels[h]);
				}
			}
		
			
			if(choosedKatg.length == 0){
				choosedKatg = katLabels;
			}
		}
		
		var canStayList = [];
		
		
		for(i in markerContent){
			var canStay = false;
			
			//var markerI = markers[i];
			
			
			if(filterKats){
				var markKat = markerContent[i][4];
						
				for(j in markKat){
				
					for(k in choosedKatg){
						if(markKat[j] === choosedKatg[k]){
							canStay = true;
							break;	
						}
					}		
				}				
			}else{
				canStay = true;
			}
			
			
			
			
			
			if(canStay && markerActivated[i]){
					canStayList.push(true);
			}else{
					canStayList.push(false);
			}
			
			
		}	
		
		for(l in canStayList){
			
			
			changeMap(markers[l], canStayList[l], l*50+1)
			
		}
		}catch(err){
			
			alert(err);
		}
			
	}
	//Fügt einen Marker getimed zur Map hinzu
	function changeMap(marker, bool, time){
		
		window.setTimeout(function() {
				if(bool && marker.getMap() != null){
					
				}else{
					marker.setAnimation(google.maps.Animation.DROP);	
					marker.setMap(bool ? map : null);	
				}
				
		}, time);
		
	}
	
	
	/*function addPlace(place_id){
		service.getDetails({
          placeId: place_id
        }, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            
			var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });
			
			
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                'Place ID: ' + place.place_id + '<br>' +
                place.formatted_address + '</div>');
              infowindow.open(map, this);
         	 });
       	 }
        }
		);

		
	}*/
	
    //Zur Initierung der Google Map
    function initMap() {
      var bremen = {lat: 53.076320, lng: 8.808581};
	 
		

	  
      map = new google.maps.Map(document.getElementById('map'), {
      		zoom: 12,
			minZoom: 10,
            center: bremen
       });
	   
	   
	   infowindow = new google.maps.InfoWindow();
	   service = new google.maps.places.PlacesService(map);
	   
     /*  var marker = new google.maps.Marker({
           position: bremen,
           map: map
       });*/
	  

     }
	 
	 function addPlaces(){
		 
		 addPlace('Verein für Innere Mission in Bremen','ChIJhW9rIQ0osUcRrE3kNWcxOJ0',['Kleidung'],[['Damen-und Herrenmode','Kinderbekleidung','Schuhe']],'https://www.inneremission-bremen.de/startseite/');
	addPlace('ProShop Bremen','ChIJ89bxYH4nsUcREksgXBw3boo',['Haushaltswaren','Spielzeug','Bücher','Sonstiges'],[[],[],[],['Textilien']],'http://www.projob-bremen.de/index.php?id=14');
	addPlace('ProJob Bremen','ChIJ164EEyoosUcRy6I04KPS6ho',['Möbel','Haushaltswaren'],[[],[]],'http://www.projob-bremen.de/index.php?id=18');
	addPlace('Cafe Papagei','ChIJ-3so-BEosUcRPCYq-g-sjY0',['Lebensmittel'],[['Kaffee','Tee','Kekse']],'https://www.inneremission-bremen.de/wohnungslosenhilfe/tagestreffs/cafe_papagei/');
	addPlace('frauenzimmer','ChIJa5aoEBYosUcR7-oPi5SZBVM',['Lebensmittel'],[['Kaffee','Tee','Kekse']],'https://www.inneremission-bremen.de/wohnungslosenhilfe/tagestreffs/frauenzimmer/');
	addPlace('Bahnhofsmission Bremen','ChIJPW9aWBIosUcRIWbrsm-T2Vo',['Lebensmittel'],[['Kaffee']],'http://www.bahnhofsmission-bremen.de/');
addPlace('Deutsches Rotes Kreuz Kreisverband Bremen e.V.','ChIJMzOAQ4QnsUcR1QxfNKM8QQU',['Kleidung','Bücher'],[[],[]],'http://www.drk-bremen.de/startseite.html');
addPlace('Deutsches Rotes Kreuz Kreisverband Bremen e.V.','ChIJySe4uUnTtkcRAX3DZkNRfs8',['Kleidung'],[[]],'http://www.drk-bremen.de/startseite.html');
addPlace('Die Bremer Suppenengel','ChIJdVHLMOPXsEcR6frrixM3ILg',['Lebensmittel','Sonstiges'],[['Nudeln','Hülsenfrüchte','Kaffee','Gewürze','Konserven'],['Schlafsäcke','Rucksäcke','Isomatten','Büromaterial','gebrauchte Smartphones','Seife','Zahnpasta','Pflaster','Binden']],'http://www.suppenengel.de/');
addPlace('SOS Kinderdorf','ChIJ1e0jeh8osUcRYXT6fGKqtlM',['Bücher','Spielzeug','Kleidung'],[['Kinderbücher'],['Kinderspielzeug'],['Kinderkleidung']],'http://www.sos-kinderdorf.de/kinderdorf-bremen');
/*addPlace('SOS Kinderdorf','ChIJIT1y7-bXsEcRlL2yIBkmK6c',['Bücher','Spielzeug','Kleidung'],[['Kinderbücher'],['Kinderspielzeug'],['Kinderkleidung']],'http://www.sos-kinderdorf.de/kinderdorf-bremen');
addPlace('SOS Kinderdorf','ChIJC2LtuasssUcRfK7QtJZ95i8',['Bücher','Spielzeug','Kleidung'],[['Kinderbücher'],['Kinderspielzeug'],['Kinderkleidung']],'http://www.sos-kinderdorf.de/kinderdorf-bremen');*/
addPlace('MöbellagerNord','ChIJFR1C4a4ssUcRA4l8ZIS8PZg',['Möbel','Haushaltswaren','Elektronik'],[[],['Geschirr','Gläser','Küchenartikel','Lampen','Textilien'],['Kleingeräte']],'https://www.moebellagernord.de/');

addPlace('Gröpelinger Recycling Initiative - Recycling-Hof Huchting','ChIJ2fvAOyTWsEcRVzU5p3SESac',['Elektronik','Sonstiges'],[['Computer','Stereoanlagen','Büromachinen','Radio','Heizung','Lüftung'],['Bauelemente','Bauteile','Sanitärartikel','Metalle']],'http://gri-bremen.de/recycling-hoefe/huchting/');
addPlace('Gröpelinger Recycling Initiative - Recycling-Hof Findorff','ChIJS7gsNVwosUcR9Bo7JzJFGJY',['Elektronik','Haushaltswaren','Bücher','Sonstiges'],[['Computer','Radio','Toaster','Kaffeemachinen'],['Geschirr','Besteck','Schallplatten','Lampen','Dekorationsartikel'],[],['Metalle','Textilien']],'http://gri-bremen.de/recycling-hoefe/findorff/');
addPlace('Gröpelinger Recycling Initiative - Recycling-Hof Hemelingen','ChIJf7Lbr4HYsEcR2Xuf9waqeAc',['Elektronik','Haushaltswaren'],[['Waschmaschinen','Kühl-und Gefrierschränke','Herde','Mikrowellenherde','Nähmaschinen'],['Radios','Fernseher','Computer','Küchengeräte']],'http://gri-bremen.de/recycling-hoefe/hemelingen/');
addPlace('Gröpelinger Recycling Initiative - Möbelhaus Oslebshausen','ChIJs-mssGApsUcRfqGHXBnLcGA',['Möbel','Haushaltswaren','Kleidung','Bücher','Sonstiges'],[[],[],[],[],['Wohnaccessoires']],'http://gri-bremen.de/mobelhallen/oslebshausen/');
addPlace('Gröpelinger Recycling Initiative - Kaufhaus Hemelingen','ChIJG0WLFn4nsUcRzZnb6Pr6nO8',['Möbel','Elektronik','Kleidung','Bücher','Spielzeug','Haushaltswaren','Sonstiges'],[[],[],[],[],[],[],['Wohnaccessoires','Bilder']],'http://gri-bremen.de/mobelhallen/kaufhaus-hemelingen/');
addPlace('Gröpelinger Recycling Initiative - Möbelhalle Kattenturm Mitte','ChIJNf_gtyTYsEcR6wO9qF5qo4I',['Möbel','Kleidung','Bücher','Spielzeug','Haushaltswaren','Sonstiges'],[[],[],[],[],['Haushaltsgeräte'],['Wohnaccessoires','Bilder']],'http://gri-bremen.de/mobelhallen/kattenturm-mitte/');

	 }
	

