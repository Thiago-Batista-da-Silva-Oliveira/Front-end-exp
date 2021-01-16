let show = document.getElementById("nav-links")
let verticalBar = document.getElementById("vertical-bar")
let testee = document.getElementById("teste")

function showMenu() {
  show.style.right = "0"
}

function closeMenu() {
    show.style.right = "-200px"
  }

  function teste(){
    verticalBar.style.left = "-200px"
    testee.style.display = "block"
  }

  function teste2(){
      verticalBar.style.left= "0"
      testee.style.display = "none"
  }