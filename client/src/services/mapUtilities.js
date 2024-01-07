
// Funtion to create Grids on the map

export function createSquarePolygon(lat, lng, size) {
    const latlngs = [];
    const offset =  size /2/111.32;
    latlngs.push({ lat: lat + offset, lng: lng - offset });
    latlngs.push({ lat: lat + offset, lng: lng + offset });
    latlngs.push({ lat: lat - offset, lng: lng + offset });
    latlngs.push({ lat: lat - offset, lng: lng - offset });

    return latlngs;
}

