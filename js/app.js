'use strict';

// Tokyo;
// Dubai;
// Paris;
// Lima;

// Seattle	23	65	6.3
// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6

let hour = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

const Seattle = {
  location: 'Seattle',
  averageCookies: 6.3,
  minCustomerPerHour: 23,
  maxCustomerPerHour: 65,
  logCustomerPerHour: [],
  logCookiesPerHour: [],
  total: 0,

  getCookiesPerHour: function () {


    for (let i =0; i<hour.length ;i++)
    {
      this.logCookiesPerHour.push(Math.ceil(this.logCustomerPerHour[i] * this.averageCookies));
    }

    return this.logCookiesPerHour;

  },

  getCustomersPerHour : function () {
    let min =  this.minCustomerPerHour;
    let max = this.maxCustomerPerHour;


    for (let i =0; i<hour.length ; i++)
    {
      this.logCustomerPerHour.push( Math.ceil(Math.random() * (max - min + 1) + min));
    }

    return this.logCustomerPerHour ;
  },


  totalSum: function ()
  {

    for (let i=0 ; i<14 ; i++)
    {
      this.total=this.total + this.logCookiesPerHour[i];
    }

    return this.total ;

  },

  render: function ()
  {
    //Parent Element div
    const parentElement = document.getElementById ('seattle');


    // <h1></h1> ----------------
    //1) Creat Element
    const h1Element = document.createElement('h1');

    //2) Append Element to parent
    parentElement.appendChild (h1Element);

    //3) Set text content
    h1Element.textContent = this.location;


    // <ul></ul> ----------------
    const ulElement = document.createElement ('ul');
    parentElement.appendChild(ulElement);


    // <li></li> ----------------
    for (let i=0; i<hour.length ;i++)
    {
      const liElement = document.createElement ('li'); // new <li> element
      ulElement.appendChild(liElement); // append to <ul>

      // add content to <li>
      liElement.textContent = `${hour[i]}: ${this.logCookiesPerHour[i]} cookies`;
    }

    const liElement = document.createElement ('li'); // new <li> element
    ulElement.appendChild(liElement); // append to <ul>
    liElement.textContent = `Total: ${this.total} cookies`;
  },


};


Seattle.getCustomersPerHour();
Seattle.getCookiesPerHour();
Seattle.totalSum();
console.log(Seattle);
Seattle.render();


//--------------------------------TOKYO------------------------------------
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//--------------------------------------------------------------------------




const tokyo = {
  location: 'Tokyo',
  averageCookies: 1.2,
  minCustomerPerHour: 3,
  maxCustomerPerHour: 24,
  logCustomerPerHour: [],
  logCookiesPerHour: [],
  total: 0,

  getCookiesPerHour: function () {


    for (let i =0; i<hour.length ;i++)
    {
      this.logCookiesPerHour.push(Math.ceil(this.logCustomerPerHour[i] * this.averageCookies));
    }

    return this.logCookiesPerHour;

  },

  getCustomersPerHour : function () {
    let min =  this.minCustomerPerHour;
    let max = this.maxCustomerPerHour;


    for (let i =0; i<hour.length ; i++)
    {
      this.logCustomerPerHour.push( Math.ceil(Math.random() * (max - min + 1) + min));
    }

    return this.logCustomerPerHour ;
  },


  totalSum: function ()
  {

    for (let i=0 ; i<14 ; i++)
    {
      this.total=this.total + this.logCookiesPerHour[i];
    }

    return this.total ;

  },

  render: function ()
  {
    //Parent Element div tokyo
    const parentElement = document.getElementById ('tokyo');


    // <h1></h1> ----------------
    //1) Creat Element
    const h1Element = document.createElement('h1');

    //2) Append Element to parent
    parentElement.appendChild (h1Element);

    //3) Set text content
    h1Element.textContent = this.location;


    // <ul></ul> ----------------
    const ulElement = document.createElement ('ul');
    parentElement.appendChild(ulElement);


    // <li></li> ----------------
    for (let i=0; i<hour.length ;i++)
    {
      const liElement = document.createElement ('li'); // new <li> element
      ulElement.appendChild(liElement); // append to <ul>

      // add content to <li>
      liElement.textContent = `${hour[i]}: ${this.logCookiesPerHour[i]} cookies`;
    }

    const liElement = document.createElement ('li'); // new <li> element
    ulElement.appendChild(liElement); // append to <ul>
    liElement.textContent = `Total: ${this.total} cookies`;
  },


};





tokyo.getCustomersPerHour();
tokyo.getCookiesPerHour();
tokyo.totalSum();
console.log(tokyo);
tokyo.render();






//--------------------------------DUBAI-----------------------------------
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//--------------------------------------------------------------------------





