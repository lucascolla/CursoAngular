angular
    .module("listaTelefonica")
    .config(function ($routeProvider) {
        $routeProvider.when("/contatos", {
            templateUrl: "view/lista.html",
            controller: "listaTelefonicaCtrl"
        }).when("/form", {
            templateUrl: "view/form.html",
            controller: "listaTelefonicaCtrl"
        }).otherwise("/contatos");
    });