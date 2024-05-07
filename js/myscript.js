function showAbout()
{
    
    document.getElementById('aboutme-btn').style.display = 'none';
    document.getElementById('aboutme-text').style.display = 'block';
    document.getElementById('collapse-btn').style.display = 'block';
}
function hideAbout()
{
    document.getElementById('aboutme-btn').style.display = 'block';
    document.getElementById('aboutme-text').style.display = 'none';
    document.getElementById('collapse-btn').style.display = 'none';
}


function media(type)
{
    if(type=='facebook')
    window.open('https://www.facebook.com/asadkhan447');
    
    
    if(type=='insta')
    window.open('https://www.instagram.com/asadkhan.ak47/');
    
    if(type=='twitter')
    window.open('https://twitter.com/Asadkhan_ak47');
    
    if(type=='yt1')
    window.open('http://www.youtube.com/@junglejourneys_');
    
    if(type=='yt2')
    window.open('http://www.youtube.com/@4SEVEN.');
    
    if(type=='github-main')
    window.open('https://github.com/asadiv');

}

function navigate(type)
{
    if(type=='home')
    location.href='index.html';

}

function project(type)
{
    if(type=='course')
    window.open('https://asadiv.github.io/course-website/');

    if(type=='qoute')
    window.open('random-qoute/qoute-generator.html')
    
    if(type=='calculator')
    window.open('calculator/calculator.html')
}