const dubai = {
  location: 'Dubai',
  averageCookies: 	3.7,
  minCustomerPerHour: 11,
  maxCustomerPerHour: 38,
  logCustomerPerHour: [],
  logCookiesPerHour: [],
  total: 0,

  getCookiesPerHour: function () {


    for (let i =0; i<hour.length ;i++)
    {
      this.logCookiesPerHour.push(Math.ceil(this.logCustomerPerHour[i] * this.averageCookies));
    }

    return this.logCookiesPerHour;

  },

  getCustomersPerHour : function () {
    let min =  this.minCustomerPerHour;
    let max = this.maxCustomerPerHour;


    for (let i =0; i<hour.length ; i++)
    {
      this.logCustomerPerHour.push( Math.ceil(Math.random() * (max - min + 1) + min));
    }

    return this.logCustomerPerHour ;
  },


  totalSum: function ()
  {

    for (let i=0 ; i<14 ; i++)
    {
      this.total=this.total + this.logCookiesPerHour[i];
    }

    return this.total ;

  },

  render: function ()
  {
    //Parent Element div 
    const parentElement = document.getElementById ('dubai');


    // <h1></h1> ----------------
    //1) Creat Element
    const h1Element = document.createElement('h1');

    //2) Append Element to parent
    parentElement.appendChild (h1Element);

    //3) Set text content
    h1Element.textContent = this.location;


    // <ul></ul> ----------------
    const ulElement = document.createElement ('ul');
    parentElement.appendChild(ulElement);


    // <li></li> ----------------
    for (let i=0; i<hour.length ;i++)
    {
      const liElement = document.createElement ('li'); // new <li> element
      ulElement.appendChild(liElement); // append to <ul>

      // add content to <li>
      liElement.textContent = `${hour[i]}: ${this.logCookiesPerHour[i]} cookies`;
    }

    const liElement = document.createElement ('li'); // new <li> element
    ulElement.appendChild(liElement); // append to <ul>
    liElement.textContent = `Total: ${this.total} cookies`;
  },


};




dubai.getCustomersPerHour();
dubai.getCookiesPerHour();
dubai.totalSum();
console.log(dubai);
dubai.render();





//--------------------------------PARIS-----------------------------------
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//--------------------------------------------------------------------------




const paris = {
  location: 'Paris',
  averageCookies: 2.365,
  minCustomerPerHour: 20,
  maxCustomerPerHour: 38,
  logCustomerPerHour: [],
  logCookiesPerHour: [],
  total: 0,

  getCookiesPerHour: function () {


    for (let i =0; i<hour.length ;i++)
    {
      this.logCookiesPerHour.push(Math.ceil(this.logCustomerPerHour[i] * this.averageCookies));
    }

    return this.logCookiesPerHour;

  },

  getCustomersPerHour : function () {
    let min =  this.minCustomerPerHour;
    let max = this.maxCustomerPerHour;


    for (let i =0; i<hour.length ; i++)
    {
      this.logCustomerPerHour.push( Math.ceil(Math.random() * (max - min + 1) + min));
    }

    return this.logCustomerPerHour ;
  },


  totalSum: function ()
  {

    for (let i=0 ; i<14 ; i++)
    {
      this.total=this.total + this.logCookiesPerHour[i];
    }

    return this.total ;

  },

  render: function ()
  {
    //Parent Element div 
    const parentElement = document.getElementById ('paris');


    // <h1></h1> ----------------
    //1) Creat Element
    const h1Element = document.createElement('h1');

    //2) Append Element to parent
    parentElement.appendChild (h1Element);

    //3) Set text content
    h1Element.textContent = this.location;


    // <ul></ul> ----------------
    const ulElement = document.createElement ('ul');
    parentElement.appendChild(ulElement);


    // <li></li> ----------------
    for (let i=0; i<hour.length ;i++)
    {
      const liElement = document.createElement ('li'); // new <li> element
      ulElement.appendChild(liElement); // append to <ul>

      // add content to <li>
      liElement.textContent = `${hour[i]}: ${this.logCookiesPerHour[i]} cookies`;
    }

    const liElement = document.createElement ('li'); // new <li> element
    ulElement.appendChild(liElement); // append to <ul>
    liElement.textContent = `Total: ${this.total} cookies`;
  },


};



paris.getCustomersPerHour();
paris.getCookiesPerHour();
paris.totalSum();
console.log(paris);
paris.render();



//--------------------------------LIMA-------------------------------------
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//--------------------------------------------------------------------------




const lima = {
  location: 'Lima',
  averageCookies: 4.6,
  minCustomerPerHour: 2,
  maxCustomerPerHour: 16,
  logCustomerPerHour: [],
  logCookiesPerHour: [],
  total: 0,

  getCookiesPerHour: function () {


    for (let i =0; i<hour.length ;i++)
    {
      this.logCookiesPerHour.push(Math.ceil(this.logCustomerPerHour[i] * this.averageCookies));
    }

    return this.logCookiesPerHour;

  },

  getCustomersPerHour : function () {
    let min =  this.minCustomerPerHour;
    let max = this.maxCustomerPerHour;


    for (let i =0; i<hour.length ; i++)
    {
      this.logCustomerPerHour.push( Math.ceil(Math.random() * (max - min + 1) + min));
    }

    return this.logCustomerPerHour ;
  },


  totalSum: function ()
  {

    for (let i=0 ; i<14 ; i++)
    {
      this.total=this.total + this.logCookiesPerHour[i];
    }

    return this.total ;

  },

  render: function ()
  {
    //Parent Element div 
    const parentElement = document.getElementById ('lima');


    // <h1></h1> ----------------
    //1) Creat Element
    const h1Element = document.createElement('h1');

    //2) Append Element to parent
    parentElement.appendChild (h1Element);

    //3) Set text content
    h1Element.textContent = this.location;


    // <ul></ul> ----------------
    const ulElement = document.createElement ('ul');
    parentElement.appendChild(ulElement);


    // <li></li> ----------------
    for (let i=0; i<hour.length ;i++)
    {
      const liElement = document.createElement ('li'); // new <li> element
      ulElement.appendChild(liElement); // append to <ul>

      // add content to <li>
      liElement.textContent = `${hour[i]}: ${this.logCookiesPerHour[i]} cookies`;
    }

    const liElement = document.createElement ('li'); // new <li> element
    ulElement.appendChild(liElement); // append to <ul>
    liElement.textContent = `Total: ${this.total} cookies`;
  },


};





lima.getCustomersPerHour();
lima.getCookiesPerHour();
lima.totalSum();
console.log(lima);
lima.render();