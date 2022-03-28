"use strict";
document.write(
"<!--[if lte IE 9]>"
+ "<script type='text/javascript' src='//cdnjs.cloudflare.com/ajax/libs/jquery-ajaxtransport-xdomainrequest/1.0.3/jquery.xdomainrequest.min.js'></script>"
+ "<script type='text/javascript'>alert('브라우저를 최신 버전으로 업그레이드하세요.'); window.open('http://outdatedbrowser.com/ko','_blank');</script>"
+ "<![endif]-->"
);

$(function(){
    /*---------------------------------------------------------------*/	
    //variable
    let video = document.getElementById("MyVideo");
    let path = (location.href.substr(location.href.lastIndexOf("/") + 1)).split(".")[0]; 	//path
    let split = (location.href.substr(location.href.lastIndexOf("/") + 1)).split("&idx")[1]; //split
    let detailPath = ((location.href.substr(location.href.lastIndexOf("=") + 1)).slice(0, 2) - 1 + 1) - 1; //detail Path

// header
// top 버튼
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    $("#top-btn").fadeIn(1500);
	return false;
  } else {
    $("#top-btn").fadeOut(1500);
	return false;
  }
}

$("#top-btn").on("click", function() {
	$("html,body").animate({scrollTop:0}, 1000, "swing");
	return false;
});
// body
switch(path) {
    case '' :

    // index
    case 'index' :
		// index swipers
		for(var i = 0; i < img[0]; i++){
			$(".visual .Swipers .swiper-image").append(
				'<div class="swiper-slide">' + 
					'<div style="background-image:url(' + url +'main/'+  (i + 1) + '.jpg)"></div>' + 
				'</div>'
			);
		} Swipers(".visual", "auto", true, 0, false);

		videoControl(video);
		// videoControl2(video);
		$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/'+ account +'/8',
		function(data){
			for(var i = 0; i < img[2].length; i++) {
				$(".room_swiper .swiper2 .swiper-image").append(
					'<div class="swiper-slide">' + 
						'<div style="background-image:url(' + url + '/room/' + (i + 1) + '/1.jpg)"></div>' + 
						'<div class="rooms_info">' +
							'<div class="Box">' +
								'<h5>' +
									'<span>Pension Room & View</span>' +
									'<strong>' + data.result[i]["TYPE_NM_EN"] + '호</strong>' +
									'<p>비품안내 : ' + data.result[i]["INTERIOR"] + '</p>'+
								'<h5>' +
								'<div class="line"></div>' +
								'<a href="rooms.html?num=' + (i + 1) +'">DETAIL VIEW</a>' +
							'</div>' +
						'</div>' +
					'</div>'
				);
			} Swipers2(".room_swiper", "auto", true, 100, false);
		});

		$(".visual h1 strong").css({"transform":"translateY(0)","opacity":"1"}); 

		// index video
		let video_size = $('#index .visual .MyVideo');
		video_size.css('height', Math.round(video_size.width() / 16 * 9) + 'px');

		$(window).resize(function() {
			video_size.css('height', Math.round(video_size.width() / 16 * 9) + 'px');
		});

		// index parallax
		$(window).on("scroll", function() {
			var thisTop = $(this).scrollTop(); 
			
			// reservation
			var a = $(".index .reserve").offset().top - $(window).height();

			if(thisTop > a) {
				$(".index .reserve .reserve_bg").css({"transform":"translateY(-" + (thisTop - a) / 5.75  + "px)"});
			} else {
				$(".index .reserve .reserve_bg").css({"transform":"translateY(0)"});
			}

			var start1 = $(".section").eq(1).find("h3").offset().top - $(".section").height();
			var start2 = $(".section").eq(2).find("h3").offset().top - $(".section").height();
			var start3 = $(".section").eq(3).find("h3").offset().top - $(".section").height();
			var start4 = $(".section").eq(4).find("h3").offset().top - $(".section").height();
			
			var start5 = $("#index .info .movieWrap .movie").offset().top - $(".section").height();
			var start6 = $("#index .rooms .roomsWrap").offset().top - $(".section").height();
			var start7 = $("#index .gallery > div ").offset().top - $(".section").height();
			var start8 = $("#index .reserve .reserveWrap").offset().top - $(".section").height();

			if((thisTop > start1) && (thisTop < start2)) animated(1);
			else if((thisTop > start2) && (thisTop < start3)) animated(2);
			else if((thisTop > start3) && (thisTop < start4)) animated(3);
			else if(thisTop > start4) animated(4);
			
			
			if((thisTop > start5) && (thisTop < start6)){
				$("#index .info .movieWrap").css({"opacity":"1","transform":"translateY(0)"});
			}else if((thisTop > start6) && (thisTop < start7)){
				$("#index .rooms .roomsWrap .Swipers").css({"opacity":"1","transform":"translateY(0)"});
			}else if((thisTop > start7) && (thisTop < start8)){
				$("#index .gallery > div").css({"opacity":"1","transform":"translateY(0)"});
			}else if((thisTop > start8)){
				$("#index .reserve .reserveWrap").css({"opacity":"1","transform":"translateY(-50%)"});
			}

			function animated(e){
				$(".section").eq(e).find("h3 strong").css({"opacity":"1","transform":"translateX(0)"});
			}

		});
		break;

	case 'about' :
		$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/'+ account +'/4',//사업자 정보
			function(data){
				var NEW_USER_ADDR = data.result.NEW_USER_ADDR;	//도로명 주소
				var USER_ADDR = data.result.USER_ADDR;			//지번 주소
				var USER_TEL1 = data.result.USER_TEL1;			//전화번호 1
				var USER_TEL2 = data.result.USER_TEL2;			//전화번호 2
			
			// about swiper
			$(".about .visual").append(
				'<div class="Swipers">' +
					'<div class="swiper-view">' +
						'<div class="InBox">' +
							'<div class="swiper-container swiper">' +
								'<div class="swiper-wrapper swiper-image"></div>' +
								'<div class="swiper-button-next swiper-btn"></div>' +
								'<div class="swiper-button-prev swiper-btn"></div>' +
								'<div class="swiper-pagination"></div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>'
			);

			$("#about .visual h1 strong").css({"transform":"translateY(0)","opacity":"1"}); 

			for(var i = 0; i < img[1]; i++){
				$(".visual .Swipers .swiper-image").append(
					'<div class="swiper-slide">' + 
						'<div style="background-image:url(' + url + 'exterior/' + (i + 1) + '.jpg)"></div>' + 
					'</div>'
				);
			} Swipers(".visual", "auto", true, 0, false);

			//about movie
			$("#about .movie .movieWrap").append(
				'<div class="about_square">' +
					'<iframe src="'+ about_vid[0]  +'" alt="" width="100%" height="" allow="autoplay" frameborder="0" allowfullscreen></iframe>' +
				'</div>'
			);

			//about scrolling
			$("#about .scrolling .left").append(
				'<h3><b>WELCOME,</b><b>TO HAEGEURAMI</b></h3>' +
				'<div class="left_img"><div class="bg"></div></div>'
			);

			$("#about .scrolling .right").append(
				'<div class="right_img"><div class="bg"></div></div>'+
				'<h3><strong>IMPRESSIVE OCEAN VIEW</strong>' + 
					'<p>' + about_txt[2][0].replace(/\n/g, "<br />") + '</p>' +
				'</h3>'
			);

			//about location
			$("#about .location h3").append(
				'<strong>LOCATION</strong>' +
				'<p>' +
					'<span><b>주소 :</b>&nbsp;' + USER_ADDR  + '</span>' +
					'<span><b>TEL :</b>&nbsp;' + USER_TEL1  + '</span>' +
				'</p>'
			);

			$(window).on("scroll", function() {
				var thisTop = $(this).scrollTop(); 

				var start1 = $("#about .scrolling").offset().top - $(".section").height();
				var start2 = $("#about .movie").offset().top - $(".section").height();
				
				if(thisTop > start1) {
					$("#about .left").css({"opacity":"1","transform":"translateY(0)"});
					$("#about .right").css({"opacity":"1","transform":"translateY(0)"});
				}

				if(thisTop > start2) {
					$("#about .movieWrap").css({"opacity":"1","transform":"translateY(0)"});
				}

			});	

		});
		break;

	case 'travel' :
		$.getJSON("http://digitalnow.co.kr/reserve/pensionInfo/" + account + "/10", 
		function(data){
			let orderedList = [];
			for (let i = 0; i < data.result.length; i++){
				for (let j = 0; j < data.result.length; j++){
					if (Number(data.result[j]["ORDER_NUM"]) - 1 === i) orderedList.push(data.result[j]);
				}
			}
			$.each(data.result,function(key,val){
				$(".contents .InBox ul").append(
					'<li>' +
						'<div class="img"><img src="images/travel/'+ (key + 1) +'.jpg" width="100%" height="auto" alt="" /></div>' +
						'<div class="txt">' +
							'<h4>' +
								'<strong>'+ orderedList[key]["TITLE"] +'</strong>' +
								'<span>&nbsp;|&nbsp; '+ orderedList[key]["DISTANCE"] +'</span>' +
							'</h4>' +
							'<span>'+ orderedList[key]["CONTENT"] +'</span>' +
						'</div>' +
					'</li>'
				);
			});
		});
		break;

	case 'rooms' :
		// 객실 넘버링
		$("body").addClass("rooms_" + numbering(detailPath));

		$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/'+ account +'/8',
		function(data){
			var TYPE_NAME = data.result[detailPath]["TYPE_NAME"];				//객실타입명(EN)
			var TYPE_DESC = data.result[detailPath]["TYPE_DESC"];				//객실타입명(KR)
			var TYPE_CONTENT = data.result[detailPath]["TYPE_CONTENT"];			//객실타입설명
			var TYPE_NM = data.result[detailPath]["TYPE_NM"];					//객실명(KR)
			var TYPE_NM_EN = data.result[detailPath]["TYPE_NM_EN"];				//객실명(EN)

			var ROOM_TYPE = data.result[detailPath]["ROOM_TYPE"];				//객실정보
			var ROOM_EXTN = data.result[detailPath]["ROOM_EXTN"] ;				//객실평수
			var FLHT_ROOM_CNT = data.result[detailPath]["FLHT_ROOM_CNT"]; 		//객실침실(침대)
			var ADLT_BASE_PERS = data.result[detailPath]["ADLT_BASE_PERS"];		//객실인원(기준)
			var ADLT_MAX_PERS = data.result[detailPath]["ADLT_MAX_PERS"];		//객실인원(최대)
			var ETC_DETL = data.result[detailPath]["ETC_DETL"];					//객실상세
			var INTERIOR = data.result[detailPath]["INTERIOR"].split(',');		//객실비품

			//rooms visual
			videoControl(video);
			
			$(".Slides #Mov h1").append(
                 	'<span>' + TYPE_NM_EN +' </span>'
			);

			$(".rooms #Mov iframe").attr('src', rooms_vid[detailPath]);

			$(".Slides #nav  a").css({"display":"none"});

			$(".rooms .Swipers").append(
				'<div class="swiper-view">' +
					'<div class="InBox">' +
						'<div class="swiper-container swiper">' +
							'<div class="swiper-wrapper swiper-image"></div>' +
							'<div class="swiper-button-next swiper-btn"></div>' +
							'<div class="swiper-button-prev swiper-btn"></div>' +
							'<div class="swiper-pagination"></div>' +
						'</div>' +
					'</div>' +
				'</div>'
			);
			$("#rooms .visual h1 strong").css({"transform":"translateY(0)","opacity":"1"}); 
		

			for(var i = 0; i < img[2][detailPath]; i++){
				$(".rooms .Swipers .swiper-image").append(
					'<div class="swiper-slide">' + 
						'<div style="background-image:url(' + url + 'room/' + (detailPath + 1) + '/' + (i + 1) + '.jpg)"></div>' + 
					'</div>'
				);
			} Swipers(".notice", "auto", true, 100, false);
			
			// rooms tab 및 menu 중복값 체크
			var arr1 = new Array();
				$.each(data.result,function(key,val){
					var sorts = val["SORT_NO"] - 1;
					arr1.push(data.result[sorts]["TYPE_NAME"]);
			});

			// 중복값체크
			var arr2 = arr1.reduce(function(a,b){
				if(a.indexOf(b) < 0) a.push(b);
				return a;
			},[]);
			
			// 일치하는 인덱스값 반환
			var first = new Array();
			var last = new Array();
			for(var n = 0; n < arr1.length; n++){
				for(var c = 0; c < arr2.length; c++){
					if(arr1[n] == arr2[c]) first.push(arr1.indexOf(arr2[c]));
					if(arr1[n] == arr2[c]) last.push(arr1.lastIndexOf(arr2[c]));
				}
			}
		
			// 증복값 체크
			var arr4 = first.reduce(function(a,b){
				if(a.indexOf(b) < 0) a.push(b);
				return a;
			},[]);

			var arr5 = last.reduce(function(a,b){
				if(a.indexOf(b) < 0) a.push(b);
				return a;
			},[]);

			

			// rooms notice
			for(var i = 0; i < arr4.length; i++) {
				for(var e = arr4[i]; e < arr5[i] + 1; e++) {
					$(".visual .line .tabs").eq(i).append(
						'<li class="tab">' +

							'<a href="rooms.html?num=' + numbering(e) + '">' + data.result[e]["TYPE_NM_EN"] + '</a>' +
						'</li>' 
					);
				}
			}

			$(".notice h3").append(
				'<strong>ROOM&nbsp;' + TYPE_NM + '</strong>' +
				'<span>' + room_txt[0][0].replace(/\n/g, "<br />") + '</span>' 
			);

			// rooms gallery
			$(".gallery .gallery_top .gallery_right").append(
				'<div class="circle_wrap">' +
					'<div style="background:url(https://gonylab8.speedgabia.com/heagrami/room/' + (detailPath + 1)  +'/1.jpg) no-repeat 50% 50%; background-size:cover;"></div>' +
				'</div>'
			);
			
			$(".gallery .gallery_top .gallery_left").append(
				'<h3>Detail</h3>' +
				'<ul>' +
					'<li><span class="tl">Roomtype</span><span class="tx">'+ ROOM_TYPE +'</span></li>' +
					'<li><span class="tl">Criteria</span><span class="tx">기준 '+ ADLT_BASE_PERS +'명 ~ 최대 '+ ADLT_MAX_PERS +'명</span></li>' +
					'<li><span class="tl">Overstaffed</span><span class="tx">기준인원 초과시 추가요금 발생</span></li>' +
					'<li><span class="tl">Time</span><span class="tx checkInOut">체크인 15:00 / 체크아웃 11:00</span></li>' +
					'<li><span class="tl">Supplies</span><ul class="eq"></ul></li>' +
					// '<li class="etc"><span class="tl">특이사항</span><span class="tx">'+ ETC_DETL +'</span></li>' +
				'</ul>'	+
				'<a href="reserve.html?reserve=rv" class="rsv_btn">실시간 예약하기</a>'
			);

			//INTERIOR
			for(var e = 0; e < INTERIOR.length; e++) $(".eq").append('<li>' + INTERIOR[e] + ',</li>');	
			var last = $(".eq li").eq(INTERIOR.length - 1).text().replace(/,/g, '');
			$(".eq li").eq(INTERIOR.length - 1).text(last);
				
			$(window).on("scroll", function() {
				var thisTop = $(this).scrollTop(); 
				var start1 = $("#rooms .gallery_top").offset().top -$(window).height();
				
				if((thisTop > start1) ) {
					$("#rooms .gallery_right .circle_wrap div").css({"opacity":"1","transform":"translateY(" + (thisTop - start1) / 6.37 + "px)"});
				} else {
					$("#rooms .gallery_right .circle_wrap div").css({"opacity":"1","transform":"translateY(0)"});
				}
			});

			// rooms menu
			$(".menu").append(
				'<h3>' + 
					'<strong>Another Rooms</strong>' +
					'<span>햇살 비치는 바다가 스며든 포근한 공간</span>' +
				'</h3>' +
				'<div class="Swipers">' +
					'<div class="swiper-view">' +
						'<div class="InBox">' +
							'<div class="swiper-container swiper2">' +
								'<div class="swiper-wrapper swiper-image"></div>' +
								'<div class="swiper-button-next swiper-btn"></div>' +
								'<div class="swiper-button-prev swiper-btn"></div>' +
								'<div class="swiper-pagination second"></div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>'
			);

			for(var i = 0; i < arr4.length; i++){
				for(var e = arr4[i]; e < arr5[i]+1; e++){
					$(".menu .Swipers .swiper-image").eq(i).append(
						'<div class="swiper-slide">'+ 
								'<a href="rooms.html?num='+ numbering(e) + '"><div style="background-image:url(http://gonylab8.speedgabia.com/heagrami/room/'+ (e + 1) + '/1.jpg);  height=430px;"></div></a>' + 
								// '<span class="ko">' + data.result[e]["ROOM_TYPE"] + '</span>' +
								'<span class="ko">펜션</span>' +
								'<span class="en">#&nbsp;' + data.result[e]["TYPE_NM_EN"]  + '호</span>' + 
								'<a href="rooms.html?num='+ numbering(e) +'" class="resv">MORE VIEW</a>' +
						'</div>'
					);
				}	
			} Swipers2(".menu", "auto", false, 0, false);

			// 201gh tk
			

			// $(".menu .swiper-slide").css("height",$(".menu .swiper-slide").width() / 6 * 4);
			// $(window).on("resize", function() {
			// $(".menu .swiper-slide").css("height",$(".menu .swiper-slide").width() / 6 * 4);	
			// });

			// $(".menu .swiper-slide a div").css("height",$(".menu .swiper-slide a div").width() / 6 * 4);
			// $(window).on("resize", function() {
			// $(".menu .swiper-slide a div").css("height",$(".menu .swiper-slide a div").width() / 6 * 4);	
			// });
			
		});

		$(window).on("scroll", function() {
			var thisTop = $(this).scrollTop(); 

			var start1 = $("#rooms .notice").offset().top - $(".section").height();
			var start2 = $("#rooms .gallery").offset().top - $(".section").height();
			
			if(thisTop > start1) {
				$("#rooms .notice h3").css({"opacity":"1","transform":"translateY(0)"});
				$("#rooms .notice .Swipers").css({"opacity":"1","transform":"translateY(0)"});
			}

			if(thisTop > start2) {
				$("#rooms .gallery .gallery_left").css({"opacity":"1","transform":"translateY(0)"});
			}

		});	
		break;
	
	case 'camping' :
		// camping intro
		$(".visual h1 strong").css({"transform":"translateY(0)","opacity":"1"}); 

		videoControl(video);
		for(var i = 0; i < img[3][1]; i++){
			$(".Slides .slide").append('<li id="i'+ numbering(i) +'" style="background-image:url('+ url +'/camping/'+ '/' + (i + 1) +'.jpg)"></li>');
		} Slides("Slides","slide > li");	

		$(".camping #Mov iframe").attr('src', camping_vid[0]);
		

		for(var i = 0; i < img[3][0]; i++){
			$(".visual .Swipers .swiper-image").append(
				'<div class="swiper-slide">' + 
					'<div style="background-image:url(' + url + 'camping/' +  (i + 1) + '.jpg)"></div>' + 
				'</div>'
			);
		} Swipers(".visual", "auto", true, 0, false);

		$(".camping .intro").append(
			'<h3><strong>해그라미 부대시설 위치안내</strong>' +
				'<span>' + camping_txt[0][0].replace(/\n/g, "<br />") + '<span>' +
			'</h3>' +
			'<div class="camping_circle"></div>' 
		);

		$(".facility").append(
			'<div class="facilityWrap">' +
				'<div class="Swipers camp_swiper">' +
					'<div class="swiper-view">' +
						'<div class="InBox">' +
							'<div class="swiper-container swiper2">' +
								'<div class="swiper-wrapper swiper-image"></div>' +
								'<div class="swiper-button-next swiper-btn"></div>' +
								'<div class="swiper-button-prev swiper-btn"></div>' +
								'<div class="swiper-pagination"></div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>'
		);

		for(var i = 0; i < img[3][1]; i++){
			$(".facility .camp_swiper .swiper-image").append(
				'<div class="swiper-slide">' + 
					'<div style="background-image:url(' + url + 'camping_facility/' + (i + 1) + '.jpg)"></div>' + 
				'</div>'
			);
		} Swipers2(".camp_swiper", "auto", true, 100, false);

		// camping info
		$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/' + account + '/5',
			function(data){
				// 기본
				var P01_WEEK_PRCE = data.result.P01_WEEK_PRCE;
				var P01_FRD_PRCE = data.result.P01_FRD_PRCE;
				var P01_SAT_PRCE = data.result.P01_SAT_PRCE;
				// 준성수기
				var P04_WEEK_PRCE = data.result.P01_WEEK_PRCE;
				var P04_FRD_PRCE = data.result.P01_FRD_PRCE;
				var P04_SAT_PRCE = data.result.P01_SAT_PRCE;
				// 성수기
				var P05_WEEK_PRCE = data.result.P01_WEEK_PRCE;
				var P05_FRD_PRCE = data.result.P01_FRD_PRCE;
				var P05_SAT_PRCE = data.result.P01_SAT_PRCE;

			$(".camping .info").append(

				'<div class="map_left">' +
					'<div class="left_img"><img src="https://gonylab8.speedgabia.com/heagrami/camping/camping_map.jpg" alt="" width="100%" height="100%"></div>' +
				'</div>' +
				'<div class="map_right">' +
						'<h3>캠핑장 구조 안내</h3>' +
						'<p>' + 
							'<span>1. 캠핑장 데크(1 ~ 9번)</span>' +
							'<span>2. 개수대</span>' +
							'<span>3. 화장실</span>' +
							'<span>4. 샤워장 및 해그라미 본관</span>' +
						'</p>' +
					'</h3>' +
				'</div>' +
				'<ul></ul>'
			);

			$(window).on("scroll", function() {
				var thisTop = $(this).scrollTop(); 

				var start5 = $("#camping .intro").offset().top;
				var start6 = $("#camping .facility").offset().top - $(".section").height();
				
				if((thisTop > start5) ) {
					$(".camping_circle").css({"opacity":"1","transform":"scale(1)"});
				}
			});

			for(var i = 1; i < room_txt.length; i++) {
				$(".info ul").append(
					'<li>' + camping_txt[i] + '</li>'
				);
			}
		});
		break;
	
	case 'cafe' :
		// cafe intro

		$(".visual h1 strong").css({"transform":"translateY(0)","opacity":"1"}); 

		videoControl(video);
		for(var i = 0; i < img[4]; i++){
			$(".Slides .slide").append('<li id="i'+ numbering(i) +'" style="background-image:url('+ url +'/cafe/'+ '/' + (i + 1) +'.jpg)"></li>');
		} Slides("Slides","slide > li");	

		$(".cafe #Mov iframe").attr('src', cafe_vid[0]);

		for(var i = 0; i < img[4]; i++){
			$(".visual .Swipers .swiper-image").append(
				'<div class="swiper-slide">' + 
					'<div style="background-image:url(' + url + 'cafe/' + (i + 1) + '.jpg)"></div>' + 
				'</div>'
			);
		} Swipers(".visual", "auto", true, 0, false);

		// cafe gallery
		$(".gallery h3").append(
			'<h3>' +
				'<span>아늑한 카페에서 포근함을</span>' +
				'<strong>Haegeurami cafe</strong>' +
			'</h3>'
		);

		$(".gallery .info").append(
			'<li><span class="tl">Open</span><span class="tx">09:00</span></li>' +
			'<li><span class="tl">Close</span><span class="tx">21:00</span></li>' +
			'<li><span class="tl">Tel</span><span class="tx">010-9554-1135</span></li>' 
		);

		$(".gallery .view_up").append(
			'<div class="view_left"></div>' +
			'<div class="view_right">' +
				'<div></div>' +
				'<div></div>' +
			'</div>' 
		);

		$(".gallery .view_down").append(
			'<div class="bottom">' +
				'<div class="left"></div>' +
				'<div class="right"></div>' +
			'</div>' 
		);
		
		$(window).on("scroll", function() {
			var thisTop = $(this).scrollTop(); 

			var start1 = $("#cafe .gallery .view_up").offset().top - $(".section").height();
			var start2 = $("#cafe .gallery .view_down").offset().top - $(".section").height();
			
			if(thisTop > start1) {
				$("#cafe .gallery .view_up").css({"opacity":"1","transform":"translateY(0)"});
			}

			if(thisTop > start2) {
				$("#cafe .gallery .bottom").css({"opacity":"1","transform":"translateY(0)"});
			}

		});
		  
		
		break;

	case 'notice':
		// notice snb button
		$(".contents .snb li a").on("click",function(){ 
			var nb = $(this).parent("li").index();
			$(".contents .snb > li").removeClass("active");
			$(".contents .snb > li").eq(nb).addClass("active");
		
			if(nb == 0){
				$("#Banner .ttls b").text("NOTICE");
				$("#Banner .ttls strong").text("NOTICE");

				$(".frame h3 strong").text("공지사항");
				$(".frame h3 span").text("공지사항과 다양한 소식을 확인해보세요.");
				$(".frame iframe").attr("src","/board/bbs/board.php?bo_table=notice");
			}else if(nb == 1){
				$("#Banner .ttls b").text("Q&A");
				$("#Banner .ttls strong").text("Q&A");
			
				$(".frame h3 strong").text("문의사항");
				$(".frame h3 span").text("해그라미 펜션&캠핑에 무엇이든 물어보세요.");
				$(".frame iframe").attr("src","/board/bbs/board.php?bo_table=qa");
			} return false;
		});
		break;
		
	case 'reserve' :
		// reserve button
		$(".contents .snb li a").on("click",function(){ 
			var nb = $(this).parent("li").index();
			$(".contents .snb > li").removeClass("active");
			$(".contents .snb > li").eq(nb).addClass("active");

			if(nb == 0){
				$("#Banner .ttls b").text("RESERVATION");
				$("#Banner .ttls strong").text("RESERVATION");
				$(".frame").hide(); $(".frame_01").show();
			}else if(nb == 1){
				$("#Banner .ttls b").text("GUIDE");
				$("#Banner .ttls strong").text("GUIDE");
				$(".frame").hide(); $(".frame_02").show();
			} return false;
		}); reserInfo(account);
		break;
    default : location.href = "index.html";
    break;
}

