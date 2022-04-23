const
  person = {
   "name":"John",
   "age":30,
   "married":true,
   "retired":false,
   "kids":[ "Ann",  "Billy" ],
   "dogs":null,
   "cats":0,
   "properties":{
      "homes":[],
      "rentals":[]
   },
   "loans":[],
   "cars":[
      {
         "model":"BMW 230",
         "mpg":27.5,
         "vin":"",
         "manual":true,
         "accidentHistory":[]
      },
      {
         "model":"Ford Edge",
         "mpg":24.1,
         "features":[]
      },
      [
         {
            "model":"Tesla Model S",
            "mpg":null,
            "accidentHistory":[]
         }
      ]
   ]
}


/**
* Takes in an objects and removes all the key-value pairs that
* have an empty array in them.
*
*@example
* ```js
* // { "properties": {"homes": [], "rentals": []} }
* // becomes
* // { "properties": { } }
* ```
*
* @param input {object} Dynamic object with possible nested values.
*/

function prune(input) {
   // To skip null or nonobject
   if (!input || typeof input !== 'object') return input;
   else if (input.length === 0) return undefined;
   else if (input.length > 0) return input.map(v => prune(v)).filter(v => v !== undefined);
   else return Object.entries(input).reduce((s, [k,v]) => {const r = prune(v); if (r !== undefined) s[k] = r; return s;}, {});
}

const result = prune(person);
console.log(result, JSON.stringify(result));
