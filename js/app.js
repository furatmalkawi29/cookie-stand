'use strict';



// Seattle	23	65	6.3
// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6

let hour = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];



const allShopsArray =[]; // dynamic array


// constructor function ----------------------------------------------------------------------------------------
function PatCookies (location, averageCookies,minCustomerPerHour,maxCustomerPerHour)
{
  this.location = location;
  this.averageCookies = averageCookies;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;


  this.logCustomerPerHour = [];
  this.logCookiesPerHour = [];

  this.totalLocation = 0;
  this.totalPerHour = [];
  allShopsArray.push(this); // at each call , add the new object created
}



// prototype ----------------------------------------------------------------------------------------

PatCookies.prototype.getCookiesPerHour = function () {


  for (let i =0; i<hour.length ;i++)
  {
    this.logCookiesPerHour.push(Math.ceil(this.logCustomerPerHour[i] * this.averageCookies));
  }

  return this.logCookiesPerHour;

}; // Don't forget semi-colone (;)





// ----------------------------------------------------------------------------------------

PatCookies.prototype.getCookiesPerHour = function () {


  for (let i =0; i<hour.length ;i++)
  {
    this.logCookiesPerHour.push(Math.ceil(this.logCustomerPerHour[i] * this.averageCookies));
  }

  return this.logCookiesPerHour;

};





// ----------------------------------------------------------------------------------------



PatCookies.prototype.getCustomersPerHour = function () {
  let min =  this.minCustomerPerHour;
  let max = this.maxCustomerPerHour;


  for (let i =0; i<hour.length ; i++)
  {
    this.logCustomerPerHour.push( Math.ceil(Math.random() * (max - min + 1) + min));
  }

  return this.logCustomerPerHour ;
};






// ----------------------------------------------------------------------------------------



PatCookies.prototype.getLocationTotal = function ()
{

  for (let i=0 ; i<hour.length ; i++)
  {
    this.totalLocation =this.totalLocation + this.logCookiesPerHour[i];
  }

  return this.totalLocation ;

};






// ----------------------------------------------------------------------------------------


PatCookies.prototype.renderData = function ()
{
  //Parent Element <table></table>------------
  const parentElement = document.getElementById ('patSales');

  // <tr></tr> ---------------------
  const trElement = document.createElement('tr');

  parentElement.appendChild (trElement);


  // <td><td>  ----------------- empty
  const td1Element = document.createElement('td');

  trElement.appendChild (td1Element);

  td1Element.textContent = this.location;


  for (let i =0;i<hour.length ; i++)
  {
    // <td></td> --------------------- hours
    const tdElement = document.createElement('td');

    trElement.appendChild (tdElement);

    tdElement.textContent = this.logCookiesPerHour[i];
  }


  // <td><td>  ----------------- last one
  const td2Element = document.createElement('td');

  trElement.appendChild (td2Element);

  td2Element.textContent = this.totalLocation;

};


//--------------------------------------------------------------------------------
PatCookies.prototype.removeTotalRow = function ()
{
  const deletedRow = document.getElementById('totalRow');

  const parentOfDeletedRow = document.getElementById('patSales');

  parentOfDeletedRow.removeChild (deletedRow);
};


//-----------Another Way:
// PatCookies.prototype.removeTotalRow = function ()
// {
//   const deletedRow = document.getElementById('totalRow');
//   deletedRow.remove();
// };


// new objects ----------------------------------------------------------------------------------------

const seattle = new PatCookies ( 'Seattle', 23 , 65 , 6.3 );

const tokyo = new PatCookies ( 'Tokyo' , 3 , 24 , 1.2 );

const dubai = new PatCookies ( 'Dubai' , 11 , 38 , 3.7 );

const paris = new PatCookies ( 'Paris' , 20 , 38 , 2.3);

const lima = new PatCookies ( 'Lima' , 2 , 16 , 4.6 );







// Functions ------------------------------------------------------------------------------------


