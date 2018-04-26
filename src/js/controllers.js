/**
 * Created by dkvelusa on 2/11/2018.
 */
 var controllers = angular.module('controllers', []);
 var templ;

 controllers.controller('LandingController',
    function LandingControllerFnc($scope){
        $scope.showDescription = function(e){
            if(e.type === "mouseover"){
                e.currentTarget.children[0].classList.add('hidden');
                e.currentTarget.children[1].classList.remove('hidden');
            } else if (e.type === "mouseleave") {
                e.currentTarget.children[0].classList.remove('hidden');
                e.currentTarget.children[1].classList.add('hidden');
            }
        };

        $scope.portfolioDetails =  [
        ['DASHBOARD',           'fa-chart-line',  'A Summary Dashboard on Data Transfers Status for each Jobs that are Triggered to Identify and Rectify Errors'],
        ['JOB SCHEDULE',        'fa-clock',  'Implemented Wizard which allows Users to Schedule a Job based on their Choice'],
        ['QUICK SAVE',          'fa-save',  'Ability to Immediately Save Flows before the Last Screen, helped in faster modification of Flows'],
        ['TREE GRID',           'fa-th',  'Reduced the Page Loading time by implementing Lazy Load functionality as a part of Tree Grid'],
        ['QUICK FILTERS',       'fa-filter',  'Condition based Record Filtering for Grids, based on Job\'s Start/End Time and Status'],
        ['Monthly Reports', 'fa-edit',  'Huge data reports providing pagination']
        ];
		
		$scope.tools =  [
		
        ['IDE`S',           'fa-chart-line',  'Eclipse, WebStorm, SQL Developer, IntelliJ'],
        ['Build Tools',        'fa-clock',  'Maven, Ant'],
        ['Source Control',          'fa-save',  'Git, SVN, CVS']
        ];
        $scope.contactDetails   = [
        ['Age',                 '31'],
        ['Address',             '#33/A, 2nd block, 3rd main,Ayyappa nagar, KR Puram'],
        ['Email',               'mohanm4444@gmail.com'],
        ['Phone',               '+91-9972405000']
        ];
        $scope.experience       = [
        {
        'name'                  : 'Oracle',
        'role'                  : 'Senior Application Engineer',
        'period'                : 'June 2017 - till now'
        },
        {
        'name'                  : 'Sapient',
        'role'                  : 'Senior Associate',
        'period'                : 'June 2015 - May 2017'
        },
        {
        'name'                  : 'HCL',
        'role'                  : 'Senior Software Engineer',
        'period'                : 'June 2013 - May 2015',
        },
        {
        'name'                  : 'Integra micro service',
        'role'                  : 'Senior Software Engineer',
        'period'                : 'March 2011 - June 2013',
        }];
        $scope.education        = [
        {
        'name'                : 'QIS College Of Engineering',
        'branch'                : 'Master Computer Applications',
        'period'                : '2007-2010',
        'percentage'            : "75%"
        }];

        $scope.shortDescription = 'I\'m a Senior Software Developer with 7 Years of Experience, Specialising in Bcakend and Front-end Technologies with a keen Interest towards Programming'; 
        $scope.details={
            'tools' : {
                'IDE' : ['Eclipse', 'WebStorm', 'SublimeText', 'SQL Developer', 'IntelliJ'],
                'Build': ['Maven','Ant'],
                'Source Control' : ['Git','SVN', 'CVS']
            }
            
        };
    });




// COMPONENTS

resume.
component('skill1', {
    template:
    '<div ng-repeat="(prop, key) in $ctrl.technicalSkills1">' +
    '<div class="row-12 skillRow">' +
    '<div><span class="text-left skillName"> {{key[0]}}</span>' + '<span class="text-right percent">{{key[1]}}</span>' +
    '<div class="progress">' +
    '<div class="progress-bar skillLevel" ng-style = "{width : key[1]}"></div>' +
    '</div>' +
    '</div>' +
    '   </div>' +
    '</div>',
    controller: function PhoneListController() {
        this.technicalSkills1 = [
		['Java', '80%'],
		['J2EE', '80%'],
		['Spring', '80%'],
		['Restfull webservice', '70%'],
		['Hibernate', '70%'],
		['Struts', '70%'],		
        ['SQL', '80%'],
        ['PL/SQL','50%'],
		['MangoDB','60%'],
        ];
    }
});

resume.
component('skill2', {
    template:
    '<div ng-repeat="(prop, key) in $ctrl.technicalSkills2">' +
    '<div class="row-12 skillRow">' +
    '<div><span class="text-left skillName"> {{key[0]}}</span>' + '<span class="text-right percent">{{key[1]}}</span>' +
    '<div class="progress">' +
    '<div class="progress-bar skillLevel" ng-style="{width : key[1]}"> </div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>',
    controller: function PhoneListController() {
        this.technicalSkills2 = [
		 ['Javascript', '70%'],
        ['JQuery', '70%'],
		['HTML', '65%'],
		['Flex', '60%'],
        ['Css', '60%'],
        ['AngularJs', '65%'],
        ['VueJS', '50%'],
        ['React', '50%'],		 
        ['Backbone', '50%'],
		['NodeJS','50%']
        
        ];
    }
});