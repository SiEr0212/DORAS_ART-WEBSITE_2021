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
            this.resize = function () {
                var n, m, clen,
                    x = img.offsetWidth / previousWidth;
               
            };
            window.onresize = this.resize;
        },
        imageMap = new ImageMap(document.getElementById('map_ID'), document.getElementById('img_ID'));
    imageMap.resize();
    return;
}
