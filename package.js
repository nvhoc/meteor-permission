Package.describe({
    name: 'hocnv:meteor-permission',
    summary: "Provide a permission manager",
    version: "0.0.1"
});

Package.on_use(function (api) {
    api.use('mongo');
    api.use('iron:router');
    api.add_files(['collection.js']);
    api.add_files(['method.js'],'server');
    api.add_files(['route_client.js'], 'client');
    api.add_files(['route_server.js'], 'server');
    api.add_files(['ui.js']);
    api.add_files(['role.js']);
    api.add_files(['permission.js']);
    api.export('PERMISSION');
});
