function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 19.0760, lng: 72.8777 }, // Replace with your actual coordinates
        zoom: 15,
    });

    const marker = new google.maps.Marker({
        position: { lat: 19.0760, lng: 72.8777 }, // Replace with your actual coordinates
        map: map,
    });
}