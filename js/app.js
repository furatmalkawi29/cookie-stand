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

const Seattle = {
  location: 'Seattle',
  averageCookies: 6.3,
  minCustomerPerHour: 23,
  maxCustomerPerHour: 65,
  result: [],
  total: 0,

  getCookiesPerHour: function () {
    let cookies = Math.ceil(this.getCustomersPerHour () * this.averageCookies);

    return cookies;
  },

  getCustomersPerHour : function ()
  { let min =  this.minCustomerPerHour;
    let max = this.maxCustomerPerHour;
    let numbCustomersPerHour = Math.floor(Math.random() * (max - min + 1) + min);

    return numbCustomersPerHour ;
  },



  workHours: function () {
    let cookiesPerHour = 0;
    for (let i =0; i<14 ;i++)
    {
      cookiesPerHour = this.getCookiesPerHour();
      this.result.push(cookiesPerHour);
    }
    return this.result;

  },

  totalSum: function ()
  {

    for (let i=0 ; i<14 ; i++)
    {
      this.total=this.total + this.result[i];
      console.log(this.total);
    }
    console.log(this.total);
  },




  render: function ()
  {
    //Parent Element div seattle
    const parentElement = document.getElementById('seattle');


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
    for (let i=0; i<14 ;i++)
    {
      const liElement = document.createElement ('li'); // new <li> element
      ulElement.appendChild(liElement); // append to <ul>

      // add content to <li>
      if (i<6) {
        // before 12pm
        liElement.textContent = `${i+6}am: ${this.result[i]} cookies`;
      } else if (i===6) {
        // 12pm
        liElement.textContent = `${i+6}pm: ${this.result[i]} cookies`;
      } else if (i>6) {
        //after 12 pm
        liElement.textContent = `${i-6}pm: ${this.result[i]} cookies`;
      }


    }

    const liElement = document.createElement ('li'); // new <li> element
    ulElement.appendChild(liElement); // append to <ul>
    liElement.textContent = `Total: ${this.total} cookies`;
  }


};






//--------------------------------TOKYO------------------------------------
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//--------------------------------------------------------------------------






const Tokyo = {
  location: 'Tokyo',
  averageCookies: 6.3,
  minCustomerPerHour: 23,
  maxCustomerPerHour: 65,
  result: [],
  total: 0,

  getCookiesPerHour: function () {
    let cookies = Math.ceil(this.getCustomersPerHour () * this.averageCookies);

    return cookies;
  },

  getCustomersPerHour : function ()
  { let min =  this.minCustomerPerHour;
    let max = this.maxCustomerPerHour;
    let numbCustomersPerHour = Math.floor(Math.random() * (max - min + 1) + min);

    return numbCustomersPerHour ;
  },



  workHours: function () {
    let cookiesPerHour = 0;
    for (let i =0; i<14 ;i++)
    {
      cookiesPerHour = this.getCookiesPerHour();
      this.result.push(cookiesPerHour);
    }
    return this.result;

  },

  totalSum: function ()
  {

    for (let i=0 ; i<14 ; i++)
    {
      this.total=this.total + this.result[i];
      console.log(this.total);
    }
    console.log(this.total);
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
    for (let i=0; i<14 ;i++)
    {
      const liElement = document.createElement ('li'); // new <li> element
      ulElement.appendChild(liElement); // append to <ul>

      // add content to <li>
      if (i<6) {
        // before 12pm
        liElement.textContent = `${i+6}am: ${this.result[i]} cookies`;
      } else if (i===6) {
        // 12pm
        liElement.textContent = `${i+6}pm: ${this.result[i]} cookies`;
      } else if (i>6) {
        //after 12 pm
        liElement.textContent = `${i-6}pm: ${this.result[i]} cookies`;
      }


    }

    const liElement = document.createElement ('li'); // new <li> element
    ulElement.appendChild(liElement); // append to <ul>
    liElement.textContent = `Total: ${this.total} cookies`;
  }


};












//--------------------------------DUBAI-----------------------------------
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//--------------------------------------------------------------------------






const Dubai = {
  location: 'Dubai',
  averageCookies: 6.3,
  minCustomerPerHour: 23,
  maxCustomerPerHour: 65,
  result: [],
  total: 0,

  getCookiesPerHour: function () {
    let cookies = Math.ceil(this.getCustomersPerHour () * this.averageCookies);

    return cookies;
  },

  getCustomersPerHour : function ()
  { let min =  this.minCustomerPerHour;
    let max = this.maxCustomerPerHour;
    let numbCustomersPerHour = Math.floor(Math.random() * (max - min + 1) + min);

    return numbCustomersPerHour ;
  },



  workHours: function () {
    let cookiesPerHour = 0;
    for (let i =0; i<14 ;i++)
    {
      cookiesPerHour = this.getCookiesPerHour();
      this.result.push(cookiesPerHour);
    }
    return this.result;

  },

  totalSum: function ()
  {

    for (let i=0 ; i<14 ; i++)
    {
      this.total=this.total + this.result[i];
      console.log(this.total);
    }
    console.log(this.total);
  },




  render: function ()
  {
    //Parent Element div dubai
    const parentElement = document.getElementById('dubai');


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
    for (let i=0; i<14 ;i++)
    {
      const liElement = document.createElement ('li'); // new <li> element
      ulElement.appendChild(liElement); // append to <ul>

      // add content to <li>
      if (i<6) {
        // before 12pm
        liElement.textContent = `${i+6}am: ${this.result[i]} cookies`;
      } else if (i===6) {
        // 12pm
        liElement.textContent = `${i+6}pm: ${this.result[i]} cookies`;
      } else if (i>6) {
        //after 12 pm
        liElement.textContent = `${i-6}pm: ${this.result[i]} cookies`;
      }


    }

    const liElement = document.createElement ('li'); // new <li> element
    ulElement.appendChild(liElement); // append to <ul>
    liElement.textContent = `Total: ${this.total} cookies`;
  }


};













