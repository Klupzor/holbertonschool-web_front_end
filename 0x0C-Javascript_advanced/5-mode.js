const changeMode = (size, weight, transform, background, color) => {
    document.body.style.fontSize = size.toString() + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.background = background;
    document.body.style.color = color;
  }

  function main()
  {
    function spooky()
    {
        changeMode(9, "bold", "uppercase", "pink", "green");
    }

    function darkMode()
    {
        changeMode(12, "bold", "capitalize", "black", "white");
    }

    function screamMode()
    {
        changeMode(12, "normal", "lowercase", "white", "black");
    }
    
    document.getElementById("spooky").addEventListener("click", () => spooky());
    document.getElementById("dark").addEventListener("click", () => darkMode());
    document.getElementById("scream").addEventListener("click", () => screamMode());
  }

  main()
