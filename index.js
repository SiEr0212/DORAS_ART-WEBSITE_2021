const width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
const height = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;

console.log(width, height);

window.onload = function () {
  var ImageMap = function (map, img) {
      var n,
        areas = map.getElementsByTagName("area"),
        len = areas.length,
        coords = [],
        previousWidth = 1919;
      for (n = 0; n < len; n++) {
        coords[n] = areas[n].coords.split(",");
      }
      this.resize = function () {
        var n,
          m,
          clen,
          x = img.offsetWidth / previousWidth;
        for (n = 0; n < len; n++) {
          clen = coords[n].length;
          for (m = 0; m < clen; m++) {
            coords[n][m] *= x;
          }
          areas[n].coords = coords[n].join(",");
        }
        previousWidth = document.body.clientWidth;
        return true;
      };
      window.onresize = this.resize;
    },
    imageMap = new ImageMap(
      document.getElementById("map_ID"),
      document.getElementById("img_ID")
    );
  imageMap.resize();
  return;
};
 


/* class ResponsiveImageMap {
  constructor(map, img, width) {
      this.img = img;
      this.originalWidth = width;
      this.areas = [];

      for (const area of map.getElementsByTagName('area')) {
          this.areas.push({
              element: area,
              originalCoords: area.coords.split(',')
          });
      }

      window.addEventListener('resize', e => this.resize(e));
      this.resize();
  }

  resize() {
      const ratio = this.img.offsetWidth / this.originalWidth;

      for (const area of this.areas) {
          const newCoords = [];
          for (const originalCoord of area.originalCoords) {
              newCoords.push(Math.round(originalCoord * ratio));
          }
          area.element.coords = newCoords.join(',');
      }

      return true;
  };
}

var map = document.getElementById('map_ID');
var image = document.getElementById('img_ID');
new ResponsiveImageMap(map, image, 800); */