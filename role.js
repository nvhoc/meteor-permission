ROLE=function() {
    var role = "";
    this.isUserInRole = function (type, path) {
        if (permission[type].deny == 'all')
            return (permission[type].allow.indexOf(path) != -1);
        if (permission[type].deny.indexOf(path) != -1)
            return false;
        if (permission[type].allow == 'all')
            return (permission[type].deny.indexOf(path) == -1);
        return (permission[type].allow.indexOf(path) != -1);
    };
    var permission = {
        route: {
            'allow': [],
            'deny': []
        },
        collection_read: {
            'allow': [],
            'deny': []
        },
        collection_write: {
            'allow': [],
            'deny': []
        },
        method: {
            'allow': [],
            'deny': []
        },
        ui: {
            'allow': [],
            'deny': []
        }
    };

    function ROLE(aNewRole) {
        role = aNewRole;
    };
    this.setPermission = function (kind, type, path) {
        if (permission[type][kind] == 'all')
            permission[type][kind] = [];
        permission[type][kind].push('path');
    };
    this.setPermissionAll = function (kind, type) {
        permission[type][kind] = 'all';

    };
}