var url = "https://api.openweathermap.org/data/2.5/weather";
url  += "?appid=f98e648c60dee9415bd3b65e176b86ca";
url  += "&units=metric";
url  += "&lang=kr";
url  += "&q=";


// 현재 날씨의 모든 정보 얻어오기
function getCurrentWeather(city) {
    var temp;
    var openweatherAPI=url;

    $.ajax({
        type: "GET",
        url: openweatherAPI += city,
        dataType: "json",
        async: false, // 결과 데이터를 리턴시키기 위해 동기 방식으로 변경
        success: function(data) {
            //정상 응답시 처리 작업 
            temp = Math.floor(data.main.temp); //소수점 버림
        },
        error: function(request, status, error) {
            //응답 에러시 처리 작업    
            console.log("code:" + request.status);
            console.log("message:" + request.responseText);
            console.log("error:" + error);
        }
    });

    return temp;
}

// 현재 날씨 온도 얻어오기 
function getCurrentTemp(city) {

}