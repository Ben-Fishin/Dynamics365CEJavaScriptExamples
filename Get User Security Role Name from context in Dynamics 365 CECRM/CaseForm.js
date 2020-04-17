/*
* This Sample Code is provided for the purpose of illustration only and is not intended to be used in a production environment.  
* THIS SAMPLE CODE AND ANY RELATED INFORMATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, 
* INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE.  We grant You 
* a nonexclusive, royalty-free right to use and modify the Sample Code and to reproduce and distribute the object code form of t
* he Sample Code, provided that You agree: (i) to not use Our name, logo, or trademarks to market Your software product in which 
* the Sample Code is embedded; (ii) to include a valid copyright notice on Your software product in which the Sample Code is 
* embedded; and (iii) to indemnify, hold harmless, and defend Us and Our suppliers from and against any claims or lawsuits, 
* including attorneys� fees, that arise or result from the use or distribution of the Sample Code.
* 
* Please note: None of the conditions outlined in the disclaimer above will supersede the terms and conditions contained within 
* the Premier Customer Services Description.
* 
* Extended from CRM SDK References: 
* https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#roles
*/

var CaseForm = window.CaseForm || {};

/**
 * @function FromOnload 
 * @description Configured in form properties to trigger on form load
 */
"use strict";
CaseForm.FromOnload = function () {
    //debugger;
    //sample use checking if current user has Security Role name
    var roleName = "Customer Service Representative";
    Xrm.Navigation.openAlertDialog("Is " + roleName + " " + CaseForm.UserHasRoleName(roleName).toString());
}

/**
 * @function UserHasRoleName 
 * @description Return true or false if running user has Security Role by Name passed in parameter
 * @roleName String with exact match of Security Role name in question
 * @return bool
 */
"use strict";
CaseForm.UserHasRoleName = function (roleName) {
    //debugger;
    //get the globalContext
    var globalContext = Xrm.Utility.getGlobalContext();
    //get the rolesArray
    var userRoles = globalContext.userSettings.roles;
    //initialize return value
    var hasRole = false;
    //foeach item in array
    userRoles.forEach(function hasRoleName(item, index) {
        //Check passed in value for role[].name match 
        if (item.name === roleName) {
            //match found set return value to true
            hasRole = true;
        };
    });
    return hasRole;
}