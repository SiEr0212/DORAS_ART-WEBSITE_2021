window.onload = function () {
    var ImageMap = function (map, img) {
            var n,
                areas = map.getElementsByTagName('area'),
                len = areas.length,
                coords = [],
                previousWidth = 1093;
            for (n = 0; n < len; n++) {
                coords[n] = areas[n].coords.split(',');
            }
            
    imageMap.resize();
    return;
}
