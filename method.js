// =============================================================================
// ,,,,,,,,, ,,,
// ,,,,,,,, ,,,  Copyright:
// ,,,     ,,,          This source is subject to the Designveloper JSC
// ,,,    ,,,           All using or modify must have permission from us.
// ,,,   ,,,            http://designveloper.com
// ,,,,,,,,
// ,,,,,,,       Name:  DSVScriptTemplate
//
// Purpose:
//          Describe the purpose of the script [short version]
// Class:
//          one ; two ; three
// Functions:
//          one ; two ; three
// Called From:
//          (script) any
// Author:
//          hocnguyen
// Notes:
//          Additional information [long version]
// Changelog:
//          1/16/16 - hocnguyen - Init first revision.
// =============================================================================
Meteor.secureMethod = function(){
    var f_args = Array.prototype.slice.call(arguments);
    var methodList = {};
    for (var key_arg in f_args){
        methodList[key_arg] = PERMISSION.doActionWithPermission('method',key_arg,function(){
           f_args[key_arg]();
        });
    };
    Meteor.methods(methodList);
};