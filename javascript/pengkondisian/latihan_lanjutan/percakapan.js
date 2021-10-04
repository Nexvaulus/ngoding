// Percakapan singkat 

// Start
// Is raining? (yes = masuk percabangan) (no = go outside)
// Have umbrella (yes = go outside) (no = wait a while)
// Is raining? (no = go outside) (yes = balik ke wait a while)

// Start
alert("Start [Percakapan Singkat]");

// Is raining?
var pertanyaan1 = confirm("Is raining?");
if(pertanyaan1 == true) {
    // Have umbrella 
    var pertanyaan2 = confirm("Have umbrella?");
    var pertanyaan3 = true;
    if(pertanyaan2 == false) {
        while(pertanyaan3 == true) {
            alert("Wait a while");
            // Is raining
            var pertanyaan3 = confirm("Is raining?");
        }
    }
}
alert("Go outside");