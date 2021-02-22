'use strict';



// Seattle	23	65	6.3
// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6


let hour = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];






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


  // <th><th>  ----------------- empty
  const td1Element = document.createElement('td');

  trElement.appendChild (td1Element);

  td1Element.textContent = this.location;


  for (let i =0;i<hour.length ; i++)
  {
    // <th></th> --------------------- hours
    const tdElement = document.createElement('td');

    trElement.appendChild (tdElement);

    tdElement.textContent = this.logCookiesPerHour[i];
  }


  // <th><th>  ----------------- last one
  const td2Element = document.createElement('td');

  trElement.appendChild (td2Element);

  td2Element.textContent = this.totalLocation;

};


//-----------------------------------------------------------------------------------------






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

  let objArr = [seattle, tokyo, dubai, paris, lima];
  let total1;

  for(let i = 0; i < hour.length; i++) {
    total1 = 0;

    // <th><th>  -----------------
    const thElement = document.createElement('th');
    trElement.appendChild(thElement);

    for(let x = 0; x < objArr.length; x++) // 5 locations
    {
      total1 = total1 + objArr[x].logCookiesPerHour[i];
    }

    thElement.textContent = total1;
  }

  // Total of toalLocation --------------------

  let total2 = 0;

  // <th><th>  -----------------
  const th2Element = document.createElement('th');
  trElement.appendChild(th2Element);


  for(let i = 0; i < objArr.length; i++) //dynamic variable
  {
    total2 = total2 + objArr[i].totalLocation;
  }

  th2Element.textContent = total2;

};





// Invoking ------------------------------------------------------------------------------------------

//--------------------------- Header ------------------------------------------
renderHeader();

// //--------------------------------Seattle------------------------------------
seattle.getCustomersPerHour();
seattle.getCookiesPerHour();
seattle.getLocationTotal();
console.log(seattle);
seattle.renderData();



// //--------------------------------TOKYO------------------------------------




tokyo.getCustomersPerHour();
tokyo.getCookiesPerHour();
tokyo.getLocationTotal();
console.log(tokyo);
tokyo.renderData();



// //--------------------------------DUBAI-----------------------------------


dubai.getCustomersPerHour();
dubai.getCookiesPerHour();
dubai.getLocationTotal();
console.log(dubai);
dubai.renderData();



// //--------------------------------PARIS-----------------------------------



paris.getCustomersPerHour();
paris.getCookiesPerHour();
paris.getLocationTotal();
console.log(paris);
paris.renderData();


// //--------------------------------LIMA-------------------------------------



lima.getCustomersPerHour();
lima.getCookiesPerHour();
lima.getLocationTotal();
console.log(lima);
lima.renderData();

//---------------------------Footer ------------------------------------------
renderFooter();
