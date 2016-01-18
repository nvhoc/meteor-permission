PERMISSION = {
    ROLELIST: {
        none: new ROLE('none')
    },
    length: 1,
    /**
     * @return {boolean}
     */
    ISPASS: function (type, path) {
        try {
            var roles = Meteor.user().roles;
        } catch (e) {
            roles = ['none'];
        }
        if (!roles)
            roles = ['none'];
        var l = roles.length;
        for (var i =0; i< l; i++){
            var role = roles[i];
            if (PERMISSION.ROLELIST[role].isUserInRole(type, path))
                return true;
        };
        return false;
    },
    init: function (list) {
        list.forEach(function (role) {
            var roleObject = new ROLE(role);
            PERMISSION.ROLELIST[role.name] = roleObject;
        });
        PERMISSION.length = list.length;
    },
    doActionWithPermission: function (type, path, cb) {
        //TODO 1. get Role
        if (!PERMISSION.ISPASS(type, path))
            return false;
        cb();
        return true;
    },
    addRole: function(role){
        PERMISSION.ROLELIST[role]= new ROLE(role);
        PERMISSION.length +=1;
    }

};
if (PERMISSION.length == 1 && PERMISSION.ROLELIST.none) {
    console.log(PERMISSION.ROLELIST.none);
    PERMISSION.ROLELIST.none.setPermissionAll('allow', 'route');
    PERMISSION.ROLELIST.none.setPermissionAll('allow', 'method');
    PERMISSION.ROLELIST.none.setPermissionAll('allow', 'collection_read');
    PERMISSION.ROLELIST.none.setPermissionAll('allow', 'collection_write');
    PERMISSION.ROLELIST.none.setPermissionAll('allow', 'ui');
}