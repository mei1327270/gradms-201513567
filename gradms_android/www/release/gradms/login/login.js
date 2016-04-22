/**
 * Created by outstudio on 16/3/28.
 */
angular.module('App')
    .controller('LoginController', function ($scope, $http,$ionicLoading,$ionicModal,
                                                $timeout) {

    $scope.user=new Object();
    $scope.login=function(){



      var params="login_strLoginName=047a01";
      params+="&login_strPassword=047a01047a01";
      params+="&contextPath=/gradms";
      params+="&contextName=gradmsLoginPage";
      params+="&sectionName=login";
      params+="&itemName=MobileWebLoginAction";
      params+="&j_username=047a01";
      params+="&j_password=047a01047a01";
      $http({
        method: "post",
        url: "http://211.87.225.207:8080/gradms/bsuims/bsMainFrameInit.do?"+params,
        data: {
          username:"wjj"
        },
        headers: {
          'Access-Control-Allow-Origin': "*"
        }
      }).success(function(response){
        var str="";
        for(var field in response)
        {
          str+=field+":"+response[field]+"\r\n";
        }
        alert("result="+str);
      }).error(function(err) {
        alert("error"+err);
        console.log("connect err:" + err);
      });
    }


    });
