Mongo.Collection.prototype.makeSecure = function(){
    this.allow({
        insert: function (userId, doc) {
            return false;
        },

        update: function (userId, doc, fieldNames, modifier) {
            return false;
        },

        remove: function (userId, doc) {
            return false;
        }
    });
};
Mongo.Collection.prototype.secureFind = function(){
    var Func = Mongo.Collection.prototype.find;
    var f_args = Array.prototype.slice.call(arguments);
    PERMISSION.doActionWithPermission('collection_read',this._name,function(){
        Func.apply(f_args);
    })

};
Mongo.Collection.prototype.secureInsert = function(){
    var Func = Mongo.Collection.prototype.insert;
    var f_args = Array.prototype.slice.call(arguments);
    PERMISSION.doActionWithPermission('collection_write',this._name,function(){
        Func.apply(f_args);
    })

};
Mongo.Collection.prototype.secureUpdate = function(){
    var Func = Mongo.Collection.prototype.update;
    var f_args = Array.prototype.slice.call(arguments);
    PERMISSION.doActionWithPermission('collection_write',this._name,function(){
        Func.apply(f_args);
    })

};
Mongo.Collection.prototype.secureRemove = function(){
    var Func = Mongo.Collection.prototype.remove;
    var f_args = Array.prototype.slice.call(arguments);
    PERMISSION.doActionWithPermission('collection_write',this._name,function(){
        Func.apply(f_args);
    })

};