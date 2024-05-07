window.onload = function()
{
    randomqoutes();
}

function randomqoutes()
{
    var btn = document.getElementById('btn');
    var qoutes = document.getElementById('qoute');

    btn.onclick = function()
    {
        var qoutesList = [
            "Allah does not burden a soul  beyond that it can bear",
            "You become successful by conquering yourself",
            "You lose when you quit",
            "We are not living in the world, we are passing",
            "Allah is with you, All the time, Everywhere"
        ];

        var rand = Math.floor(Math.random()*5);
        qoutes.textContent = "\""+qoutesList[rand]+"\"";
    }
}