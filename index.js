//var XMLWriter = require("xml-writer");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
var convert = require("xml-js");

const App = () => {
  var json = {
    _declaration: {
      _attributes: {
        version: "1.0",
        encoding: "utf-8",
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
        packageId: {
          _text: "e8d43e1f-e4c9-40d6-978e-cbb2d832cfda",
        },
        elements: [],
      },
    },
  };

  const fact = {
    "ns2:oszCode": "5709.000001",
    "ns2:mszReceiver": {
      "ns3:SNILS": "13951805880",
      "ns4:FamilyName": "Иванов",
      "ns4:FirstName": "Виктор",
      "ns4:Patronymic": "Юрьевич",
      "ns3:Gender": "Male",
      "ns3:BirthDate": "2000-03-09+04:00",
    },
    "ns2:lmszId": "40f20235-5039-48fc-9971-6807bcaba920",
    "ns2:categoryId": "a84f5dc6-1940-437a-b7f2-e60c64de1661",
    "ns2:decisionDate": "2020-05-28+03:00",
    "ns2:dateStart": "2020-06-08+03:00",
    "ns2:needsCriteria": {
      "ns2:usingSign": "false",
    },
    "ns2:assignmentInfo": {
      "ns2:monetaryForm": {
        "ns2:amount": "10162,00",
      },
    },
    uuid: "ffd3d2bd-d939-4c25-8ad0-549d496d2b3d",
  };
  const fact2 = {
    "ns2:oszCode": "5709.000001",
    "ns2:mszReceiver": {
      "ns3:SNILS": "13951805880",
      "ns4:FamilyName": "Иванов",
      "ns4:FirstName": "Виктор",
      "ns4:Patronymic": "Юрьевич",
      "ns3:Gender": "Male",
      "ns3:BirthDate": "2000-03-09+04:00",
    },
    "ns2:lmszId": "40f20235-5039-48fc-9971-6807bcaba920",
    "ns2:categoryId": "a84f5dc6-1940-437a-b7f2-e60c64de1661",
    "ns2:decisionDate": "2020-05-28+03:00",
    "ns2:dateStart": "2020-06-08+03:00",
    "ns2:needsCriteria": {
      "ns2:usingSign": "false",
    },
    "ns2:assignmentInfo": {
      "ns2:monetaryForm": {
        "ns2:amount": "10162,00",
      },
    },
    uuid: "ffd3d2bd-d939-4c25-8ad0-549d496d2b3d",
  };


  json["ns6:data"].package.elements.push({ fact });
  json["ns6:data"].package.elements.push({ fact2 });

  var options = { compact: true, ignoreComment: true, spaces: 4 };
  var result = convert.json2xml(json, options);
  fs.writeFileSync("tmp/SomeXML.xml", result, (err) => {
    if (err) return console.log(err);
    console.log("Done");
  });
};

App();

