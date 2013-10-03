//Okay, I built it this way because this is how WordPress sticks images in ordered lists.
//If you are going to use this in a WordPress theme, then YOU CAN NEVER USE ORDERED LISTS IN THAT WEBSITE!
//I built this it this way because my customer is an idiot who couldn'tbe bothered to learn ANY HTML.
//adds the CSS file to the header
$('head').append('<link rel="stylesheet" type="text/css" href="gallerylogical/gallerylogicalStyle.css">');

//adds the class even to even list items. JS is a zero based counting system so this starts with zero.
$('ol li:even').addClass('even');

//Runs through all the OL lists. One list equals one gallery.
$('ol').each(function(){
	// gallerylogicalBigBox variable is used to assign a background image to the big box.
	var gallerylogicalBigBox =false;

	// The gallerylogicalLittleBoxes variable is used hold a string of all the little boxes.
	// The string gets longer as this thing cycles through all the list items.
	var gallerylogicalLittleBoxes = '';

	// Runs through all the list items in each ordered list.
	$(this).children('li').each(function(){

		//checking for even or odd classes on the list items so I know if this is a photo or photo description.
		if ($(this).hasClass('even')){

			//checks to see if the big box has a background.
			//If it doesn't, this assigns one to the variable so the variable can be used later.
			if (!gallerylogicalBigBox){
				gallerylogicalBigBox = $(this).children('a').children('img').attr('src');
			}

			//gets the image location from the li>a>img src attribute and assigns it to gallerylogicalLittleBoxesBackground
			var gallerylogicalLittleBoxesBackground = $(this).children('a').children('img').attr('src');

			//starts to build a little box and assigns the background image to it.
			gallerylogicalLittleBoxes += '<div class="gallerylogicalLittleBoxes" style="background-image:url(\''+gallerylogicalLittleBoxesBackground;
		}else {

			//adds alt/title text and finishes the little box. This is added to a string to be built into the gallery later.
			gallerylogicalLittleBoxes +='\')" alt="'+this.innerHTML+'" title="'+this.innerHTML+'"></div>';
		};

	// end of the function for individual list items.	
	});

	//Okay there is a lot going on below...
	//Places the big box after the ordered list. 
	//Gets the string of gallerylogicalLittleBoxes which at this point contains all the little boxes. 
	//The final div clears all the floats.
	$(this).after('<div class="hidden"></div><div class="gallerylogicalBigBox" style="background-image:url(\''+gallerylogicalBigBox+'\')"></div>'+gallerylogicalLittleBoxes+'<div style="clear:both;"></div>');

//end of each of the function that runs through all the OL lists
});

$('div.gallerylogicalLittleBoxes').click(function(){
	$(this).prevUntil('.hidden').not('.gallerylogicalLittleBoxes').css('background-image',$(this).css('background-image'));
});