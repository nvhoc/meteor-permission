Iron.Router.hooks.secureHook = function () {
    var self = this;
    var isNext = PERMISSION.doActionWithPermission('route', Router.current().url, function () {
        self.next();
    });
    if (!isNext) {
        Router.go('/');
    }
};
Router.onBeforeAction('secureHook');