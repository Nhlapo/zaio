
/* The fuctions that change the labels of each of the cirlcle*/

function red() {
    var text = "Red";
    var p1 = 2.99;
    document.getElementById("colorchnager").innerHTML = text;
    //document.getElementById("colorPicked").innerHTML = document.getElementById("red");
    document.getElementById("price").innerHTML = p1;
  }

  //function colorItem(){
    // document.getElementById("colorPicked").innerHTML = document.getElementById("circle").innerText;
     
  //}

  function pink()
  {
    var text = "Pink";
    var p2 = 14.05;
    document.getElementById("colorchnager").innerHTML = text;
    document.getElementById("price").innerHTML = p2;
  }

  function purple()
  {
    var text = "Purple";
    var p3 = 21.01;
    document.getElementById("colorchnager").innerHTML = text;
    document.getElementById("price").innerHTML = p3;
  }
  
  function orange()
  {
    var text = "Orange";
    var p4 = 67.00;
    document.getElementById("colorchnager").innerHTML = text;
    document.getElementById("price").innerHTML = p4;
  }
  
  function lime()
  {
    var text = "Lime";
    var p5 = 12.95;
    document.getElementById("colorchnager").innerHTML = text;
    document.getElementById("price").innerHTML = p5;
  }
  
  function black()
  {
    var text = "Black";
    var p6 = 23.48;
    document.getElementById("colorchnager").innerHTML = text;
    document.getElementById("price").innerHTML = p6;
  }

  function burlywood()
  {
    var text = "Burlywood";
    var p7 = 29.99;
    document.getElementById("colorchnager").innerHTML = text;
    document.getElementById("price").innerHTML = p7;
  }
  
  function coral()
  {
    var text = "Coral";
    var p8 = 55.01;
    document.getElementById("colorchnager").innerHTML = text;
    document.getElementById("price").innerHTML = p8;
  }

  function grey()
  {
    var text = "Grey";
    var p9 = 87.02;
    document.getElementById("colorchnager").innerHTML = text;
    document.getElementById("price").innerHTML = p9;
  }
  
  function brown()
  {
    var text = "Brown";
    var p10 = 11.99;
    document.getElementById("colorchnager").innerHTML = text;
    document.getElementById("price").innerHTML = p10;
  }

  function palegreen()
  {
    var text = "Palegreen";
    var p11 = 8.99;
    document.getElementById("colorchnager").innerHTML = text;
    document.getElementById("price").innerHTML = p11;
  }
  
  function blueviolet()
  {
    var text = "Blueviolet";
    var p12 = 17.05;
    document.getElementById("colorchnager").innerHTML = text;
    document.getElementById("price").innerHTML = p12;
  }

  function navy()
  {
    var text = "Navy";
    var p13 = 18.76;
    document.getElementById("colorchnager").innerHTML = text;
    document.getElementById("price").innerHTML = p13;
  }
  
  function indigo()
  {
    var text = "Indigo";
    var p14 = 98.00;
    document.getElementById("colorchnager").innerHTML = text;
    document.getElementById("price").innerHTML = p14;
  }
  
  function peach()
  {
    var text = "Peach";
    var p15 =74.05;
    document.getElementById("colorchnager").innerHTML = text;
    document.getElementById("price").innerHTML = p15;
  }
  
  function aqua()
  {
    var text = "Aqua";
    var p16 = 99.09;
    document.getElementById("colorchnager").innerHTML = text;
    document.getElementById("price").innerHTML = p16;
  }
  
  function mustard()
  {
    var text = "Mustard";
    var p17 = 43.06;
    document.getElementById("colorchnager").innerHTML = text;
    document.getElementById("price").innerHTML = p17;
  }
  
  function white()
  {
    var text = "White";
    var p18 = 3.99;
    document.getElementById("colorchnager").innerHTML = text;
    document.getElementById("price").innerHTML = p18;
  }

  //GEt the modal elements
  var modal = document.getElementById('simpleModal');
  
  //get open modal
  var modalBtn = document.getElementById('modalBtn');
  
  //Get close button 
  var closeBtn = document.getElementsByClassName('closeBtn')[0];

  //click on the button
  modalBtn.addEventListener('click', o);
  //click the close btn
  closeBtn.addEventListener('click', o);
  //fuction for outsude modal click
  window.addEventListener('click', outsideClick);

  function o(){
    let style = window.getComputedStyle(modal);
    if(style.getPropertyValue('display')=='block'){
      modal.style.display = 'none'
    }else modal.style.display = 'block'
  }
//----------------------------------------------------------------------------------

//----------------------------------------------------------------------------------
  function outsideClick(e){
    if(e.target == modal){
      modal.style.display = 'none';
    }
  }

  //function openModal(){ 
    //modal.style.display = 'block'; 
  //}

  /*function closeModal()
  {
    modal.style.display = 'none';
  }*/

  /*The increment buttons*/
  
  document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
  var valueCount;

  document.querySelector(".plus-btn").addEventListener("click", function()
  {
    valueCount = document.getElementById("quantity").value;
    valueCount++;

    document.getElementById("quantity").value = valueCount;

    if(valueCount > 1)
    {
      document.querySelector(".minus-btn").removeAttribute("disabled");
      document.querySelector(".minus-btn").classList.remove("disabled");
    }
  })

/*The button to minus */
  document.querySelector(".minus-btn").addEventListener("click", function()
  {
    valueCount = document.getElementById("quantity").value;
    valueCount--;

    document.getElementById("quantity").value = valueCount;

    if(valueCount == 1)
    {
      document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
    }
  });

  /**close the button on the modal 
  const close = document.getElementById('close');

  close.addEventListener('click', () => 
  {
    modal.classList.remove('show');
  });
  */

 function disableAddCart(){
   document.getElementById("quantity").value = 0;
   
 }

 
function addOrder(){
  var totalItem = document.getElementById("quantity").value; 
  console.log(totalItem);

  document.getElementById('modal').innerHTML = totalItem;  
  document.getElementById('simpleModal').hidden = true;
  

  var x = document.getElementById("btn_checkout");

  var b = document.getElementById('modalBtn').hidden = true;
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    b.style.display = "none";
  }
}

function colorSelected(){
  document.getElementById('modal-color').innerText = document.getElementById('colorchnager').innerText;
  document.getElementById('quantity').innerText = '0';
}

function colourPicker(ID) {

  // create a new div element
  const newID = document.createElement("id");

  // and give it some content
  const newContent = document.createTextNode("red");

  // add the text node to the newly created div
  newID.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("gift");
  document.body.insertBefore(newID, currentDiv);
}