//footer
$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/'+ account +'/4',	//User Info
	function(data){
		const USER_TEL1 = data.result.USER_TEL1;				//전화번호 1
		const USER_TEL2 = data.result.USER_TEL2;				//전화번호 2
		const NEW_USER_ADDR = data.result.NEW_USER_ADDR;		//도로명주소
		const USER_ADDR = data.result.USER_ADDR;				//지번주소
		const BUSI_NM = data.result.BUSI_NM;					//상호명
		const USER_ACCO = data.result.USER_ACCO;				//계좌번호
		const COMM_SALE_NO = data.result.COMM_SALE_NO;			//통신판매업번호
		const BUSI_NO = data.result.BUSI_NO;			//사업자번호
		const BUSI_PRE_NM = data.result.BUSI_PRE_NM;			// 대표자

		$("footer").append(
			'<div class="footerWrap">' +
				'<ul class="ft_menu">' +
					'<li><a href="about.html">ABOUT</a></li>' +
					'<li><a href="rooms.html?num=02">ROOMS</a></li>' +
					'<li><a href="camping.html">CAMPING</a></li>' +
					'<li><a href="cafe.html">CAFE</a></li>' +
					'<li><a href="travel.html">TRAVEL</a></li>' +
					'<li><a href="reserve.html?reserve=rv">RESERVATION</a></li>' +
				'</ul>' +
				'<div class="ft_logo">' +
            		'<a href="index.html"><img src="images/ft_logo.svg" alt="푸터로고" width="167" height="176"></a>' +
        		'</div>' +
				'<div class="ft_sns">' +
            		'<div class="sns_01"><a href="https://www.instagram.com/haegeurami_/" target="_blank"><img src="images/ft_sns_01.png" alt="인스타그램" width="40" height="40"></a></div>' +
            		// '<div class="sns_02"><a href="#"><img src="images/ft_sns_02.png" alt="카톡" width="40" height="40"></a></div>' +
        		'</div>' +
				'<div class="ft_number">' + 
					'<b>TEL :</b>'+ '<span>' + USER_TEL1 + '</span>' +
				'</div>' +
        		'<div class="ft_info">' +
					'<ul class="ft_info_menu">' +
						'<li><b>상호명 : </b>&nbsp;' + BUSI_NM + '<em>ㅣ</em></li>' +
						'<li><b>주소 : </b>&nbsp;' + USER_ADDR + '<em>ㅣ</em></li>' +
						'<li><b>사업자 등록번호 : </b>&nbsp;' + BUSI_NO + '<em>ㅣ</em></li>' +
						'<li><b>대표 :&nbsp;</b>&nbsp;' + BUSI_PRE_NM + '</li>' +
					'</ul>' +
				'</div>' +
				'<em class="copyright">홈페이지 제작 ㅣ GONYLAB</em>' +
			'</div>'
		);

		//sns - href
		$(".sns_01").attr("href",INTRAGRAM); 
		$(".sns_02").attr("href",FACEBOOK); 
		$(".sns_03").attr("href",NV_BLOG);
		$(".sns_04").attr("href",NV_CAFE);
		$(".sns_05").attr("href",KAKAO);

		if(INTRAGRAM == "#"){$(".sns_01").on('click',function(){alert('준비중입니다.');return false;});}
		if(FACEBOOK == "#"){$(".sns_02").on('click',function(){alert('준비중입니다.');return false;});}
		if(NV_BLOG == "#"){$(".sns_03").on('click',function(){alert('준비중입니다.');return false;});}
		if(NV_CAFE == "#"){$(".sns_04").on('click',function(){alert('준비중입니다.');return false;});}
		if(KAKAO == "#"){$(".sns_05").on('click',function(){alert('준비중입니다.');return false;});}
	});
});

