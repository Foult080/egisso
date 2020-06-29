//var XMLWriter = require("xml-writer");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
var convert = require("xml-js");

const App = () => {
  var json = {
    _declaration: {
      _attributes: {
        version: "1.0",
        encoding: "UTF-8",
        standalone: "yes",
      },
    },
    "ns6:data": {
      _attributes: {
        xmlns: "urn://egisso-ru/types/package-RAF/1.0.7",
        "xmlns:ns2": "urn://egisso-ru/types/assignment-fact/1.0.6",
        "xmlns:ns3": "urn://egisso-ru/types/prsn-info/1.0.3",
        "xmlns:ns4":
          "urn://x-artefacts-smev-gov-ru/supplementary/commons/1.0.1",
        "xmlns:ns5": "urn://egisso-ru/types/basic/1.0.4",
        "xmlns:ns6": "urn://egisso-ru/msg/10.06.S/1.0.6",
        "xmlns:ns7": "urn://egisso-ru/types/package-RAF/1.0.6",
      },

      package: {
        packageId: { _text: "e8d43e1f-e4c9-40d6-978e-cbb2d832cfda" },
        elements: {
          fact: [],
        },
      },
    },
  };

  const data1 = {
    "ns2:oszCode": { _text: "5709.000001" },
    "ns2:mszReceiver": {
      "ns3:SNILS": { _text: "13951805880" },
      "ns4:FamilyName": { _text: "Иванов" },
      "ns4:FirstName": { _text: "Виктор" },
      "ns4:Patronymic": { _text: "Юрьевич" },
      "ns3:Gender": { _text: "Male" },
      "ns3:BirthDate": { _text: "2000-03-09+04:00" },
    },
    "ns2:lmszId": { _text: "40f20235-5039-48fc-9971-6807bcaba920" },
    "ns2:categoryId": {
      _text: "a84f5dc6-1940-437a-b7f2-e60c64de1661",
    },
    "ns2:decisionDate": { _text: "2020-05-28+03:00" },
    "ns2:dateStart": { _text: "2020-06-08+03:00" },
    "ns2:needsCriteria": { "ns2:usingSign": { _text: "false" } },
    "ns2:assignmentInfo": {
      "ns2:monetaryForm": { "ns2:amount": { _text: "10162,00" } },
    },
    uuid: { _text: "ffd3d2bd-d939-4c25-8ad0-549d496d2b3d" },
  };

  json["ns6:data"].package.elements.fact.push(data1);

  var options = { compact: true, ignoreComment: true, spaces: 4 };
  var result = convert.json2xml(json, options);
  fs.writeFileSync("tmp/SomeXML.xml", result, (err) => {
    if (err) return console.log(err);
    console.log("Done");
  });
};

App();