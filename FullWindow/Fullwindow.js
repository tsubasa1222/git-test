$(function(){
			// 関数名
	var FullWindow = function($){
	// 関数FullWindow で使う変数と関数をあらかじめ定義
			var module,
				windowHeight,
				nextButton,
				prevButton,
				count,
				CountModule,
				next,
				prev,
				init;

		 	init = function(){
					// 初期設定
				module = $('.FullWindow__item');
				windowHeight = $(window).height();
				module.css('height',windowHeight);
			 	nextButton = $('.FullWindow__button--next');
				prevButton = $('.FullWindow__button--prev');
			 	count = 1 ;

				CountModule();
				
				// セット
				next();
				prev();
			};
			CountModule = function(){
				if( count ==  1){
					prevButton.hide();
				}else if ( count >= module.length){
					// countが5以上の時、nextButton非表示
					nextButton.hide();
				}else {
					prevButton.show();
					nextButton.show();
				}
			};
			next = function(){

				nextButton.on('click',function(){
					
				count = count + 1;

				CountModule();	
				// クリックしたらボタンのhrefの中身を変更
				$(this).attr('href','#' + count);
					

				});
			};
			prev = function(){
			
				prevButton.on('click',function(){
					
				count = count - 1;

				CountModule();					
					
				// クリックしたらボタンのhrefの中身を変更
				$(this).attr('href','#' + count);


				});
			};
		return{ 
			init : init
		}
	}(jQuery);
	
	FullWindow.init();

});
