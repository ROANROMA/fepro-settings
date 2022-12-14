/** @format */

module.exports = function () {
  var lodash = require('lodash');
  return {
    api: lodash.times(1, function () {
      return {
        Proveedores: {
          1: 'Facse',
          4: 'Ekomercio',
          5: 'Emision',
        },
        Endpoints: {
          Facturacion: {
            Facse: {
              api_prueba:
                'https://facse.eastus2.cloudapp.azure.com:8092/api/comunicacion/ComprobanteJson',
              api_produccion: 'https://web.facse.net:444/api/Comunicacion/ComprobanteJson',
              api_nota: '',
              tokens: {},
              puerto: {prueba: '8092', prod: ' 444'},
            },
            Ekomercio: {
              api_prueba:
                'https://fevpgentestpro.ekomercio.com/WSCFDIBuilderPlusColombia/WSCFDBuilderPlus.asmx/procesarTextoPlano',
              api_produccion:
                'https://fevpprosoftprod.ekomercio.com/WSCFDIBuilderPlusColombia/WSCFDBuilderPlus.asmx/procesarTextoPlano',
              api_nota: '',
              tokens: {},
              autenticacion: {
                usuario: 'ekomercio',
                password: 'aserri',
              },
            },
            Emision: {
              api_produccion: 'https://endpoint.emision.co/api/v1/service/invoice',
              api_prueba: '',
              api_nota: 'https://endpoint.emision.co/api/v1/service/credit-note',
              tokens: {
                prueba:
                  'KUfoWUUibXlYqIGHV4oK0Q42nrzyI7hS4cH7Gd6DWaSWMdXbO2RptMq9MYWocOLosRJ400gETri2Mg5w',
                produccion:
                  'JAN1hAlXptLXvRNYYNjZOX6wVOFiS2H6fUdFrGcdd7fiQIGoIzmr6pvx6pqN6QKCdhydrQ6iINXIVnKy',
              },
            },
          },
          Nomina: {
            Facse: {
              api_prueba: '',
              api_produccion: '',
              api_nota: '',
              tokens: {},
            },
            Ekomercio: {
              api_prueba:
                'https://fevpgentestpro.ekomercio.com/WSCFDIBuilderPlusColombia/WSCFDBuilderPlus.asmx',
              api_produccion: '',
              api_nota: '',
              tokens: {},
            },
            Emision: {
              api_produccion: '',
              api_prueba: '',
              api_nota: '',
              tokens: {
                prueba: '',
                produccion: '',
              },
            },
          },
        },
      };
    }),
  };
};
