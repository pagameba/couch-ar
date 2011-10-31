var domain = require('couch-ar');

domain.create('TestUser',{
    dbName: 'couch-ar-test2',
    properties:{
        username: {},
        password: {},
        firstName:{},
        lastName: {},
        fullName: {}
    },
    views: {
        firstOrLastName: {map: function(doc) {
            emit(doc.firstName, doc);
            emit(doc.lastName, doc);
        }}
    }
}, function(that) {
    that.beforeSave = function() {
        that.fullName = that.firstName + ' ' + that.lastName;
    }
    return that;
});


