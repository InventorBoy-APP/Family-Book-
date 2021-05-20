
var images = [
    "images.jpg",
    "images.png",
    "images (1).png",
    "download (6).jpg",
    "images (1).jpg"
    ];
    var names=[
        "Chency Singh",
        "Singh Singh",
        "Baljeet Singh",
        "Rahul Singh",
        "Madhu Singh"
    ]
    
    var i = 0;
    function nextslide() { 
     
       if(i == 5)
         {
           i=0;
         }
       
        document.getElementById("album").src = images[i];
      document.getElementById("names").innerHTML = names[i];
      i++;
     
    }

    