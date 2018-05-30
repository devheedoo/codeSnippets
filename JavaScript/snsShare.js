/**
 * SNS 간편 공유 (한글 인코딩 적용)
 * 2017. 03. 15. 김희도
 * @param {string} sns : twitter, facebook, naverBlog, kakaostory 중 하나.
 * @param {string} url : 공유 링크.
 * @param {string} title : 공유 제목(optional). 따로 설정하지 않을 경우 페이지 title 값으로 설정됨.
 * @returns
 * ex) snsShare('twitter', 'http://www.twitter.com', '트위터');
 * ex) snsShare('facebook', 'http://www.facebook.com');
 */
function snsShare(sns, url, title) {
	// !!! NFRI HTTPS URL 설정
	var urlSplit = url.split('http://');
	if (urlSplit.length == 2) {
		url = 'https://' + urlSplit[1];
	}
	// 공유 링크 맵
	if (title == undefined) {
		title = document.title;
	}
	var shareLinkMap = {
		twitter: 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(title)
			+ '&url=' + encodeURIComponent(url),
		facebook: 'https://www.facebook.com/sharer.php?title=' + encodeURIComponent(title)
			+ '&u=' + encodeURIComponent(url),
		naverBlog: 'http://blog.naver.com/openapi/share?title=' + encodeURIComponent(title)
			+ '&url=' + encodeURIComponent(url),
		kakaostory: 'https://story.kakao.com/share?url=' + encodeURIComponent(url)
	};
	window.open(shareLinkMap[sns], 'snsShare', '');
}
