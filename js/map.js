//! Canada

var map = L.map("CanadaMap").setView(
  [45.46526069548004, -73.5665988440308],
  13
);

var OpenStreetMap_Mapnik = L.tileLayer(
  "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
  }
).addTo(map);

var firstMarker = L.marker([45.46526069548004, -73.5665988440308]).addTo(map);
// //! Australia

var second = L.map("AustraliaMap").setView(
  [-27.606166451265373, 153.0658217724515],
  13
);

var OpenStreetMap_Mapnik = L.tileLayer(
  "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
  }
).addTo(second);

var secondMarker = L.marker([-27.606166451265373, 153.0658217724515]).addTo(
  second
);
//! United Kingdom

var third = L.map("UKMap").setView(
  [53.71039913116815, -1.3417385726412694],
  13
);

var OpenStreetMap_Mapnik = L.tileLayer(
  "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
  }
).addTo(third);

var thirdMarker = L.marker([53.71039913116815, -1.3417385726412694]).addTo(
  third
);
