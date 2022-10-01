function onYouTubeIframeAPIReady() {
  console.log('YOUTUBEYOUTUBEYOUTUBEYOUTUBE');
  player = new YT.Player('muteYouTubeVideoPlayer', {
    videoId: 'OJjOfUUu60c', // YouTube 影片ID
    width: 560,               // 播放器寬度 (px)
    height: 560,              // 播放器高度 (px)
    playerVars: {
      rel: 0,
      autoplay: 0,        // 在讀取時自動播放影片
      controls: 1,        // 在播放器顯示暫停／播放按鈕
      showinfo: 0,        // 隱藏影片標題
      modestbranding: 1,  // 隱藏YouTube Logo
      loop: 0,            // 讓影片循環播放
      fs: 0,              // 隱藏全螢幕按鈕
      cc_load_policty: 0, // 隱藏字幕
      iv_load_policy: 3,  // 隱藏影片註解
      autohide: 0         // 當播放影片時隱藏影片控制列
    },
    events: {
      onReady: onPlayerReady
    }
  });
}
$(document).ready(function(){
  $('#fullpage').fullpage({
		licenseKey: '6DD296C8-D79744AD-A810111D-223025C0',
		// Header
		// fixedElements: '#header',
		// paddingTop: '3em',
		// paddingBottom: '10px',
		// Navigation
		scrollOverflow: true,
		bigSectionsDestination: 'top',
		menu: '#menu',
		navigation: true,
		navigationPosition: 'right',
		anchors: ['firstPage', 'secondPage', '3Page', '4Page', '5Page', '6Page'],
		// navigationTooltips: ['首頁', 'Easy省', 'Easy裝', 'Easy煮', '神隊友', '音樂下載'],
		showActiveTooltip: true,
		fadingEffect:true,
		//effect
		waterEffect: true,
		waterEffectKey: '6B7F2B24-D9BE4504-850425E5-55D12A63',
		// More info on https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Water-Effect
    waterEffectOptions: {
			animateContent: true,
			animateOnMouseMove: true
		},
    onLeave: function(origin, destination, direction){
      var leavingSection = this;
      console.log('onLeave:====================');
      console.log('onLeave:origin', origin.index);
      console.log('onLeave:destination', destination.index);
      //當一離開index，首頁物件動畫
      if((direction == 'down' && origin.index == 0 )) {
        console.log('onLeave');
				// $('#entrance .slogan_img.animated').removeClass('flash').addClass('fadeOut');
				// $('#entrance .function_img > div').removeClass('fadeInUp').addClass('fadeOut');
    	}
			//當一離開index，首頁物件動畫
			if((destination.index == 1)) {
				console.log('onLeave');
				// $('#function1 .title_outer.animated').addClass('fadeInUp');
	 		}
			if((destination.index == 2)) {
				console.log('onLeave');
				// $('#function2 .title_outer.animated').addClass('fadeInUp');
	 		}
			 if((destination.index == 3)) {
				console.log('onLeave');
				// $('#function3 .title_outer.animated').addClass('fadeInUp');
	 		}
			if((destination.index == 4)) {
				// modal影片設定 - 收起時影片自動結束
        $(".modal").on('hide.bs.modal', function(e) {
						$('.video').attr('src', '');
				});
				$(".modal").on('show.bs.modal', function(e) {
						var target = $($(e.relatedTarget).data('target'));
						var url = $(e.relatedTarget).data('url');
						target.find('.video').attr('src', url);
				});
			}
    },
		afterLoad: function(origin, destination, direction){
			var leavingSection = this;
			//當從任何頁面回到index0時的動畫
      if((direction == 'up' && destination.index == 0)){
				// $('#entrance .slogan_img.animated').addClass('flash').removeClass('fadeOut');
				// $('#entrance .function_img > div').addClass('fadeInUp').removeClass('fadeOut');
      }
		}
	});
	var modal_target = null;
  var modal_click_target = null;
  // modal影片設定 - 打開影片時不可滑動
  $(".modal").on('show.bs.modal', function(e) {
		var target = $($(e.relatedTarget).data('target'));
		var url = $(e.relatedTarget).data('url');
		target.find('.video').attr('src', url);
		fullpage_api.setAllowScrolling(false);
  });

  // modal影片設定 - 收起時影片自動結束
  $(".modal").on('hide.bs.modal', function(e) {
		$('.video').attr('src', '');
		fullpage_api.setAllowScrolling(true);
  });

	$('.accordion').on('hidden.bs.collapse', function () {
		fullpage_api.reBuild();
	});
});