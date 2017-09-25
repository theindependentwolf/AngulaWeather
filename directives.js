weatherApp.directive("weatherReport",function(){
    return{
        restrict: 'E', //only element
        templateUrl: 'directives/weatherReport.html',
        replace: true,
        scope: {
            weatherDay : "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
});
