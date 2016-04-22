/**
 * Created by dell on 2016/4/20.
 */
angular.module('App')
  .controller('achinsertController', function ($scope, $http,$ionicLoading,$ionicModal,
                                           $timeout) {

  $scope.achinsert=function() {
    var params="reactPageName=newCultivateTeachSchedulePage";
    params+="&reactActionName=showNotPassStuListInit";
    $http({
      method: "post",
      url: "http://211.87.225.207:8080/gradms/bsuims/reactPageDataRequest.do"+params,
      data: {
        reactPageName:"newCultivateTeachSchedulePage",
        reactActionName:"showNotPassStuListInit"
      }
      }).success(function(response){
        alert("response"+response);
      $scope.colls=response.arr;
    }).error(function(err) {
      alert("error"+err);
      console.log("connect err:" + err);
    });
  }
$scope.colls=null;




  });
