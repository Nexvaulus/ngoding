console.log("PR : Juragan Angkot [3]");
var jumlahangkot = 10;
var angkotberoperasi = 6;
var angkot = 1;

for (angkot; angkot <= jumlahangkot; angkot++) {
	if( angkot <= angkotberoperasi) {
		console.log('angkot no. ' + angkot + ' beroperasi dengan baik');
	}
	else {
		console.log('angkot no. ' + angkot + ' tidak dapat beroperasi.');
	}
}