﻿app.controller("page_one", page_one);
page_one.$inject = ["$scope"];
function page_one($scope) {
    $scope.var_one = "i am from page one controller";
}