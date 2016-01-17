Iron.Router.hooks.secureHook = function () {
    var self = this;
    var isNext = Permission.doActionWithPermission('route', Router.current().url, function () {
        self.next();
    });
    if (!isNext) {
        Router.go('/');
    }
};
Router.onBeforeAction(function (req, res, next) {
    console.log(req);
    next();
}, {where: 'server'});