let map;

function initMap() {

  var UCR = new google.maps.LatLng(33.9737055, -117.3280644);

  map = new google.maps.Map(document.getElementById("map"), {
    center: UCR,
    zoom: 13,
  });

  var heatmapData = [
    {location: new google.maps.LatLng(33.9737055, -117.3280644), weight: 0.001},
    new google.maps.LatLng(33.9737055, -117.3280644),
    new google.maps.LatLng(34.9737055, -117.3280644),
    new google.maps.LatLng(35.9737055, -117.3280644),
    new google.maps.LatLng(36.9737055, -117.3280644),
    new google.maps.LatLng(37.9737055, -117.3280644),
    {location: new google.maps.LatLng(33.9737055, -116.3280644), weight: 1}
  ];

  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatmapData
  });
  heatmap.setMap(map);
}
