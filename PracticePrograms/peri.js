function perimeterCalculator() {
    console.log("Perimeter of different shapes:");
    console.log("1. Square\n2. Rectangle\n3. Triangle\n4. Circle\n");

    var choice = Number(prompt("Enter the number:"));

    switch (choice) {
        case 1: // Square
            var s = Number(prompt("Enter side length of square:"));
            var p = 4 * s;
            console.log("Perimeter of square is:", p);
            break;

        case 2: // Rectangle
            var l = Number(prompt("Enter length of rectangle:"));
            var b = Number(prompt("Enter breadth of rectangle:"));
            var p_r = 2 * (l + b);
            console.log("Perimeter of rectangle is:", p_r);
            break;

        case 3: // Triangle
            var a = Number(prompt("Enter side a of triangle:"));
            var b1 = Number(prompt("Enter side b of triangle:"));
            var c = Number(prompt("Enter side c of triangle:"));
            var p_t = a + b1 + c;
            console.log("Perimeter of triangle is:", p_t);
            break;

        case 4: // Circle
            var rad = Number(prompt("Enter radius of circle:"));
            var p_c = 2 * Math.PI * rad;
            console.log("Perimeter (circumference) of circle is:", p_c.toFixed(2));
            break;

        default:
            console.log("Invalid number");
    }
}
