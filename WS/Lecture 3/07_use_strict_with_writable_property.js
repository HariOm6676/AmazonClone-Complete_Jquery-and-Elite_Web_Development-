// Use of strict mode on get only property
"use strict";
const obj={
    get x(){return 2}
};
obj.x=15;