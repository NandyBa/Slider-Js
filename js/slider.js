jQuery(function(){
	border_height = 1;
	$('.slider img:first').addClass('view');
	$('.slider').each(function(border_height){
		$this = $(this);
		$view = $this.children('.view');
		ratio = $view.width() / $view.height();
		if($view.data('width')){

			width = $view.data('width');
			height = $view.data('width') / ratio;

		}else if($view.data('height')){
			height = $view.data('height');
			width = ratio * $view.data('height');
		}else{
			height = $view.height();
			width = $view.width();
		}
		$this.prepend('<div class="retour"><span class="glyphicon glyphicon-triangle-left" aria-hidden="true"></span></div><div class="suivant"><span class="glyphicon glyphicon-triangle-right" aria-hidden="true"></span></div>');
		$this.animate({
			height : height+border_height*2,
			width : width+border_height*2
		})
	})
	$('.slider .view').show();
	$('.slider').on('click','.suivant', function(){
		$slider = $(this).parent();
		$view = $slider.children('.view');
		$view_next = $view.next();

		if($view_next.length != 1){
			$view_next = $slider.children(':nth-child(3)');
		}

		if($view_next.data('width') || $view_next.data('height')){
			ratio = $view_next.width() / $view_next.height();

			if($view_next.data('width')){
				slide_width = $view_next.data('width');
				slide_height = $view_next.data('width') / ratio;
			}else{
				slide_height = $view_next.data('height');
				slide_width = ratio * $view_next.data('height');
			}
		}else{
			$slider.width('100%');
			var slide_height = $view_next.height();
			var slide_width = $view_next.width();
		}
		$view_next.addClass('view');
		

		$slider.animate({
			height : slide_height+border_height*2,
			width : slide_width+border_height*2
		})

		$('.slider .view').show();
		$view.hide();
		$view.removeClass('view');
	}),
	$('.slider').on('click','.retour', function(){
		$slider = $(this).parent();
		$view = $slider.children('.view');
		$view_prev = $view.prev('img');


		if($view_prev.length != 1){
			$view_prev = $slider.children(':last-child');
		}
		$view_prev.addClass('view');
		var slide_height = $view_prev.height();

		if($view_prev.data('width') || $view_prev.data('height')){
			ratio = $view_prev.width() / $view_prev.height();

			if($view_prev.data('width')){
				slide_width = $view_prev.data('width');
				slide_height = $view_prev.data('width') / ratio;
			}else{
				slide_height = $view_prev.data('height');
				slide_width = ratio * $view_prev.data('height');
			}
		}else{
			$slider.width('100%');
			var slide_height = $view_prev.height();
			var slide_width = $view_prev.width();
		}
		

		$slider.animate({
			height : slide_height+border_height*2,
			width : slide_width+border_height*2
		})

		$('.slider .view').show();
		$view.hide();
		$view.removeClass('view');
	});
});