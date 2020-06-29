const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const moment = require("moment");
var convert = require("xml-js");

router.get("/", async (req, res) => {
  res.json("Hello");
});

router.post("/", (req, res) => {
  //make id for package
  const packageId = uuidv4();
  //create json file
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
        packageId: { _text: `${packageId}` },
        elements: {
          fact: [],
        },
      },
    },
  };

  try {
    const collection = req.body;
    collection.forEach((item) => {
      //make json for add
      const id = uuidv4();
      const {
        msz,
        snils,
        fam,
        name,
        last,
        gender,
        birth,
        dec_date,
        date_start,
        amount,
      } = item;
      console.log(msz, snils, fam);
      let data = {
        "ns2:oszCode": { _text: "5709.000001" },
        "ns2:mszReceiver": {
          "ns3:SNILS": { _text: snils },
          "ns4:FamilyName": { _text: fam },
          "ns4:FirstName": { _text: name },
          "ns4:Patronymic": { _text: last },
          "ns3:Gender": { _text: gender },
          "ns3:BirthDate": { _text: birth },
        },
        "ns2:lmszId": { _text: msz },
        "ns2:categoryId": {
          _text: "a84f5dc6-1940-437a-b7f2-e60c64de1661",
        },
        "ns2:decisionDate": { _text: dec_date },
        "ns2:dateStart": { _text: date_start },
        "ns2:needsCriteria": { "ns2:usingSign": { _text: "false" } },
        "ns2:assignmentInfo": {
          "ns2:monetaryForm": { "ns2:amount": { _text: amount } },
        },
        uuid: { _text: id },
      };
      json["ns6:data"].package.elements.fact.push(data);
    });
    var options = { compact: true, ignoreComment: true, spaces: 0 };
    var result = convert.json2xml(json, options);
    let fileName = packageId.slice(0,10)+"-"+ moment().format("YYYY-MM-DD") + ".xml";
    fs.writeFileSync("tmp/" + fileName, result, (err) => {
      if (err) return console.log(err);
      console.log("Done");
    });
    res.json("Done");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Ошибка сервера");
  }
});

module.exports = router;