//--------------------------------PARIS-----------------------------------
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//--------------------------------------------------------------------------






const Paris = {
  location: 'Paris',
  averageCookies: 6.3,
  minCustomerPerHour: 23,
  maxCustomerPerHour: 65,
  result: [],
  total: 0,

  getCookiesPerHour: function () {
    let cookies = Math.ceil(this.getCustomersPerHour () * this.averageCookies);

    return cookies;
  },

  getCustomersPerHour : function ()
  { let min =  this.minCustomerPerHour;
    let max = this.maxCustomerPerHour;
    let numbCustomersPerHour = Math.floor(Math.random() * (max - min + 1) + min);

    return numbCustomersPerHour ;
  },



  workHours: function () {
    let cookiesPerHour = 0;
    for (let i =0; i<14 ;i++)
    {
      cookiesPerHour = this.getCookiesPerHour();
      this.result.push(cookiesPerHour);
    }
    return this.result;

  },

  totalSum: function ()
  {

    for (let i=0 ; i<14 ; i++)
    {
      this.total=this.total + this.result[i];
      console.log(this.total);
    }
    console.log(this.total);
  },




  render: function ()
  {
    //Parent Element div paris
    const parentElement = document.getElementById('paris');


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
    for (let i=0; i<14 ;i++)
    {
      const liElement = document.createElement ('li'); // new <li> element
      ulElement.appendChild(liElement); // append to <ul>

      // add content to <li>
      if (i<6) {
        // before 12pm
        liElement.textContent = `${i+6}am: ${this.result[i]} cookies`;
      } else if (i===6) {
        // 12pm
        liElement.textContent = `${i+6}pm: ${this.result[i]} cookies`;
      } else if (i>6) {
        //after 12 pm
        liElement.textContent = `${i-6}pm: ${this.result[i]} cookies`;
      }


    }

    const liElement = document.createElement ('li'); // new <li> element
    ulElement.appendChild(liElement); // append to <ul>
    liElement.textContent = `Total: ${this.total} cookies`;
  }


};






//--------------------------------LIMA-------------------------------------
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//--------------------------------------------------------------------------






const Lima = {
  location: 'Lima',
  averageCookies: 6.3,
  minCustomerPerHour: 23,
  maxCustomerPerHour: 65,
  result: [],
  total: 0,

  getCookiesPerHour: function () {
    let cookies = Math.ceil(this.getCustomersPerHour () * this.averageCookies);

    return cookies;
  },

  getCustomersPerHour : function ()
  { let min =  this.minCustomerPerHour;
    let max = this.maxCustomerPerHour;
    let numbCustomersPerHour = Math.floor(Math.random() * (max - min + 1) + min);

    return numbCustomersPerHour ;
  },



  workHours: function () {
    let cookiesPerHour = 0;
    for (let i =0; i<14 ;i++)
    {
      cookiesPerHour = this.getCookiesPerHour();
      this.result.push(cookiesPerHour);
    }
    return this.result;

  },

  totalSum: function ()
  {

    for (let i=0 ; i<14 ; i++)
    {
      this.total=this.total + this.result[i];
      console.log(this.total);
    }
    console.log(this.total);
  },




  render: function ()
  {
    //Parent Element div lima
    const parentElement = document.getElementById('lima');


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
    for (let i=0; i<14 ;i++)
    {
      const liElement = document.createElement ('li'); // new <li> element
      ulElement.appendChild(liElement); // append to <ul>

      // add content to <li>
      if (i<6) {
        // before 12pm
        liElement.textContent = `${i+6}am: ${this.result[i]} cookies`;
      } else if (i===6) {
        // 12pm
        liElement.textContent = `${i+6}pm: ${this.result[i]} cookies`;
      } else if (i>6) {
        //after 12 pm
        liElement.textContent = `${i-6}pm: ${this.result[i]} cookies`;
      }


    }

    const liElement = document.createElement ('li'); // new <li> element
    ulElement.appendChild(liElement); // append to <ul>
    liElement.textContent = `Total: ${this.total} cookies`;
  }


};






//Invoking:
//Seattle
Seattle.workHours();
Seattle.totalSum();
Seattle.render();

// ----------------------

//Tokyo
Tokyo.workHours();
Tokyo.totalSum();
Tokyo.render();


// ----------------------

//Dubai
Dubai.workHours();
Dubai.totalSum();
Dubai.render();


// ----------------------

//Paris
Paris.workHours();
Paris.totalSum();
Paris.render();

// ----------------------

//Lima
Lima.workHours();
Lima.totalSum();
Lima.render();





