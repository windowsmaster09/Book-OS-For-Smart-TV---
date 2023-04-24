var seconds=0;
function displayseconds()
  {
    seconds +=1;
    document.getElementById("secondsdisplay").innerText=""+seconds+"";
  }
  setInterval(displayseconds,1000);

function redirectpage()
  {
    window.location="menu.html";
  }
  setTimeout('redirectpage()', 5000);

function myFunction(x) {
    x.classList.toggle("change");
}