var i = 0;
do {
      console.log(i);
      i++;
} while (i <= 3);

var i = 6;
while (i <= 10) {
      console.log(i);
      i++;
}



function fillCity() {

      var cityName;

      var zipEntered = document.getElementById("zip").value;

      switch (zipEntered) {

            case "60608":

                  cityName = "Chicago";

                  break;

            case "68114":

                  cityName = "Omaha";


                  break;


            case "53212":


                  cityName = "Milwaukee";


      }


      document.getElementById("city").value = cityName;


}








 function expandLoris() {
 var expandedParagraph = `Slow lorises are a group of several species of trepsirrhine primates which
make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of
distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several
adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time.
Slow lorises have a toxic bite, a rare trait among mammals.`;
 document.getElementById("slowLoris").innerHTML = expandedParagraph;
 }