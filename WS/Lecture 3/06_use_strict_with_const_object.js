"use strict"
const obj={};
Object.defineProperty(obj,"y",{value:15,writable:false});
obj.y=19;
// ----This code gives an error since the object created with const then it only has readable property not writeable property
// --- Also remeber that any thing declared in the "use strict" mode will only be  a readable property not a writable property

 