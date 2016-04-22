/**
 * Created by dell on 2016/4/20.
 */
angular.module('App', ['ionic','ui.router','ngCordova'])


  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        cache:'false',
        controller: 'LoginController',
        templateUrl: 'release/gradms/login/login.html'
      })

      .state('achinsert', {
        url: '/achinsert',
        cache:'false',
        controller: 'achinsertController',
        templateUrl: 'release/gradms/achinsert/AchievementInsertByTeacher.html'
      })



    $urlRouterProvider.otherwise('/login');
  })

  .controller('LeftMenuController',function($scope){
    var myModule = angular.module('myModule', []);
    myModule.factory('serviceId', function() {
      var shinyNewServiceInstance;
      // factory function body that constructs shinyNewServiceInstance
      return shinyNewServiceInstance;
    });
  })
