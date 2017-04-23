"use strict";
angular.module("myApp", ['ui.router']);

"use strict";
angular.module('myApp')
    .controller('mainCtrl', ['$scope', 'myService', function($scope, myService) {
        $scope.fansData = myService.getUser();
        $scope.currentUserData = myService.getCurrentUser();
        $scope.tabs = myService.getTab();
    }])
    .controller('newCtrl', ['$scope', 'myService', function($scope, myService) {
        $scope.currentUserData = myService.getCurrentUser();
    }])
    .controller('introCtrl', ['$scope', function($scope) {

    }])
    .controller('messageCtrl', ['$scope', function($scope) {

    }])

"use strict";
var tabs = [{
    'key': 'new',
    'tab': '最新动态'
}, {
    'key': 'intro',
    'tab': '简介'
}, {
    'key': 'message',
    'tab': '消息'
}]
var currentUser = {
    'id': 0,
    'name': '苏笑寒',
    'thumb': 'images/a8.jpg',
    'describe': '……',
    'province': '河北',
    'city': '石家庄',
    'star': 20,
    'fansnum': 200,
    'job': "设计师，博客"
};
var userInfo = [{
    'id': 1,
    'admireid': 0,
    'name': '小王',
    'thumb': 'images/a1.jpg',
    'describe': 'Lorem1 ipsum dolor sit amet',
    'province': '河北',
    'city': '石家庄',
    'star': 14,
    'fansnum': 20,
    'job': "设计师，博客"
}, {
    'id': 2,
    'admireid': 0,
    'name': '张琳',
    'thumb': 'images/a2.jpg',
    'describe': 'Lorem2 ipsum dolor sit amet',
    'province': '河北',
    'city': '石家庄',
    'star': 3,
    'fansnum': 100,
    'job': "作家，杂志编辑"
}, {
    'id': 3,
    'admireid': 0,
    'name': '李小明',
    'thumb': 'images/a3.jpg',
    'describe': 'Lorem3 ipsum dolor sit amet',
    'province': '河北',
    'city': '石家庄',
    'star': 6,
    'fansnum': 10,
    'job': "艺术总监，电影剪辑"
}, {
    'id': 4,
    'admireid': 0,
    'name': '赵大城',
    'thumb': 'images/a4.jpg',
    'describe': 'Lorem4 ipsum dolor sit amet',
    'province': '河北',
    'city': '石家庄',
    'star': 20,
    'fansnum': 200,
    'job': "音乐家，运动员"
}]

"use strict";
angular.module('myApp')
    .directive('appHead', [function() {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                data: '='
            },
            templateUrl: 'view/template/head.html'
        }
    }])
    .directive('appMenu', [function() {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                isShow: '=',
                data: '='
            },
            templateUrl: 'view/template/menu.html',
            link: function(sco, ele, attr) {
                sco.show = function() {
                    sco.isShow = !sco.isShow;
                };
            }
        }
    }])
    .directive('appInfo', [function() {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                data: '='
            },
            templateUrl: 'view/template/info.html',
            link: function(sco, ele, attr) {
                sco.supportMes = "支持TA！";
                sco.supportClick = false;
                sco.followClick = false;
                sco.followMes = "关注";
                sco.support = function() {
                    sco.supportClick ? sco.data.star-- : sco.data.star++;
                    sco.supportClick = !sco.supportClick;
                    sco.supportMes = sco.supportMes == "取消点赞" ? "支持他！" : "取消点赞";
                }
                sco.follow = function() {
                    sco.followClick ? sco.data.fansnum-- : sco.data.fansnum++;
                    sco.followClick = !sco.followClick;
                    sco.followMes = sco.followMes == "已关注" ? "关注" : "已关注";
                }
            }
        }
    }])
    .directive('appFans', [function() {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                fanslist: '='
            },
            templateUrl: 'view/template/fans.html'
        }
    }])
    .directive('appNew', [function() {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'view/template/new.html'
        }
    }])
    .directive('appFoot', [function() {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'view/template/foot.html'
        }
    }])
    .directive('appTab', [function() {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                data: '='
            },
            templateUrl: 'view/template/tab.html'
        }
    }])
    .directive('appReply', ['$compile', function($compile) {
        return {
            restrict: 'A',
            repalce: true,
            scope: {
                data: '='
            },
            templateUrl: 'view/template/reply.html',
            link: function(sco, ele, attr) {
                var thumb = sco.data.thumb;
                var name = sco.data.name;
                var date = new Date();
                var now = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
                sco.submitReplyMes = function(mes) {
                    if (mes != undefined) {
                        var o_comment = angular.element($('.comment'));
                        var html = '<div class="m-l-lg"><a class="pull-left thumb-sm avatar"><img ng-src="' + thumb + '" alt="..."></a><div class="m-l-xxl panel b-a"><div class="panel-heading pos-rlt"><span class="arrow left pull-up"></span><span class="text-muted m-l-sm pull-right">' + now + ' </span> <a href="#">' + name + '</a>&nbsp;<span>' + mes + '</span></div> </div> </div>';
                        var template = angular.element(html);
                        var o_content = $compile(template)(sco);
                        o_comment.append(o_content);
                    } else {
                        alert('评论内容为空');
                    }
                }
            }
        }
    }])

"use strict";
angular.module('myApp').filter('fanList', [function() {

}])

"use strict";
angular.module('myApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('new', {
        url: '/new',
        templateUrl: 'view/new.html',
        controller: 'newCtrl'
    }).state('intro', {
        url: '/intro',
        templateUrl: 'view/intro.html',
        controller: 'introCtrl'
    }).state('message', {
        url: '/message',
        templateUrl: 'view/message.html',
        controller: 'messageCtrl'
    });
    $urlRouterProvider.otherwise('new');
}]);

"use strict";
angular.module('myApp').factory('myService', [function() {
    return {
        getUser: function() {
            return userInfo;
        },
        getCurrentUser: function() {
            return currentUser;
        },
        getTab: function() {
            return tabs;
        }
    }
}]);
