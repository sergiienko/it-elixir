var display=new google.maps.LatLng(50.420561, 30.519305);

function initialize() {
	var mapProp = {
		center:new google.maps.LatLng(50.420852, 30.520927),
		zoom: 17,
		disableDefaultUI:true,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var map=new google.maps.Map(document.getElementById("map"), mapProp);
	var marker=new google.maps.Marker({
		  position: display,
		  icon: 'img/icon/address.png'
	});

	marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
