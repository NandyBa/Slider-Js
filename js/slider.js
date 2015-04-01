jQuery(function(){
	border_height = 1;
	$('.slider img:first').addClass('view');
	$('.slider').each(function(border_height){
		$slider = $(this);
		$view = $slider.children('.view');
		ratio = $view.width() / $view.height();
		
		sliderNewSixe = get_sliderNewSixe($view);
		height = sliderNewSixe.height;
		width = sliderNewSixe.width;

		animate_slider($slider, height, width);

		$slider.prepend('<div class="retour"><span class="glyphicon glyphicon-triangle-left" aria-hidden="true"></span></div><div class="suivant"><span class="glyphicon glyphicon-triangle-right" aria-hidden="true"></span></div>');	
	})
	$('.slider .view').show();
	$('.slider').on('click','.suivant', function(){
		$slider = $(this).parent();
		$view = $slider.children('.view');
		$view_next = $view.next();

		if($view_next.length != 1){
			$view_next = $slider.children(':nth-child(3)');
		}

		sliderNewSixe = get_sliderNewSixe($view_next);
		slide_height = sliderNewSixe.height;
		slide_width = sliderNewSixe.width;

		$view_next.addClass('view');
		

		animate_slider($slider, height, width);

		change_slide($slider, $view);
	}),
	$('.slider').on('click','.retour', function(){
		$slider = $(this).parent();
		$view = $slider.children('.view');
		$view_prev = $view.prev('img');

		if($view_prev.length != 1){
			$view_prev = $slider.children(':last-child');
		}

		sliderNewSixe = get_sliderNewSixe($view_prev);
		slide_height = sliderNewSixe.height;
		slide_width = sliderNewSixe.width;

		$view_prev.addClass('view');	

		animate_slider($slider, height, width);

		change_slide($slider, $view);
	});

	/* Param
	/	$view is the new image
	*/
	function get_sliderNewSixe($view){
		$slider = $view.parent();
		if($view.data('width')){

			width = $view.data('width');
			height = $view.data('width') / ratio;

		}else if($view.data('height')){
			height = $view.data('height');
			width = ratio * $view.data('height');
		}else{
			$slider.width('100%');
			height = $view.height();
			width = $view.width();
		}
		return {'height' : height, 'width' : width};
	}

	/* Params
	/	$slider
	/	new height of slider
	/	new width of slider
	*/
	function animate_slider($slider, height, width){
		$slider.animate({
			height : height+border_height*2,
			width : width+border_height*2
		})
	}

	/* Params
	/	$slider
	/	$curent_view
	*/
	function change_slide($slider, $curent_view){
		$slider.children('.view').show();
		$curent_view.hide();
		$curent_view.removeClass('view');
	}
});