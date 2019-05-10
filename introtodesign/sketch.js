function drag(target, event){
  // when dragged, copy into the id of the dragged elem 
  // into the clipboard
  event.dataTransfer.setData("browser", target.id);
}

function drop(target, event){
  // get the id of the dragged item
  var id = event.dataTransfer.getData("browser");
  target.appendChild(document.getElementById(id));
  event.preventDefault();
}