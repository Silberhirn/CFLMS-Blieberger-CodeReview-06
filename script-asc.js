var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
$(document).ready(function () {
    var places = [];
    var divsettings = "col-sm-12 col-md-6 col-lg-3";
    var location = /** @class */ (function () {
        function location(name, city, ZIP, address, teaser, timestamp) {
            this.name = "";
            this.city = "";
            this.ZIP = "";
            this.address = "";
            this.teaser = "";
            this.timestamp = "";
            this.name = name;
            this.city = city;
            this.ZIP = ZIP;
            this.address = address;
            this.teaser = teaser;
            this.timestamp = timestamp;
        }
        location.prototype.display = function () {
            $("body").append("<div class='" + divsettings + "'><div class='m-2 p-3 white'><h2>"
                + this.name + "</h2><img src='" + this.teaser + "' class='img-fluid'><p>" + this.ZIP + " "
                + this.city + ", " + this.address + "</p><p>Visited: " + this.timestamp + "</p></div></div>");
        };
        return location;
    }());
    var restaurant = /** @class */ (function (_super) {
        __extends(restaurant, _super);
        function restaurant(name, city, ZIP, address, teaser, timestamp, phone, type, web) {
            var _this = _super.call(this, name, city, ZIP, address, teaser, timestamp) || this;
            _this.phone = "";
            _this.type = "";
            _this.web = "";
            _this.phone = phone;
            _this.type = type;
            _this.web = web;
            return _this;
        }
        restaurant.prototype.display = function () {
            $("body").append("<div class='" + divsettings + "'><div class='m-2 p-3 white'><h2>"
                + this.name + "</h2><img src='" + this.teaser + "' class='img-fluid'><p>" + this.ZIP + " "
                + this.city + ", " + this.address + "</p><p>Phone: " + this.phone + "</p><p>Type: " + this.type +
                "</p><p><a href='" + this.web + "'>" + this.web + "</a></p><p>Visited: " + this.timestamp + "</p></div></div>");
        };
        return restaurant;
    }(location));
    var event = /** @class */ (function (_super) {
        __extends(event, _super);
        function event(name, city, ZIP, address, teaser, timestamp, date, time, price) {
            var _this = _super.call(this, name, city, ZIP, address, teaser, timestamp) || this;
            _this.date = "";
            _this.time = "";
            _this.price = "";
            _this.date = date;
            _this.time = time;
            _this.price = price;
            return _this;
        }
        event.prototype.display = function () {
            $("body").append("<div class='" + divsettings + "'><div class='m-2 p-3 white'><h2>"
                + this.name + "</h2><img src='" + this.teaser + "' class='img-fluid'><p>" + this.ZIP + " "
                + this.city + ", " + this.address + "</p><p>Date: " + this.date + ", " + this.time + "</p><p>Price: " + this.price +
                "</p><p>Visited: " + this.timestamp + "</p></div></div>");
        };
        return event;
    }(location));
    var loc1 = new location("St. Charles Church", "Vienna", 1010, "Karlsplatz 1", "img/charles.jpg", "2020/10/03 16:00");
    var loc2 = new location("Schönbrunn Park", "Vienna", 1130, "Maxingstraße 13b", "img/schönbrunn.jpg", "2020/07/11 10:45");
    places.push(loc1, loc2);
    var res1 = new restaurant("ON Restaurant", "Vienna", 1050, "Wehrgasse 8", "img/on.jpg", "2020/02/10 12:30", "+43(1)5854900", "Chinese", "http://www.restaurant-on.at/");
    var res2 = new restaurant("BioFrische", "Vienna", 1150, "Stutterheimstraße 6", "img/bio.jpg", "2020/02/11 14:00", "+43(1)9529215", "Indian", "https://biofrische.wien/");
    places.push(res1, res2);
    var eve1 = new event("Cats- the musical", "Vienna", 1010, "Ronacher- Seilerstätte 9", "img/cats.jpg", "2020/12/15 20:00", "Fr. 15.12.2020", "20:00", "€ 120,00");
    var eve2 = new event("Guns ‘n Roses", "Vienna", 1020, "Ernst-Happel Stadion, Meiereistraße 7", "img/guns.jpg", "2020/06/09 19:30", "Sat. 09.06.2020", "19:30", "€ 95,50");
    places.push(eve1, eve2);
    places.sort(function (a, b) {
        return (new Date(b.timestamp) - new Date(a.timestamp));
    });
    for (var i = 0; i < places.length; i++) {
        places[i].display();
    }
});
