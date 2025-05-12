document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var map = document.querySelector('.folium-map')._leaflet_map;
        function updateLegends() {
            var popVisible = false;
            var buildVisible = false;
            map.eachLayer(function(layer) {
                if (layer.options && layer.options.name === 'Population Density') {
                    popVisible = map.hasLayer(layer);
                }
                if (layer.options && layer.options.name === 'Building Density') {
                    buildVisible = map.hasLayer(layer);
                }
            });
            document.getElementById('pop-legend').style.display = popVisible ? 'flex' : 'none';
            document.getElementById('build-legend').style.display = buildVisible ? 'flex' : 'none';
        }
        map.on('overlayadd overlayremove', updateLegends);
        updateLegends();
    }, 1000);
});
