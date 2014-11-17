
function MyGameCube() {

    THREE.Mesh.apply(this, arguments);

    var isBlank;
    this.letter;
    this.blank = isBlank;
	this.isSelected = 0;
	this.Select = function(){
		this.isSelected = 1;
	};
	this.clearSelection = function (){
		this.isSelected = 0;
	};
    this.points = function () {
        return this.getPoints();
    };
    this.getPoints = function(){
        var points;
        switch (this.letter) {
            case 'A':
            points = 1;
            break;

            case 'B':
            points = 2;
            break;

            case 'C':
            points = 3;
            break;

            case 'D':
            points = 2;
            break;

            case 'E':
            points = 1;
            break;

            case 'F':
            points = 4;
            break;

            case 'G':
            points = 2;
            break;

            case 'H':
            points = 4;
            break;

            case 'I':
            points = 1;
            break;

            case 'J':
            points = 8;
            break;

            case 'K':
            points = 5;
            break;

            case 'L':
            points = 1;
            break;

            case 'M':
            points = 3;
            break;

            case 'N':
            points = 1;
            break;

            case 'O':
            points = 1;
            break;

            case 'P':
            points = 3;
            break;

            case 'Q':
            points = 10;
            break;

            case 'R':
            points = 1;
            break;

            case 'S':
            points = 1;
            break;

            case 'T':
            points = 1;
            break;

            case 'U':
            points = 1;
            break;

            case 'V':
            points = 4;
            break;

            case 'W':
            points = 4;
            break;

            case 'X':
            points = 8;
            break;

            case 'Y':
            points = 4;
            break;

            case 'Z':
            points = 10;
            break;
        }
        return points;
    };

    if (this.letter === null)
        isBlank = 1;
    else
        isBlank = 0;
}
// Make MyGameCube have the same methods as Mesh
MyGameCube.prototype = Object.create(THREE.Mesh.prototype);
// Make sure the right constructor gets called
MyGameCube.prototype.constructor = MyGameCube;


getPoints = function(letter){
        var points;
        switch (letter) {
            case 'A':
            points = 1;
            break;

            case 'B':
            points = 2;
            break;

            case 'C':
            points = 3;
            break;

            case 'D':
            points = 2;
            break;

            case 'E':
            points = 1;
            break;

            case 'F':
            points = 4;
            break;

            case 'G':
            points = 2;
            break;

            case 'H':
            points = 4;
            break;

            case 'I':
            points = 1;
            break;

            case 'J':
            points = 8;
            break;

            case 'K':
            points = 5;
            break;

            case 'L':
            points = 1;
            break;

            case 'M':
            points = 3;
            break;

            case 'N':
            points = 1;
            break;

            case 'O':
            points = 1;
            break;

            case 'P':
            points = 3;
            break;

            case 'Q':
            points = 10;
            break;

            case 'R':
            points = 1;
            break;

            case 'S':
            points = 1;
            break;

            case 'T':
            points = 1;
            break;

            case 'U':
            points = 1;
            break;

            case 'V':
            points = 4;
            break;

            case 'W':
            points = 4;
            break;

            case 'X':
            points = 8;
            break;

            case 'Y':
            points = 4;
            break;

            case 'Z':
            points = 10;
            break;
        }
        return points;
    };