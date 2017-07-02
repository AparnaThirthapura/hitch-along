formatted_address": "277 Hampshire Dr, Plainsboro Township, NJ 08536, USA",
"geometry": {
  "location": {
      "lat": 40.3281433,
      "lng": -74.56223659999999
      },
}
"formatted_address": "5101 Ravens Crest Dr, Plainsboro Township, NJ 08536, USA",
  "geometry": {
    "location": {
      "lat": 40.32666649999999,
      "lng": -74.5527898
    },
}
"formatted_address": "1001 Aspen Dr, Plainsboro Township, NJ 08536, USA",
  "geometry": {
    "location": {
      "lat": 40.3229214,
      "lng": -74.5570264
  },
}
"formatted_address": "17 Parker Rd, Plainsboro Township, NJ 08536, USA",
  "geometry": {
    "location": {
      "lat": 40.35370959999999,
      "lng": -74.5862618
    },
}
"formatted_address": "50 Krebs Rd, Plainsboro Township, NJ 08536, USA",
  "geometry": {
    "location": {
      "lat": 40.3525906,
      "lng": -74.57964249999999
    },
}
"formatted_address": "Princeton Junction, West Windsor Township, NJ, USA",
  "geometry": {
    "location": {
      "lat": 40.3173301,
      "lng": -74.61987909999999
    },
}
curl -H "Content-Type: application/json" 'localhost:3000/api/rider' -d '{"riderFrom":"277 Hampshire Dr, Plainsboro NJ", "riderTo":"Princeton Junction West Windsor NJ"}'
curl -H "Content-Type: application/json" 'localhost:3000/api/rider' -d '{"riderFrom":"221 Randolph Dr, Madison, Wisconsin ", "riderTo":"Princeton Junction West Windsor NJ"}'