const renderHeader = function ()
{
  //Parent Element <table></table>------------
  const parentElement = document.getElementById ('patSales');

  // <tr></tr> ---------------------
  const trElement = document.createElement('tr');

  parentElement.appendChild (trElement);


  // <th><th>  ----------------- empty
  const th1Element = document.createElement('th');

  trElement.appendChild (th1Element);

  th1Element.textContent = ' --- ';


  for (let i =0;i<hour.length ; i++)
  {
    // <th></th> --------------------- hours
    const thElement = document.createElement('th');

    trElement.appendChild (thElement);

    thElement.textContent = hour[i];
  }


  // <th><th>  ----------------- last one
  const th2Element = document.createElement('th');

  trElement.appendChild (th2Element);

  th2Element.textContent = 'Daily Location Total';

};







//---------------------------------------------------------------------------------------------------

const renderFooter = function () {
  //Parent Element <table></table>------------
  const parentElement = document.getElementById ('patSales');

  // <tr></tr> ---------------------
  const trElement = document.createElement('tr');

  parentElement.appendChild(trElement);


  // <th><th>  ----------------- empty
  const th1Element = document.createElement('th');

  trElement.appendChild(th1Element);

  th1Element.textContent = ' Totals ';


  // Totals of each hour --------------------

  let total1;

  for(let i = 0; i < hour.length; i++) {
    total1 = 0;

    // <th><th>  -----------------
    const thElement = document.createElement('th');
    trElement.appendChild(thElement);

    for(let x = 0; x < allShopsArray.length; x++) // use allShopsArray to be able to calculate unlimited number of objects
    {
      total1 = total1 + allShopsArray[x].logCookiesPerHour[i];
    }

    thElement.textContent = total1;
  }

  // Total of toalLocation --------------------

  let total2 = 0;

  // <th><th>  -----------------
  const th2Element = document.createElement('th');
  trElement.appendChild(th2Element);


  for(let i = 0; i < allShopsArray.length; i++) //dynamic variable
  {
    total2 = total2 + allShopsArray[i].totalLocation;
  }

  th2Element.textContent = total2;


  trElement.setAttribute('id','totalRow'); //set id to total row

};


// Invoking ------------------------------------------------------------------------------------------

//--------------------------- Header ------------------------------------------
renderHeader();

// //--------------------------------Seattle------------------------------------
seattle.getCustomersPerHour();
seattle.getCookiesPerHour();
seattle.getLocationTotal();
seattle.renderData();



// //--------------------------------TOKYO------------------------------------




tokyo.getCustomersPerHour();
tokyo.getCookiesPerHour();
tokyo.getLocationTotal();
tokyo.renderData();



// //--------------------------------DUBAI-----------------------------------


dubai.getCustomersPerHour();
dubai.getCookiesPerHour();
dubai.getLocationTotal();
dubai.renderData();



// //--------------------------------PARIS-----------------------------------



paris.getCustomersPerHour();
paris.getCookiesPerHour();
paris.getLocationTotal();
paris.renderData();


// //--------------------------------LIMA-------------------------------------



lima.getCustomersPerHour();
lima.getCookiesPerHour();
lima.getLocationTotal();
lima.renderData();

//---------------------------Footer ------------------------------------------

renderFooter();




// Adding New Shop to Table / Form -------------------------------------------------------------------------------------------


const formElement = document.getElementById ('addNewLocation'); //reach where event takes place

formElement.addEventListener('submit', // add event listner
  function (event) // add event handler (responds to event)
  {

    event.preventDefault();// stops browser refreshing when you click submit (what's the point?)


    // take data from form
    const location= event.target.location.value;
    const avgCookies= event.target.avgCookies.value;
    const minCustomer= event.target.minCustomer.value;
    const maxCustomer= event.target.maxCustomer.value;


    //create new object and asign data
    const newShop = new PatCookies (location, avgCookies, minCustomer, maxCustomer);

    //invoking
    newShop.getCustomersPerHour();
    newShop.getCookiesPerHour();
    newShop.getLocationTotal();

    newShop.removeTotalRow(); //remove total row
    newShop.renderData(); // render newshop data
    renderFooter(); // render total row after new shop

  }

);



