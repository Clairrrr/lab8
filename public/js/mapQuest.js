function initMap() {
    L.mapquest.key = 'tAPGwxpaQMw1inYCn4kQJkqa7fXEFaGk';

    var map = L.mapquest.map('map', {
        center: [32.879011, -117.235976],
        layers: L.mapquest.tileLayer('map'),
        zoom: 12,
        zoomControl: false
    });

    L.marker([32.88, -117.236]).addTo(map);
}