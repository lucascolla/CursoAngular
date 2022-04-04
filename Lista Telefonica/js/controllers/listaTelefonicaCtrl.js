angular
    .module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope) {

        $scope.app = "Lista Telefonica";
        $scope.classe = "selecionado";
        $scope.dataAtual = new Date();

        $scope.contatos = [{
            nome: "Pedro",
            telefone: "99999999"
        }, {
            nome: "Ana",
            telefone: "8888888888"
        }, {
            nome: "Maria",
            telefone: "77777777"
        }];

        $scope.operadoras = [{
            nome: "Oi",
            codigo: 14
        }, {
            nome: "Vivo",
            codigo: 15
        }, {
            nome: "Tim",
            codigo: 41
        }, {
            nome: "Claro",
            codigo: 21
        },];

        $scope.adicionarContato = function (contato) {
            $scope.contatos.push(angular.copy(contato));
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
        };

        $scope.apagarContatos = function (contatos) {
            $scope.contatos = contatos.filter(function (contato) {
                if (!contato.selecionado) return contato;
            });
        };

        $scope.isContatoSelecionado = function (contatos) {
            return contatos.some(function (contato) {
                return contato.selecionado;
            });
        };

        $scope.ordernarPor = function (campo) {
            $scope.criterioDeOrdenacao = campo;
            $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
        };

    });