/*
const App = () => {
  var ws = fs.createWriteStream(__dirname + "/tmp/foo.xml");
  ws.on("close", function () {
    console.log("Done");
  });
  xw = new XMLWriter(false, function (string, encoding) {
    ws.write(string, encoding);
  });
  xw.startDocument("1.0", "UTF-8", "yes");
  xw.startElement("ns6:data")
    .writeAttribute("xmlns", "urn://egisso-ru/types/package-RAF/1.0.7")
    .writeAttribute("xmlns:ns2", "urn://egisso-ru/types/assignment-fact/1.0.6")
    .writeAttribute("xmlns:ns3", "urn://egisso-ru/types/prsn-info/1.0.3")
    .writeAttribute(
      "xmlns:ns4",
      "urn://x-artefacts-smev-gov-ru/supplementary/commons/1.0.1"
    )
    .writeAttribute("xmlns:ns5", "urn://egisso-ru/types/basic/1.0.4")
    .writeAttribute("xmlns:ns6", "urn://egisso-ru/msg/10.06.S/1.0.6")
    .writeAttribute("xmlns:ns7", "urn://egisso-ru/types/package-RAF/1.0.6")
    .startElement("package")
    .writeElement("packageId", uuidv4())

    .startElement("elements")
    .startElement("fact")
    .writeElement("ns2:oszCode", "5709.000001")

    //плфтёж
    .startElement("ns2:mszReceiver")
    .writeElement("ns3:SNILS", "13951805880")
    .writeElement("ns4:FamilyName", "Иванов")
    .writeElement("ns4:FirstName", "Виктор")
    .writeElement("ns4:Patronymic", "Юрьевич")
    .writeElement("ns3:Gender", "Male")
    .writeElement("ns3:BirthDate", "2000-03-09+04:00")
    .endElement()

    //elements
    .writeElement("ns2:lmszId", "40f20235-5039-48fc-9971-6807bcaba920")
    .writeElement("ns2:categoryId", "a84f5dc6-1940-437a-b7f2-e60c64de1661")
    .writeElement("ns2:decisionDate", "2020-05-28+03:00")
    .writeElement("ns2:dateStart", "2020-06-08+03:00")

    .startElement("ns2:needsCriteria")
    .writeElement("ns2:usingSign", "false")
    .endElement()

    //тип платежа
    .startElement("ns2:assignmentInfo")
    .startElement("ns2:monetaryForm")
    .writeElement("ns2:amount", "10162,00")
    .endElement()
    .endElement()
    .writeElement("uuid", uuidv4())
    .endElement()
    .endElement()
    .endElement()
    .endElement();
  ws.end();
};

//App();

const App2 = () => {
  let header = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
  <ns6:data xmlns="urn://egisso-ru/types/package-RAF/1.0.7" 
        xmlns:ns2="urn://egisso-ru/types/assignment-fact/1.0.6" 
        xmlns:ns3="urn://egisso-ru/types/prsn-info/1.0.3" 
        xmlns:ns4="urn://x-artefacts-smev-gov-ru/supplementary/commons/1.0.1" 
        xmlns:ns5="urn://egisso-ru/types/basic/1.0.4" 
        xmlns:ns6="urn://egisso-ru/msg/10.06.S/1.0.6" 
        xmlns:ns7="urn://egisso-ru/types/package-RAF/1.0.6">
        <package>
            <packageId>e8d43e1f-e4c9-40d6-978e-cbb2d832cfda</packageId>
            <elements>`;
  fs.writeFileSync("tmp/helloworld.xml", header, function (err) {
    if (err) return console.log(err);
    console.log("Done");
  });
  let elements = `<fact>
  <ns2:oszCode>5709.000001</ns2:oszCode>
  <ns2:mszReceiver>
      <ns3:SNILS>13951805880</ns3:SNILS>
      <ns4:FamilyName>Иванов</ns4:FamilyName>
      <ns4:FirstName>Виктор</ns4:FirstName>
      <ns4:Patronymic>Юрьевич</ns4:Patronymic>
      <ns3:Gender>Male</ns3:Gender>
      <ns3:BirthDate>2000-03-09+04:00</ns3:BirthDate>
  </ns2:mszReceiver>
  <ns2:lmszId>40f20235-5039-48fc-9971-6807bcaba920</ns2:lmszId>
  <ns2:categoryId>a84f5dc6-1940-437a-b7f2-e60c64de1661</ns2:categoryId>
  <ns2:decisionDate>2020-05-28+03:00</ns2:decisionDate>
  <ns2:dateStart>2020-06-08+03:00</ns2:dateStart>
  <ns2:needsCriteria>
      <ns2:usingSign>false</ns2:usingSign>
  </ns2:needsCriteria>
  <ns2:assignmentInfo>
      <ns2:monetaryForm>
          <ns2:amount>10162,00</ns2:amount>
      </ns2:monetaryForm>
  </ns2:assignmentInfo>
  <uuid>ffd3d2bd-d939-4c25-8ad0-549d496d2b3d</uuid>
</fact>`;
  fs.appendFileSync("tmp/helloworld.xml", elements, (err) => {
    if (err) return console.log(err);
    console.log("Done");
  });
  let footer = `</elements></package></ns6:data>`;
  fs.appendFileSync("tmp/helloworld.xml", footer, (err) => {
    if (err) return console.log(err);
    console.log("Done");
  });
};

App2();
*/
