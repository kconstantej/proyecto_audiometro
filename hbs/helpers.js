const hbs = require('hbs');


//HELPERS

hbs.registerHelper('getanio', () => {
    return new Date().getFullYear();
});



hbs.registerHelper('when', function(predicate, options) {
    var declarations = '';
    for (var field in this) declarations += field + ' = this.' + field + ',';
    if (eval(declarations + predicate)) { return options.fn(this); }
});




hbs.registerHelper('ifvalue', function(conditional, options) {
    if (options.hash.value === conditional) {
        return options.fn(this)
    } else {
        return options.inverse(this);
    }
});