//userAgent Check
const dataUser = document.documentElement;
dataUser.className = dataUser.className.replace('no-js','js');
dataUser.setAttribute("data-useragent",  navigator.userAgent);
dataUser.setAttribute("data-platform", navigator.platform );

//None Mouse Rgiht click
$(document).bind("contextmenu",function(e){return false;});
$(document).bind("ondragstart",function(e){return false;});
$(document).bind("onselectstart",function(e){return false;}); 

/* ------------------------------------------------------------------------------- */
/* 실시간예약 - account */
let account = "haegeurami";


/* 실시간예약 - Type */
let type = "Y";

/* 영상 - Url */
let url = "http://gonylab8.speedgabia.com/heagrami/";

let about_vid = [
    // about
    'https://player.vimeo.com/video/677120541',
];

let rooms_vid = [
    //201
    'https://player.vimeo.com/video/677119921?autoplay=1&loop=1&background=1',
	//202
    'https://player.vimeo.com/video/677119985?autoplay=1&loop=1&background=1',
    //203
    'https://player.vimeo.com/video/677119985?autoplay=1&loop=1&background=1',
    //205
    'https://player.vimeo.com/video/677120191?autoplay=1&loop=1&background=1',
    //206
    'https://player.vimeo.com/video/677120060?autoplay=1&loop=1&background=1',
    //207
    'https://player.vimeo.com/video/677120060?autoplay=1&loop=1&background=1',
    //301
    'https://player.vimeo.com/video/677120120?autoplay=1&loop=1&background=1',
    //302
    'https://player.vimeo.com/video/677120191?autoplay=1&loop=1&background=1',
    //303
    'https://player.vimeo.com/video/677120060?autoplay=1&loop=1&background=1',
    //305
    'https://player.vimeo.com/video/677120060?autoplay=1&loop=1&background=1',
];

let camping_vid = [
    'https://player.vimeo.com/video/677524399?autoplay=1&loop=1&background=1',
];

let cafe_vid = [
    'https://player.vimeo.com/video/677524358?autoplay=1&loop=1&background=1',
];

/* 이미지 - Number */
let img = [
    //index
    [15],
    //about
    [7],
    //rooms
    [3,9,9,12,6,6,10,12,6,6,],
    // camping
    [4,3],
     // cafe
    [7],
];

/* index*/
let index_txt = [


];

let accomodation = [
    ['201호'],
    ['202호'],
    ['203호'],
    ['205호'],
    ['206호'],
    ['207호'],
    ['301호'],
    ['302호'],
    ['303호'],
    ['305호'],
]

/* about */
let about_txt = [
    ['하루 2팀을 위한 프라이빗 풀빌라\n' +
    '노출콘크리트, 단독풀빌라, 인피니티 수영장, 일몰\n' +
    '풀빌라의 프라이빗함과 감성캠핑을 동시에 즐겨보세요.\n'],

    ['전남 고흥에서 한국의 모든 것을 느끼다\n' +
    '럭셔리한 건축디자인, 깔끔한 캠핑장, 일출과 일몰\n' +
    '해그라미의 프라이빗함과 감성캠핑을 동시에 즐겨보세요.'],

    ['평범했던 일상에서 벗어나는 그 첫 발걸음.\n' +
    '전남 고흥에서 파노라마처럼 펼쳐지는\n 감동적인 오션뷰와 함께\n' +
    '특별한 하루를 꿈꿔 보세요.'],

    ['일상에서 벗어나 해그라미에서 특별한 하루를 보내보세요.'],
]

/* rooms */
let room_txt = [
    ['해그라미 펜션만의 포근하고 따스한 감성을 통해\n' +
    '완전한 쉼의 공간에 다가가다'
],

    ['- 기준인원 초과시 1인당 20,000원 추가 요금입니다.(영,유아 모든 추가요금에 포함됩니다.)'],
    ['- 숯, 그릴대여 [20,000원/2인 기준][30,000원/3인 이상] (숯 추가시 10,000원 추가)'],
    ['- 전 객실내 금연이며, 기름을 요하는 음식(생선류 및 육류)의 조리를 삼가해 주시기 바랍니다.'],
    ['- 애완동물은 고객님들의 편안한 객실을 위하여 입살할 수 없습니다.'], 
]

/* camping */
let camping_txt = [
    ['해그라미 야외 캠핑장에는 다양한 편의시설이 구비되어 있습니다.\n' +
    '야외 개수대, 실내 샤워장 및 화장실 등이 있습니다.'],

    ['- 기준인원 초과시 1인당 20,000원 추가 요금입니다.(영,유아 모든 추가요금에 포함됩니다.)'],
    ['- 숯, 그릴대여 [20,000원/2인 기준][30,000원/3인 이상] (숯 추가시 10,000원 추가)'],
    ['- 전 객실내 금연이며, 기름을 요하는 음식(생선류 및 육류)의 조리를 삼가해 주시기 바랍니다.'],
    ['- 애완동물은 고객님들의 편안한 객실을 위하여 입살할 수 없습니다.'], 
]

/* cafe */

/* ------------------------------------------------------------------------------- */
/* SNS */
let	INTRAGRAM = "https://www.instagram.com/haegeurami_/";				
let	FACEBOOK = "#";
let	NV_BLOG = "#";
let	NV_CAFE = "#";
let	KAKAO = "#";