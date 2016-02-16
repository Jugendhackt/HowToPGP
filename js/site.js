var app = angular.module('HowToApp', ['ngCookies', 'pascalprecht.translate']);
 
app.config(['$translateProvider', function ($translateProvider) {
  // add translation table
  //$translateProvider.translations('en', {"FIREFOX": "Firefox", "PAGE_TITLE": "HowToPGP", "WINDOWS": "Windows", "QUESTION_BROWSER": "Which browser?", "KEYS_TRUE": "I already use PGP on my computer", "KEYS_FALSE": "I am new to PGP", "SOURCES": "Sources", "QUESTIONS_DESCRIPTION": "Before starting, we ask you to give us some simple information so we can generate your personal instruction.", "CHROME": "Chrome", "INTERNETBROWSER": "No Mailclient", "QUESTION_KEYS": "Do you already have a PGP keypair?", "QUESTION_ONE": "Which operating system do you use?", "SECTION_2": "On this page we will explain to you how to use PGP on your Computer.<br/ ><br />Please answer some questions in order to make it possible to provide specific information first!", "QUESTION_THREE": "Which level of difficulty?", "DESCRIPTION": "Read your personal instruction for PGP", "SLIDER_VALUE_3": "I want to gain technical understanding", "CONTINUE": "Continue \u00bb", "START_DESCRIPTION": "Start tutorial!", "COPYRIGHT": "\u00a9 Jugend hackt S\u00fcd", "SLIDER_VALUE_2": "As fast as possible, please!", "QUESTIONS_TITLE": "Questions", "LINUX": "Linux", "CONTACT_US": "In case that you want to contact us, drop us a mail. Our Keys are down there.", "ANDROID": "Android", "MACOS": "OS X", "SECTION_1": "Have you ever heard anything about the PGP-encryption?", "BUGREPORT": "Send feedback", "THUNDERBIRD": "Thunderbird", "ENIGMAIL_HOWTO": "Enigmail instruction: ", "SLIDER_VALUE_1": "I'm not good with computers", "LAST_MODIFIED": "Last modified: ", "ERROR404": "Error 404 - This Site does not exist", "IE": "Internet Explorer", "QUESTION_TWO": "Which mail client do you use?"});
  $translateProvider.translations('en');
  $translateProvider.translations('de');
  $translateProvider.useStaticFilesLoader({
    prefix: 'locale/',
    suffix: '.json'
  });
  // load 'en' table on startup
  $translateProvider.preferredLanguage('en');
  $translateProvider.useLocalStorage();
}]);
 
app.controller('MainController', ['$translate', '$scope', function ($translate, $scope) {
   $scope.init = function(){
     $scope.questions = true;
     $scope.result = false;
     $scope.impressum = false;
     $scope.sources = false;
     $scope.os = "";
     $scope.client = "";
     $scope.keys = "";
     $scope.difficulty = 2;
   }


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
      $("#questions_progress > div").css({
          width      : percent+"%",
          transition : 'width '+speed+'s ease-in-out'
      });
  }

  $scope.showQuestion = function(next) {
      if(next == "client") {
          $("#question_client").show(500);
          $scope.setProgress (25);
      } else if(next == "client") {
          $("#question_keys").show(500);
          $scope.setProgress (25);
      } else if(next == "browser") {
          $("#question_browser").show(500);
          $scope.setProgress (50);
      } else if(next == "keys") {
          $("#question_keys").show(500);
          $scope.setProgress (75);
      } else if(next == "level") {
          $("#question_level").show(500);
          $scope.setProgress (95);
      }
  }

  $scope.selectOS = function(os) {
    $scope.os = os;
      $("#question_os").hide(500);
      $("#field_os").val(os);
      if (os == "android") {
          $scope.showQuestion("keys");
      } else{
          $scope.showQuestion("client");
      }
  }

  $scope.selectKeys = function(keys) {
    $scope.keys = keys;
      $("#question_keys").hide(500);
      $("#field_keys").val(keys);
      $scope.showQuestion("level");
  }

  $scope.selectClient = function(client) {
    $scope.client = client;
      $("#question_client").hide(500);
      $("#field_client").val(client);
      if (client == "browser") {
          if($("#field_os").val() == "windows") {
              $("#question_browser-ie").show(0);
          } else {
              $("#question_browser-ie").hide(0);
          }
          $scope.showQuestion("browser");
      } else {
          $scope.showQuestion("keys");
      }
  }

  $scope.selectBrowser = function(browser) {
    $scope.browser = browser;
      $("#question_browser").hide(500);
      $("#field_browser").val(browser);
      $scope.showQuestion("keys");
  }

  $scope.submitQuestions = function() {
      $scope.setProgress (100, 0.5);
      $("#question_level").hide(500);
      $("#field_level").val($("#input_range").val());
      $scope.questions = false;
      $scope.result = true;
      $scope.impressum = false;
      $scope.sources = false;
  }
  $scope.showImpressum = function() {
      $scope.questions = false;
      $scope.result = false;
      $scope.impressum = true;
      $scope.sources = false;
  }
  $scope.showSources = function() {
      $scope.questions = false;
      $scope.result = false;
      $scope.impressum = false;
      $scope.sources = true;
  }
  $scope.getLanguageImageUrl = function(lang) {
      return 'image/'+lang+'_flag.png'
  }
  
  $scope.languages = ["en", "de"];
  $scope.textblock_classes = "description_block text_block";
  $scope.init();
}]);