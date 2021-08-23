document.addEventListener('DOMContentLoaded', () => {
  
  var button = document.getElementById("my-button");
    function changeColor() {
        button.addEventListener("click", toggle);
      };
      
      function toggle() {
        var backColor = button.style.backgroundColor;
        button.style.backgroundColor = backColor === "black" ? "yellow" : "black";
      };
      
      changeColor();
});