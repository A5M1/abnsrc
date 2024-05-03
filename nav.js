      function displaynav() {
        var x = document.getElementById("topnavs");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
