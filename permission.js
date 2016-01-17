PERMISSION = (function(){
    PERMISSION.ROLELIST={};
    /**
     * @return {boolean}
     */
    var ISPASS = function(type,path){
        var roles = Meteor.user().roles;
        roles.forEach(function(role){
            if (!PERMISSION.ROLELIST[role].isUserInRole(type,path))
                return false;
        });
        return true;
    };
    PERMISSION.init = function(list){
        list.forEach(function(role){
            var roleObject = new ROLE(role);
            PERMISSION.ROLELIST[role.name]= roleObject;
        });
    }
    PERMISSION.doActionWithPermission = function(type,path,cb){
        //TODO 1. get Role
        if (!ISPASS(type,path))
            return false;
        cb();
        return true;
    }

})();