var app = angular.module("myApp", []);

var jsonCombo = [
  { llave: "Campos", valor: ["Fútbol", "Beisbol", "Baloncesto"] },
  {
    llave: "Polideportivo",
    valor: ["Voleybol, Baloncesto", "Boxeo, Baloncesto, Voleybol, Fútbol Sala"],
  },
  {
    llave: "Cultura",
    valor: ["Alcaldía", "Museos", "Bibliotecas", "Casa de Cultura"],
  },
  {
    llave: "Social",
    valor: ["Casas Maternas", "CDI", "Centros Médicos Naturales"],
  },
];

console.log(jsonCombo);
app.controller("ctrlComboBox", [
  "$scope",
  function (o) {
    o.combobox = jsonCombo;
    o.vlCmb1 = "Campos";
    o.encontrarListaDeCombo = function (idLLaveCombo) {
      var max = jsonCombo.length;
      for (var i = 0; i < max; i++) {
        var iteracion = o.combobox[i];
        if (idLLaveCombo === iteracion.llave) {
          return iteracion.valor;
        }
      }
      return [];
    };
    o.cambiarCombo1 = function (idLLaveCombo) {
      o.vlCmb2 = o.encontrarListaDeCombo(idLLaveCombo)[0];
    };
    o.cambiarCombo1(o.vlCmb1);
  },
]);
