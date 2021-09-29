var searchBtn =  document.getElementById("search-btn");
var currentCity = document.getElementById("search-bar");
var apiKey = '1030cad0c78de7152865e535624a9c04';
var todayLink = ('' + apiKey)
var forecastLink = ('');
var currentDate = document.getElementById('currentDate');
var currentTemp =  document.getElementById('currentTemp');
var currentHum =  document.getElementById('currentHum');
var windSpeed = document.getElementById('windSpeed');
var uvIndex =  document.getElementById('uvIndex');
var selectedCity = document.getElementById('selectedCity');
var weatherIcon = document.getElementById('weatherIcon');

 

searchBtn.addEventListener('click', function(event) {
    event.preventDefault()
    city = currentCity.value
    console.log(city);
    pushToday();
    pushForecast();
    
})



//auto complete
$( function() {
    var availableTags = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];
    $( "#search-bar" ).autocomplete({
      source: availableTags
    });
  } );


  //Push Todays content to page
  function pushToday(data){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&units=imperial&appid=' + apiKey)
    
    .then(response => response.json())
    .then(todayForecast,console.log(data))

  }

  // pushes the 5 day forecast to page
  function pushForecast(data){
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ city +'&units=imperial&appid=' + apiKey)
    
    .then(response => response.json())
    .then(fiveDay,console.log(data))

  }

function todayForecast(data){
    data
    console.log(data);
    currentTemp.textContent = data.main.temp;
    currentHum.textContent = data.main.humidity;
    windSpeed.textContent = data.wind.speed;
    uvIndex.textContent = data.main.uvi
    selectedCity.textContent = currentCity.value;
    currentDate.textContent = moment().format('l');
    weatherIcon.setAttribute('src', 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png');
}

function fiveDay(data) {
    data
    console.log(data);
    var day2date = document.getElementById('day2date');
    var day3date = document.getElementById('day3date');
    var day4date = document.getElementById('day4date');
    var day5date = document.getElementById('day5date');
    var day6date = document.getElementById('day6date');

    day2date.textContent = moment().add(1,'day').format('l');
    day3date.textContent = moment().add(2,'days').format('l');
    day4date.textContent = moment().add(3,'days').format('l');
    day5date.textContent = moment().add(4,'days').format('l');
    day6date.textContent = moment().add(5,'days').format('l');


    var day2body = document.getElementById('day2body');
    var day3body = document.getElementById('day3body');
    var day4body = document.getElementById('day4body');
    var day5body = document.getElementById('day5body');
    var day6body = document.getElementById('day6body');

    day2body.setAttribute('src', 'http://openweathermap.org/img/wn/' + data.list[2].weather[0].icon + '@2x.png');
    day3body.setAttribute('src', 'http://openweathermap.org/img/wn/' + data.list[10].weather[0].icon + '@2x.png');
    day4body.setAttribute('src', 'http://openweathermap.org/img/wn/' + data.list[18].weather[0].icon + '@2x.png');
    day5body.setAttribute('src', 'http://openweathermap.org/img/wn/' + data.list[26].weather[0].icon + '@2x.png');
    day6body.setAttribute('src', 'http://openweathermap.org/img/wn/' + data.list[32].weather[0].icon + '@2x.png');

    var day2temp = document.getElementById('day2');
    var day3temp = document.getElementById('day3');
    var day4temp = document.getElementById('day4');
    var day5temp = document.getElementById('day5');
    var day6temp = document.getElementById('day6');

    day2temp.textContent = data.list[2].main.temp;
    day3temp.textContent = data.list[10].main.temp;
    day4temp.textContent = data.list[18].main.temp;
    day5temp.textContent = data.list[28].main.temp;
    day6temp.textContent = data.list[32].main.temp;

    var day2hum = document.getElementById('day2hum');
    var day3hum = document.getElementById('day3hum');
    var day4hum = document.getElementById('day4hum');
    var day5hum = document.getElementById('day5hum');
    var day6hum = document.getElementById('day6hum');

    day2hum.textContent = data.list[2].main.humidity;
    day3hum.textContent = data.list[10].main.humidity;
    day4hum.textContent = data.list[18].main.humidity;
    day5hum.textContent = data.list[28].main.humidity;
    day6hum.textContent = data.list[32].main.humidity;
}