$(document).ready( function() {

	$(".ghost-featured .content").fitVids();
	
	/* Firefox flexbox fallback. */
	if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
	     $('.ghost-featured .content > div').css('display', 'block');
	}
	/* Index Templates */

		function createNewImgIndex(url, src, el) {
			$('<a href="' + url + '"><img src="' + src + '" /></a>').prependTo(el);
		}

		$('.home-template .post, .archive-template .post').each( function(){
			var postURL = $(this).find('.post-title a').attr('href');
			var firstImg = $(this).find('img:first-of-type');
			var firstImgSrc = firstImg.attr('src');
			if (typeof firstImgSrc !== 'undefined') {
				createNewImgIndex(postURL, firstImgSrc, this);
				firstImg.parent().remove();
			}
		});

	/**/

	/* Post Templates */

		function createNewImgPost(src, el) {
			$('<img src="' + src + '" width="100%" />').prependTo(el);
		}

		var singlePost = $('.post-template .post');
		var firstImg = $('.post-template .post img:first');
		var firstImgSrc = firstImg.attr('src');
		if (typeof firstImgSrc !== 'undefined') {
			createNewImgPost(firstImgSrc, singlePost);
			firstImg.parent().remove();
		}
	
	/**/

});