//function - numbering
function numbering(n) { // 이미지 넘버링 10 보다 작을때
	var num = ''; var n = n + 1; var n = n.toString();
	if (n.length < 2){for (var i = 0; i < 2 - n.length; i++){num += '0';}}
	return num + n;
}

//function - swipers
function Swipers(value, view, center, Between, boolean){
	var swiper = new Swiper(value + ' .swiper', {
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		pagination: '.swiper-pagination',
		slidesPerView: view,
		centeredSlides: center,
		spaceBetween: Between,
		loop: boolean
	});
}

function Swipers2(value, view, center, Between, boolean){
	var swiper = new Swiper(value + ' .swiper2', {
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		pagination: '.swiper-pagination',
		slidesPerView: view,
		centeredSlides: center,
		spaceBetween: Between,
		loop: boolean
	});
}

//function - video
function videoControl(control){
	videoScale(control);
	$(window).on("resize",function(){ 
		videoScale(control); 
	});
	$(window).on("scroll",function(){
		var thisTop = $(this).scrollTop();
		var stopTop = $("section > div:first-child").height() - 100;
		var player = new Vimeo.Player(control);
		if(thisTop > stopTop) player.pause();
		else player.play();
	});
}

//function - video
function videoControl2(control){
	$(window).on("scroll",function(){
		var thisTop = $(this).scrollTop();
		var stopTop = $("#index .vid").offset().top;
		var player = new Vimeo.Player(control);
		if(thisTop > stopTop) player.play();
		else player.pause();
	});
}

function videoControl3(control){
	$(window).on("scroll",function(){
		var thisTop = $(this).scrollTop();
		var stopTop = $("#index .visual .MyFrame").offset().top;
		var player = new Vimeo.Player(control);
		if(thisTop > stopTop) player.play();
		else player.pause();
	});
}

//function - videocontrol
function videoScale(control){
	if($(window).width() < 1000){
		control.style.width = (Math.round($(window).height() / 9 * 16) + 30) + "px";
		control.style.height = (Math.round($(window).width() / 16 * 9) + 30) + "px";	
	}else{
		control.style.width = Math.round($(window).height() / 9 * 16) + "px";
		control.style.height = Math.round($(window).width() / 16 * 9) + "px";
	}
}	