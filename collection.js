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
    var Func = this.find;
    var f_args = Array.prototype.slice.call(arguments);
    var result = {};
    var that = this;
    PERMISSION.doActionWithPermission('collection_read',this._name,function(){
        result = Func.apply(that,f_args);
    });
    return result;

};
Mongo.Collection.prototype.secureFindOne = function(){
    var Func = this.findOne;
    var f_args = Array.prototype.slice.call(arguments);
    var result = {};
    var that = this;
    PERMISSION.doActionWithPermission('collection_read',this._name,function(){
        result = Func.apply(that,f_args);
    });
    return result;

};
Mongo.Collection.prototype.secureInsert = function(){
    var Func = this.insert;
    var f_args = Array.prototype.slice.call(arguments);
    var result = {};
    var that = this;
    PERMISSION.doActionWithPermission('collection_write',this._name,function(){
        result = Func.apply(that,f_args);
    });
    return result;

};
Mongo.Collection.prototype.secureUpdate = function(){
    var Func = this.update;
    var f_args = Array.prototype.slice.call(arguments);
    var result = {};
    var that = this;
    PERMISSION.doActionWithPermission('collection_write',this._name,function(){
        result = Func.apply(that,f_args);
    });
    return result;

};
Mongo.Collection.prototype.secureRemove = function(){
    var Func = this.remove;
    var f_args = Array.prototype.slice.call(arguments);
    var result = {};
    var that = this;
    PERMISSION.doActionWithPermission('collection_write',this._name,function(){
        result = Func.apply(that,f_args);
    });
    return result;

};