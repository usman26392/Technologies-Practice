

let NameViewModel = function(fname, lname) {
    let currentItm = this;
    currentItm.firstName = ko.observable(fname);
    currentItm.lastName =  ko.observable(lname);
    currentItm.fullName = ko.computed(function(){
        return currentItm.firstName() + " " + currentItm.lastName()
    });
    
}


let a = new NameViewModel("Muhammad", "Usman");
ko.applyBindings(a);    
console.log(a)