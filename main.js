window.addEventListener('load', async function () {
    console.log("Starting intro.");
    //await intro();
    console.log("Showing main body");
    document.getElementById("loading").style.display = "none";
    $('#intro').fadeOut(1000);
    $('#transition').fadeIn(500);
    $('#transition').fadeOut(500);
    $('#mainBody').fadeIn(3500);
})

async function intro() {
    $('#intro1').fadeIn(2000);
    await sleep(1000);
    $('#intro2').fadeIn(2000);
    await sleep(2000);
    $('#intro1').fadeOut(2000);
    $('#intro2').fadeOut(2000);
    await sleep(2000);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function selectPepsiTab() {
    $('#pepsibot-tab').tab('show');
}

function selectDevsTab() {
    $('#devs-tab').tab('show');
}

function generatePicByUsername() {
    document.getElementById("usernamepespigenText").innerHTML = "THIS IS " + document.getElementById("usernameText").value;
    document.getElementById("generatedImage").src = "https://upload.wikimedia.org/wikipedia/commons/2/29/Loader.gif";
    var result = httpGet("https://api.shadowcat.club/byUsername.php?username=" + document.getElementById("usernameText").value);
    var obj = JSON.parse(result);
    document.getElementById("generatedImage").src = obj.picture;
    return obj.picture;
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}