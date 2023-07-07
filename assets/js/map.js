function initMap() {
    // Create a new map instance
    const map = new google.maps.Map(document.getElementById('location'), {
      center: { lat: -5.147665, lng: 119.438905 },
      zoom: 15,
    });
  
    // Create a marker for Apartemen Bandaraya Makassar
    const marker = new google.maps.Marker({
      position: { lat: -5.147665, lng: 119.438905 },
      map: map,
      title: 'Apartemen Bandaraya Makassar',
    });
  }
  