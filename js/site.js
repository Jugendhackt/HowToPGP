var app = angular.module('HowToApp', ["ui.bootstrap", 'ngAnimate', 'ngCookies', 'pascalprecht.translate']);
 
app.config(['$translateProvider', function ($translateProvider) {
  var supported_languages = ['en', 'de'];
  $translateProvider.registerAvailableLanguageKeys(supported_languages, {
    'en_*': 'en',
    'de_*': 'de'
  })
  $translateProvider.useStaticFilesLoader({
    prefix: 'locale/',
    suffix: '.json'
  });
  $translateProvider.determinePreferredLanguage();
  // set preferred language to english in case an unsupported or invalid
  // language was determined.
  if (supported_languages.indexOf($translateProvider.preferredLanguage()) < 0) {
    $translateProvider.preferredLanguage("en");
  }
  $translateProvider.fallbackLanguage("en");
  $translateProvider.useLocalStorage();
  $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
}]);
 
app.controller('MainController', ['$translate', '$scope', '$location', function ($translate, $scope, $location) {
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
      } else {
          $scope.setProgress(0);
          next = "os";
      }
      $scope.question = next;
      $scope.content_include = "questions";
      $location.path("/" + next);
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

  $scope.submitQuestions = function(difficulty) {
      $scope.difficulty = difficulty;
      $scope.setProgress (100, 0.5);
      $scope.content_include = "snippets";
      $location.path("/result");
  }
  $scope.showQuestions = function() {
      $scope.showQuestion("os");
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

  $scope.handlePath = function() {
      var question = $location.path().substr(1);
      var valid = false;
      switch (question) {
          case "os":
              valid = true;
              break;
	  case "client":
              valid = ($scope.os);
              break;
	  case "browser":
              valid = ($scope.os && $scope.client == "browser");
              break;
	  case "keys":
              valid = ($scope.os && ($scope.os == "android" || $scope.client));
              break;
	  case "level":
              valid = ($scope.os && ($scope.os == "android" || $scope.client) && $scope.keys);
              break;
          case "result":
              if ($scope.os && ($scope.os == "android" || $scope.client) && $scope.keys) {
                  $scope.content_include = "snippets";
                  return;
              }
      }

      if (!valid) {
          // no matching path, start from the beginning
          $location.path("");
          $scope.content_include = "startpage";
          $scope.os = "";
          $scope.client = "";
          $scope.browser = "";
          $scope.keys = "";
          $scope.difficulty = 2;
          $scope.progress = 0;
      } else {
          $scope.showQuestion(question);
      }
  }

  $scope.$on('$locationChangeSuccess', function() {
      $scope.handlePath();
  });

  $scope.init = function(){
      $scope.handlePath();
  }

  $scope.languages = ["en", "de"];
  $scope.textblock_classes = "description_block text_block";
  $scope.init();
}]);
