// for (var i = 1; i <= 10; i++) {
//     if (i == 5) {
//         break;
//     }
//     console.log(i);
// }

var myPlace = [5, 10, 20, 22, 50, 60, 65, 70];
for (var i = 0; i < myPlace.length; i++) {
    if (myPlace[i] > 50) {
        continue;
    }

    console.log(myPlace[i]);
}