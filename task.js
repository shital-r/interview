
// Add an event listener to each div element

document.getElementsByClassName("top")[0].addEventListener("click", function() {
    // Change its width when clicked
    this.style.width = "200px"}
);
function showField1() {
    var field = document.getElementById("hidden-field1");
    if (document.getElementById("show1").checked) {
      field.style.display = "block";
    } else {
      field.style.display = "none";
    }
  }


document.getElementsByClassName("middle")[0].addEventListener("click", function() {
    // Change its width when clicked
    this.style.width = "auto"}
);
function showField2() {
    var field = document.getElementById("hidden-field2");
    if (document.getElementById("show2").checked) {
      field.style.display = "block";
    } else {
      field.style.display = "none";
    }
  }


document.getElementsByClassName("bottom")[0].addEventListener("click", function() {
    // Change its width when clicked
    this.style.width = "auto"});

      function showField3() {
        var field = document.getElementById("hidden-field3");
        if (document.getElementById("show3").checked) {
          field.style.display = "block";
        } else {
          field.style.display = "none";
        }
      }


