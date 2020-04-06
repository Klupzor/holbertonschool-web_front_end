var roomDimensions = {
    width: 50,
    length: 100,
    getArea: function () {
        return(this.width*this.length)
    }
}

var boundGetArea = roomDimensions;
console.log(boundGetArea.getArea());