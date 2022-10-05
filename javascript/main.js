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
		// Navigation
		scrollOverflow: true,
		bigSectionsDestination: 'top',
		menu: '#menu',
		navigation: true,
		navigationPosition: 'right',
		anchors: ['firstPage', 'secondPage', '3Page', '4Page', '5Page', '6Page', '7Page'],
		fadingEffect:true,
    onLeave: function(origin, destination, direction){
      var leavingSection = this;
      console.log('onLeave:====================');
      console.log('onLeave:origin', origin.index);
      console.log('onLeave:destination', destination.index);
			if((destination.index == 4)) {
				// modal影片設定 - 收起時影片自動結束
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
			}
			if((destination.index == 6)) {
				$('.accordion').on('shown.bs.collapse', function () {
					fullpage_api.reBuild();
				});
			}
    }
	});
});