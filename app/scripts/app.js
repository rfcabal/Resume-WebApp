'use strict';

/**
 * @ngdoc overview
 * @name resumeApp
 * @description
 * # resumeApp
 *
 * Main module of the application.
 */
angular
  .module('resumeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate',
    'angular-svg-round-progressbar',
    'firebase'
  ])


  .config(function ($routeProvider, $translateProvider) {

  // Languages

    $translateProvider.translations('en', {

      // INDEX

      TITLE: 'Resume',

      // Front Page

      JOBTITLE: 'Developer & Service Administration',
      ABOUT: 'ABOUT',
      SKILLS: 'SKILLS',
      EXPERIENCE: 'EXPERINCE',
      EDUCATION: 'EDUCATION',

      // SIDEMENU

      TITLEMENU: 'About me',
      RESUME: 'Resume',
      PROJECTS: 'Projects',
      COVERLETTER: 'Cover Letter',
      CONTACT: 'Contact',

      // SIDEBAR

      PERSONALINFO: 'Personal Info',
      PHONE: 'Phone',
      SOCIAL: 'Social Networks',

      LANGUAGES: 'Languages',
      SPANISH: 'Spanish',
      ENGLISH: 'English',
      NATIVE: 'Native',
      BASIC: 'Basic',
      INTERMEDIATE: 'Intermediate',
      ADVANCED: 'Advanced',

      PSKILLS: 'Professional Skills',
      LEADERSHIP: 'Leadership',
      TEAMWORK: 'Teamwork',
      INNOVATION: 'Innovation and creativity',
      INITIATIVE: 'Initiative',

      COURSES: 'Courses',

      // CONTENT MENU

      RESUME: 'Resume',
      SKILLS: 'Skills',
      WEXPERIENCE: 'Work Experience',
      EDUCATION: 'Education',
      OSKILLS: 'Other Skills',
      TSKILLS: 'Technical Skills',

      //CONTENT

      RESUMETEXT:'Whoops! Sorry, english version pending...',

      //WORKEXPERIENCE

      DEVELOPER:"Developer",

      // Moths

      JAN: 'JAN',
      FEB: 'FEB',
      MAR: 'MAR',
      APR: 'APR',
      MAY: 'MAY',
      JUNE: 'JUNE',
      JULY: 'JULY',
      AUG: 'AUG',
      SEPT: 'SEPT',
      OCT: 'OCT',
      NOV: 'NOV',
      DEC: 'DEC',

      PRESENT: 'CURRENT'




    });

    $translateProvider.translations('es', {

      // INDEX

      TITLE: 'Curriculum Vitae',

      // Página principal

      JOBTITLE: 'Programador & Desarrollador Electrónico',
      ABOUT: 'RESUMEN',
      SKILLS: 'HABILIDADES',
      EXPERIENCE: 'EXPERIENCIA',
      EDUCATION: 'EDUCACIÓN',
  

      // Menú Lateral

      TITLEMENU: 'Acerca de mi',
      RESUME: 'Resumen',
      PROJECTS: 'Proyectos',
      COVERLETTER: 'Carta de presentación',
      CONTACT: 'Contacto',


      // Barra Lateral

      PERSONALINFO: 'Información Personal',
      PHONE: 'Teléfono',
      SOCIAL: 'Redes Sociales',

      LANGUAGES: 'Lenguajes',
      SPANISH: 'Español',
      ENGLISH: 'Inglés',
      NATIVE: 'Nativo',
      BASIC: 'Básico',
      INTERMEDIATE: 'Intermedio',
      ADVANCED: 'Avanzado',

      PSKILLS: 'Habilidades Profesionales',
      LEADERSHIP: 'Liderazgo',
      TEAMWORK: 'Trabajo en Equipo',
      INNOVATION: 'Innovación y Creatividad',
      INITIATIVE: 'Iniciativa',

      COURSES: 'Cursos',

      // Menu de contenido

      RESUME: 'Resumen',
      SKILLS: 'Habilidades',
      WEXPERIENCE: 'Experiencia Laboral',
      EDUCATION: 'Educación',
      OSKILLS: 'Otras Habilidades',
      TSKILLS: 'Habilidades Técnicas',

      // Contenido

      RESUMETEXT: 'Hola Visitante, soy Ricardo, mis amigos me conocen por Richie o Ricki, soy de profesión Tecnólogo en Informática Biomédica' +
                  ' y quizás te estas preguntando ¿Qué es eso?, pues es una rama de la informática que se dedica a gestionar proyectos en el' +
                  ' área de salud. Osea que, ¿Sólo me dedico al área de salud? No, debido a mi dinamismo y a mi capacidad autodidacta' +
                  ' soy capaz de gestionar, prototipar, desallorar, administrar e implementar proyectos en el área que se me solicite.' +
                  ' Te invito a conocer más de mi en esta página web.',

      // Experiencia Laboral

      DEVELOPER:"Desarrollador",

      // Meses

      JAN: 'Enero',
      FEB: 'Febrero',
      MAR: 'Marzo',
      APR: 'April',
      MAY: 'Mayo',
      JUNE: 'Junio',
      JULY: 'Julio',
      AUG: 'Agostos',
      SEPT: 'Septiembre',
      OCT: 'Octubre',
      NOV: 'Noviembre',
      DEC: 'Diciembre',

      PRESENT: 'Presente'

    });

    $translateProvider.preferredLanguage('es');

      //Routes

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
       .when('/contact', {
        templateUrl: 'views/contact.html'
      })
        .when('/coverletter', {
        templateUrl: 'views/coverletter.html'
      })
         .when('/projects', {
        templateUrl: 'views/projects.html'
      })
      .otherwise({
        redirectTo: '/'
      });

  });