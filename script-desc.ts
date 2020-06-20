$( document ).ready(function(){

var places=[]
var divsettings="col-sm-12 col-md-6 col-lg-3"

class location {
	name="";
	city="";
	ZIP="";
	address="";
	teaser="";
	timestamp="";
	constructor(name, city, ZIP, address, teaser, timestamp){
		this.name=name
		this.city=city;
		this.ZIP=ZIP;
		this.address=address
		this.teaser=teaser
		this.timestamp=timestamp
	}
	display(){
		$("body").append("<div class='"+divsettings+"'><div class='m-2 p-3 white'><h2>"
			+this.name+"</h2><img src='"+this.teaser+"' class='img-fluid'><p>"+this.ZIP+" "
			+this.city+", "+this.address+"</p><p>Visited: "+this.timestamp+"</p></div></div>")
	}
}

class restaurant extends location {
	phone="";
	type="";
	web="";
	constructor(name, city, ZIP, address, teaser, timestamp, phone, type, web){
		super(name, city, ZIP, address, teaser, timestamp)
		this.phone=phone;
		this.type=type;
		this.web=web;
	}
	display(){
		$("body").append("<div class='"+divsettings+"'><div class='m-2 p-3 white'><h2>"
			+this.name+"</h2><img src='"+this.teaser+"' class='img-fluid'><p>"+this.ZIP+" "
			+this.city+", "+this.address+"</p><p>Phone: "+this.phone+"</p><p>Type: "+this.type+
			"</p><p><a href='"+this.web+"'>"+this.web+"</a></p><p>Visited: "+this.timestamp+"</p></div></div>")
	}
}

class event extends location {
	date="";
	time="";
	price="";
	constructor(name, city, ZIP, address, teaser, timestamp, date, time, price){
		super(name, city, ZIP, address, teaser, timestamp)
		this.date=date;
		this.time=time;
		this.price=price;
	}
	display(){
		$("body").append("<div class='"+divsettings+"'><div class='m-2 p-3 white'><h2>"
			+this.name+"</h2><img src='"+this.teaser+"' class='img-fluid'><p>"+this.ZIP+" "
			+this.city+", "+this.address+"</p><p>Date: "+this.date+", "+this.time+"</p><p>Price: "+this.price+
			"</p><p>Visited: "+this.timestamp+"</p></div></div>")
	}
}

var loc1=new location("St. Charles Church", "Vienna", 1010, "Karlsplatz 1", "img/charles.jpg", "2020/10/03 16:00")
var loc2=new location("Schönbrunn Park", "Vienna", 1130, "Maxingstraße 13b", "img/schönbrunn.jpg", "2020/07/11 10:45")
places.push(loc1, loc2)

var res1=new restaurant("ON Restaurant", "Vienna", 1050, "Wehrgasse 8", "img/on.jpg", "2020/02/10 12:30", "+43(1)5854900", "Chinese", "http://www.restaurant-on.at/")
var res2=new restaurant("BioFrische", "Vienna", 1150, "Stutterheimstraße 6", "img/bio.jpg", "2020/02/11 14:00", "+43(1)9529215", "Indian", "https://biofrische.wien/")
places.push(res1, res2)

var eve1=new event("Cats- the musical", "Vienna", 1010, "Ronacher- Seilerstätte 9", "img/cats.jpg", "2020/12/15 20:00", "Fr. 15.12.2020", "20:00", "€ 120,00")
var eve2=new event("Guns ‘n Roses", "Vienna", 1020, "Ernst-Happel Stadion, Meiereistraße 7", "img/guns.jpg", "2020/06/09 19:30", "Sat. 09.06.2020", "19:30", "€ 95,50")
places.push(eve1, eve2)

places.sort((a, b)=>{
	return (new Date(a.timestamp)-new Date(b.timestamp))
})

for(let i=0; i<places.length; i++){
	places[i].display()
}

})