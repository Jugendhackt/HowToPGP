var app = angular.module('HowToApp', ["ui.bootstrap", 'ngAnimate', 'ngCookies', 'pascalprecht.translate']);
 
app.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.registerAvailableLanguageKeys(['en', 'de'], {
    'en_*': 'en',
    'de_*': 'de'
  })
  $translateProvider.useStaticFilesLoader({
    prefix: 'locale/',
    suffix: '.json'
  });
  $translateProvider.determinePreferredLanguage();
  $translateProvider.fallbackLanguage("en");
  $translateProvider.useLocalStorage();
}]);
 
app.controller('MainController', ['$translate', '$scope', function ($translate, $scope) {
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
  $scope.getPartial = function (path) {
      return 'include/descriptions-'+$translate.use()+'/'+path+'.html';
  }
  $scope.setProgress = function(percent, speed) {
      if(!speed) {
          speed = 1;
      }
      $scope.progress = percent;
  }

  $scope.showQuestion = function(next) {
      if(next == "client") {
          $scope.setProgress(25);
      } else if(next == "browser") {
          $scope.setProgress(50);
      } else if(next == "keys") {
          $scope.setProgress(75);
      } else if(next == "level") {
          $scope.setProgress(95);
      }
      $scope.question = next;
  }

  $scope.selectOS = function(os) {
      $scope.os = os;
      if (os == "android") {
          $scope.showQuestion("keys");
      } else{
          $scope.showQuestion("client");
      }
  }

  $scope.selectKeys = function(keys) {
      $scope.keys = keys;
      $scope.showQuestion("level");
  }

  $scope.selectClient = function(client) {
      $scope.client = client;
      if (client == "browser") {
          $scope.showQuestion("browser");
      } else {
          $scope.showQuestion("keys");
      }
  }

  $scope.selectBrowser = function(browser) {
      $scope.browser = browser;
      $scope.showQuestion("keys");
  }

  $scope.submitQuestions = function() {
      $scope.setProgress (100, 0.5);
      $scope.content_include = "snippets";

  }
  $scope.showQuestions = function() {
      $scope.content_include = "questions";
  }
  $scope.showImpressum = function() {
      $scope.content_include = "impressum";
  }
  $scope.showSources = function() {
      $scope.content_include = "sources";
  }
  $scope.getLanguageImageUrl = function(lang) {
      return 'image/'+lang+'_flag.png'
  }
  $scope.getLocalizedImageUrl = function(prefix) {
      return 'image/'+prefix+$translate.use()+'.png'
  }
  $scope.init = function(){
     $scope.content_include = "startpage";
     $scope.showQuestion("os");
     $scope.os = "";
     $scope.client = "";
     $scope.keys = "";
     $scope.difficulty = 2;
     $scope.progress = 0;
   }
  $scope.languages = ["en", "de"];
  $scope.textblock_classes = "description_block text_block";
  $scope.init();
}]);