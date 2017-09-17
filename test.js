const ct = require('./')('Asia/Kolkata');

console.log(ct); 						//2017-09-17T04:46:12.000Z
console.log(ct.getDate());				// 17
console.log(ct.getMonth());				// 8
console.log(ct.getFullYear());			// 2017
console.log(ct.toGMTString());			// Sun, 17 Sep 2017 04:46:12 GMT
console.log(ct.toDateString());			// Sun Sep 17 2017
console.log(ct.toTimeString());			// 10:16:12 GMT+0530 (IST)
console.log(ct.toLocaleString());		// 9/17/2017, 10:16:12 AM
console.log(ct.toLocaleDateString());	// 9/17/2017
console.log(ct.toLocaleTimeString());	// 10:16:12 AM
console.log(ct.getHours());				// 10


// For more : https://ecma-international.org/ecma-262/5.1/#sec-15.9
