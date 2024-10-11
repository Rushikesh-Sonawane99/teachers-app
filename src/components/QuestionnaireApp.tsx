import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';

import 'questionnaire-webcomponent/questionnaire-player-webcomponent.js';
import 'questionnaire-webcomponent/styles.css';
const mockData = {
  "solution": {
    "_id": "660bef28d2bc560007850012",
    "externalId": "164aa6b8-f0e6-11ee-9237-69479c519584-1712058152785",
    "name": "KB Survey 2",
    "description": "survey Solution",
    "captureGpsLocationAtQuestionLevel": false,
    "enableQuestionReadOut": false
  },
  "program": {
    "_id": "660bef1b37669b0007efef07",
    "isAPrivateProgram": false,
    "rootOrganisations": [
      "0132593267437813768"
    ],
    "externalId": "KB Survey 2",
    "name": "KB Survey 2",
    "description": "Program",
    "imageCompression": {
      "quality": 10
    },
    "requestForPIIConsent": false
  },
  "programJoined": false,
  "consentShared": false,
  "rootOrganisations": "0132593267437813768",
  "requestForPIIConsent": false,
  "assessment": {
    "name": "KB Survey 2",
    "description": "survey Solution",
    "externalId": "164aa6b8-f0e6-11ee-9237-69479c519584-1712058152785",
    "endDate": "2026-07-13T23:59:59.000Z",
    "submissionId": "669f594e09ef680008050f50",
    "evidences": [
      {
        "code": "SF",
        "sections": [
          {
            "code": "SQ",
            "questions": [
              {
                "_id": "",
                "question": "",
                "isCompleted": "",
                "showRemarks": "",
                "options": "",
                "sliderOptions": "",
                "children": "",
                "questionGroup": "",
                "fileName": "",
                "instanceQuestions": "",
                "isAGeneralQuestion": "",
                "autoCapture": "",
                "allowAudioRecording": "",
                "prefillFromEntityProfile": "",
                "entityFieldName": "",
                "isEditable": "",
                "showQuestionInPreview": "",
                "deleted": "",
                "remarks": "",
                "value": "",
                "usedForScoring": "",
                "questionType": "",
                "canBeNotApplicable": "",
                "visibleIf": "",
                "validation": "",
                "externalId": "",
                "tip": "",
                "hint": "",
                "responseType": "pageQuestions",
                "modeOfCollection": "",
                "accessibility": "",
                "rubricLevel": "",
                "sectionHeader": "",
                "page": "p1",
                "questionNumber": "",
                "updatedAt": "",
                "createdAt": "",
                "__v": "",
                "createdFromQuestionId": "",
                "evidenceMethod": "",
                "payload": "",
                "startTime": "",
                "endTime": "",
                "gpsLocation": "",
                "file": "",
                "pageQuestions": [
                  {
                    "_id": "660bef28d2bc56000784fff7",
                    "question": [
                      "Email",
                      "ईमेल"
                    ],
                    "isCompleted": false,
                    "showRemarks": false,
                    "options": [],
                    "sliderOptions": [],
                    "children": [],
                    "questionGroup": [
                      "A1"
                    ],
                    "fileName": [],
                    "instanceQuestions": [],
                    "isAGeneralQuestion": false,
                    "autoCapture": false,
                    "allowAudioRecording": false,
                    "prefillFromEntityProfile": false,
                    "entityFieldName": "",
                    "isEditable": true,
                    "showQuestionInPreview": false,
                    "deleted": false,
                    "remarks": "",
                    "value": "",
                    "usedForScoring": "",
                    "questionType": "auto",
                    "canBeNotApplicable": "false",
                    "visibleIf": "",
                    "validation": {
                      "required": true,
                      "regex": "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"
                    },
                    "externalId": "SUR_TEST_001_1712058149044-1712058152794",
                    "tip": "Enter email",
                    "hint": "refer hint",
                    "responseType": "text",
                    "modeOfCollection": "onfield",
                    "accessibility": "No",
                    "rubricLevel": "",
                    "sectionHeader": "header section 1",
                    "page": "p1",
                    "questionNumber": "1",
                    "updatedAt": "2024-04-02T11:42:32.809Z",
                    "createdAt": "2024-04-02T11:42:32.268Z",
                    "__v": 0,
                    "createdFromQuestionId": "660bef28d2bc56000784ffb0",
                    "evidenceMethod": "SF",
                    "payload": {
                      "criteriaId": "660bef28d2bc56000785000e",
                      "responseType": "text",
                      "evidenceMethod": "SF",
                      "rubricLevel": ""
                    },
                    "startTime": "",
                    "endTime": "",
                    "gpsLocation": "",
                    "file": ""
                  },
                  {
                    "_id": "660bef28d2bc56000784fff8",
                    "question": [
                      "Enter secondary Email",
                      "द्वितीयक ईमेल दर्ज करें"
                    ],
                    "isCompleted": false,
                    "showRemarks": true,
                    "options": [],
                    "sliderOptions": [],
                    "children": [],
                    "questionGroup": [
                      "A1"
                    ],
                    "fileName": [],
                    "instanceQuestions": [],
                    "isAGeneralQuestion": false,
                    "autoCapture": false,
                    "allowAudioRecording": false,
                    "prefillFromEntityProfile": false,
                    "entityFieldName": "",
                    "isEditable": true,
                    "showQuestionInPreview": false,
                    "deleted": false,
                    "remarks": "",
                    "value": "",
                    "usedForScoring": "",
                    "questionType": "auto",
                    "canBeNotApplicable": "false",
                    "visibleIf": "",
                    "validation": {
                      "required": true,
                      "regex": "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"
                    },
                    "file": {
                      "required": true,
                      "type": [
                        "image/jpeg",
                        "docx",
                        "pdf",
                        "ppt"
                      ],
                      "minCount": 0,
                      "maxCount": 10,
                      "caption": "FALSE"
                    },
                    "externalId": "SUR_TEST_002_1712058149044-1712058152796",
                    "tip": "Enter second email",
                    "hint": "refer hint",
                    "responseType": "text",
                    "modeOfCollection": "onfield",
                    "accessibility": "No",
                    "rubricLevel": "",
                    "sectionHeader": "header section 2",
                    "page": "p1",
                    "questionNumber": "1.1",
                    "updatedAt": "2024-04-02T11:42:32.809Z",
                    "createdAt": "2024-04-02T11:42:32.284Z",
                    "__v": 0,
                    "createdFromQuestionId": "660bef28d2bc56000784ffb6",
                    "evidenceMethod": "SF",
                    "payload": {
                      "criteriaId": "660bef28d2bc56000785000e",
                      "responseType": "text",
                      "evidenceMethod": "SF",
                      "rubricLevel": ""
                    },
                    "startTime": "",
                    "endTime": "",
                    "gpsLocation": ""
                  },
                  {
                    "_id": "660bef28d2bc56000784fff9",
                    "question": [
                      "Enter your Name",
                      "ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ"
                    ],
                    "isCompleted": false,
                    "showRemarks": false,
                    "options": [],
                    "sliderOptions": [],
                    "children": [],
                    "questionGroup": [
                      "A1"
                    ],
                    "fileName": [],
                    "instanceQuestions": [],
                    "isAGeneralQuestion": false,
                    "autoCapture": false,
                    "allowAudioRecording": false,
                    "prefillFromEntityProfile": false,
                    "entityFieldName": "",
                    "isEditable": true,
                    "showQuestionInPreview": false,
                    "deleted": false,
                    "remarks": "",
                    "value": "",
                    "usedForScoring": "",
                    "questionType": "auto",
                    "canBeNotApplicable": "false",
                    "visibleIf": "",
                    "validation": {
                      "required": true
                    },
                    "externalId": "SUR_TEST_003_1712058149044-1712058152797",
                    "tip": "",
                    "hint": "",
                    "responseType": "text",
                    "modeOfCollection": "onfield",
                    "accessibility": "No",
                    "rubricLevel": "",
                    "sectionHeader": "",
                    "page": "p1",
                    "questionNumber": "2",
                    "updatedAt": "2024-04-02T11:42:32.809Z",
                    "createdAt": "2024-04-02T11:42:32.301Z",
                    "__v": 0,
                    "createdFromQuestionId": "660bef28d2bc56000784ffbc",
                    "evidenceMethod": "SF",
                    "payload": {
                      "criteriaId": "660bef28d2bc56000785000e",
                      "responseType": "text",
                      "evidenceMethod": "SF",
                      "rubricLevel": ""
                    },
                    "startTime": "",
                    "endTime": "",
                    "gpsLocation": "",
                    "file": ""
                  }
                ]
              },
              {
                "_id": "",
                "question": "",
                "isCompleted": "",
                "showRemarks": "",
                "options": "",
                "sliderOptions": "",
                "children": "",
                "questionGroup": "",
                "fileName": "",
                "instanceQuestions": "",
                "isAGeneralQuestion": "",
                "autoCapture": "",
                "allowAudioRecording": "",
                "prefillFromEntityProfile": "",
                "entityFieldName": "",
                "isEditable": "",
                "showQuestionInPreview": "",
                "deleted": "",
                "remarks": "",
                "value": "",
                "usedForScoring": "",
                "questionType": "",
                "canBeNotApplicable": "",
                "visibleIf": "",
                "validation": "",
                "externalId": "",
                "tip": "",
                "hint": "",
                "responseType": "pageQuestions",
                "modeOfCollection": "",
                "accessibility": "",
                "rubricLevel": "",
                "sectionHeader": "",
                "page": "p2",
                "questionNumber": "",
                "updatedAt": "",
                "createdAt": "",
                "__v": "",
                "createdFromQuestionId": "",
                "evidenceMethod": "",
                "payload": "",
                "startTime": "",
                "endTime": "",
                "gpsLocation": "",
                "file": "",
                "pageQuestions": [
                  {
                    "_id": "660bef28d2bc56000784fffa",
                    "question": [
                      "which Ministry/Department you belong to?",
                      "మీరు ఏ మంత్రిత్వ శాఖ/విభాగానికి చెందినవారు?"
                    ],
                    "isCompleted": false,
                    "showRemarks": true,
                    "options": [],
                    "sliderOptions": [],
                    "children": [],
                    "questionGroup": [
                      "A1"
                    ],
                    "fileName": [],
                    "instanceQuestions": [],
                    "isAGeneralQuestion": false,
                    "autoCapture": false,
                    "allowAudioRecording": false,
                    "prefillFromEntityProfile": false,
                    "entityFieldName": "",
                    "isEditable": true,
                    "showQuestionInPreview": false,
                    "deleted": false,
                    "remarks": "",
                    "value": "",
                    "usedForScoring": "",
                    "questionType": "auto",
                    "canBeNotApplicable": "false",
                    "visibleIf": "",
                    "validation": {
                      "required": true,
                      "regex": "^[a-zA-Z ]+$"
                    },
                    "file": {
                      "required": true,
                      "type": [
                        "image/jpeg",
                        "docx",
                        "pdf",
                        "ppt"
                      ],
                      "minCount": 0,
                      "maxCount": 10,
                      "caption": "FALSE"
                    },
                    "externalId": "SUR_TEST_004_1712058149044-1712058152798",
                    "tip": "department name",
                    "hint": "A department name is unique but the department title is non-unique and can be the same across departments",
                    "responseType": "text",
                    "modeOfCollection": "onfield",
                    "accessibility": "No",
                    "rubricLevel": "",
                    "sectionHeader": "header section 1",
                    "page": "p2",
                    "questionNumber": "3",
                    "updatedAt": "2024-04-02T11:42:32.809Z",
                    "createdAt": "2024-04-02T11:42:32.315Z",
                    "__v": 0,
                    "createdFromQuestionId": "660bef28d2bc56000784ffc2",
                    "evidenceMethod": "SF",
                    "payload": {
                      "criteriaId": "660bef28d2bc56000785000e",
                      "responseType": "text",
                      "evidenceMethod": "SF",
                      "rubricLevel": ""
                    },
                    "startTime": "",
                    "endTime": "",
                    "gpsLocation": ""
                  },
                  {
                    "_id": "660bef28d2bc56000784fffb",
                    "question": [
                      "Enter your designation",
                      ""
                    ],
                    "isCompleted": false,
                    "showRemarks": true,
                    "options": [],
                    "sliderOptions": [],
                    "children": [],
                    "questionGroup": [
                      "A1"
                    ],
                    "fileName": [],
                    "instanceQuestions": [],
                    "isAGeneralQuestion": false,
                    "autoCapture": false,
                    "allowAudioRecording": false,
                    "prefillFromEntityProfile": false,
                    "entityFieldName": "",
                    "isEditable": true,
                    "showQuestionInPreview": false,
                    "deleted": false,
                    "remarks": "",
                    "value": "",
                    "usedForScoring": "",
                    "questionType": "auto",
                    "canBeNotApplicable": "false",
                    "visibleIf": "",
                    "validation": {
                      "required": true,
                      "IsNumber": ""
                    },
                    "file": {
                      "required": true,
                      "type": [
                        "image/jpeg",
                        "docx",
                        "pdf",
                        "ppt"
                      ],
                      "minCount": 0,
                      "maxCount": 10,
                      "caption": "FALSE"
                    },
                    "externalId": "SUR_TEST_005_1712058149044-1712058152799",
                    "tip": "",
                    "hint": "",
                    "responseType": "number",
                    "modeOfCollection": "onfield",
                    "accessibility": "No",
                    "rubricLevel": "",
                    "sectionHeader": "header section 1",
                    "page": "p2",
                    "questionNumber": "4",
                    "updatedAt": "2024-04-02T11:42:32.809Z",
                    "createdAt": "2024-04-02T11:42:32.331Z",
                    "__v": 0,
                    "createdFromQuestionId": "660bef28d2bc56000784ffc8",
                    "evidenceMethod": "SF",
                    "payload": {
                      "criteriaId": "660bef28d2bc56000785000e",
                      "responseType": "number",
                      "evidenceMethod": "SF",
                      "rubricLevel": ""
                    },
                    "startTime": "",
                    "endTime": "",
                    "gpsLocation": ""
                  }
                ]
              },
              {
                "_id": "",
                "question": "",
                "isCompleted": "",
                "showRemarks": "",
                "options": "",
                "sliderOptions": "",
                "children": "",
                "questionGroup": "",
                "fileName": "",
                "instanceQuestions": "",
                "isAGeneralQuestion": "",
                "autoCapture": "",
                "allowAudioRecording": "",
                "prefillFromEntityProfile": "",
                "entityFieldName": "",
                "isEditable": "",
                "showQuestionInPreview": "",
                "deleted": "",
                "remarks": "",
                "value": "",
                "usedForScoring": "",
                "questionType": "",
                "canBeNotApplicable": "",
                "visibleIf": "",
                "validation": "",
                "externalId": "",
                "tip": "",
                "hint": "",
                "responseType": "pageQuestions",
                "modeOfCollection": "",
                "accessibility": "",
                "rubricLevel": "",
                "sectionHeader": "",
                "page": "p3",
                "questionNumber": "",
                "updatedAt": "",
                "createdAt": "",
                "__v": "",
                "createdFromQuestionId": "",
                "evidenceMethod": "",
                "payload": "",
                "startTime": "",
                "endTime": "",
                "gpsLocation": "",
                "file": "",
                "pageQuestions": [
                  {
                    "_id": "660bef28d2bc56000784fffc",
                    "question": [
                      "Which of the following technology domains are you most interested in learning about? (You may select more than one)&*",
                      ""
                    ],
                    "isCompleted": false,
                    "showRemarks": true,
                    "options": [
                      {
                        "value": "R1",
                        "label": "Artificial Intelligence | Machine Learning",
                        "hint": "hint1"
                      },
                      {
                        "value": "R2",
                        "label": "Computer Vision",
                        "hint": "hint2"
                      },
                      {
                        "value": "R3",
                        "label": "Natural Language Processing",
                        "hint": "hint3"
                      },
                      {
                        "value": "R4",
                        "label": "Cybersecurity"
                      },
                      {
                        "value": "R5",
                        "label": "Data Insights and Data Analytics"
                      },
                      {
                        "value": "R6",
                        "label": "Internet of Things"
                      },
                      {
                        "value": "R7",
                        "label": "Blockchain"
                      },
                      {
                        "value": "R8",
                        "label": "Drones"
                      },
                      {
                        "value": "R9",
                        "label": "AR – VR – MR (Augmented Reality – Virtual Reality – Mixed Reality)"
                      },
                      {
                        "value": "R10",
                        "label": "other"
                      }
                    ],
                    "sliderOptions": [],
                    "children": [],
                    "questionGroup": [
                      "A1"
                    ],
                    "fileName": [],
                    "instanceQuestions": [],
                    "isAGeneralQuestion": false,
                    "autoCapture": false,
                    "allowAudioRecording": false,
                    "prefillFromEntityProfile": false,
                    "entityFieldName": "",
                    "isEditable": true,
                    "showQuestionInPreview": false,
                    "deleted": false,
                    "remarks": "",
                    "value": "",
                    "usedForScoring": "",
                    "questionType": "auto",
                    "canBeNotApplicable": "false",
                    "visibleIf": "",
                    "validation": {
                      "required": true
                    },
                    "file": {
                      "required": true,
                      "type": [
                        "image/jpeg",
                        "docx",
                        "pdf",
                        "ppt"
                      ],
                      "minCount": 0,
                      "maxCount": 10,
                      "caption": "FALSE"
                    },
                    "externalId": "SUR_TEST_006_1712058149044-1712058152801",
                    "tip": "",
                    "hint": "",
                    "responseType": "multiselect",
                    "modeOfCollection": "onfield",
                    "accessibility": "No",
                    "rubricLevel": "",
                    "sectionHeader": "",
                    "page": "p3",
                    "questionNumber": "5",
                    "updatedAt": "2024-04-02T11:42:32.809Z",
                    "createdAt": "2024-04-02T11:42:32.347Z",
                    "__v": 0,
                    "createdFromQuestionId": "660bef28d2bc56000784ffce",
                    "evidenceMethod": "SF",
                    "payload": {
                      "criteriaId": "660bef28d2bc56000785000e",
                      "responseType": "multiselect",
                      "evidenceMethod": "SF",
                      "rubricLevel": ""
                    },
                    "startTime": "",
                    "endTime": "",
                    "gpsLocation": ""
                  },
                  {
                    "_id": "660bef28d2bc56000784fffd",
                    "question": [
                      "What should be the preferred duration of the online course on a subject?",
                      ""
                    ],
                    "isCompleted": false,
                    "showRemarks": true,
                    "options": [
                      {
                        "value": "R1",
                        "label": "Less than 60 minutes",
                        "hint": "hint1"
                      },
                      {
                        "value": "R2",
                        "label": "60 to 120 minutes",
                        "hint": "hint2"
                      },
                      {
                        "value": "R3",
                        "label": "2 to 5 Hours",
                        "hint": "hint3"
                      },
                      {
                        "value": "R4",
                        "label": "More than 5 hours"
                      }
                    ],
                    "sliderOptions": [],
                    "children": [],
                    "questionGroup": [
                      "A1"
                    ],
                    "fileName": [],
                    "instanceQuestions": [],
                    "isAGeneralQuestion": false,
                    "autoCapture": false,
                    "allowAudioRecording": false,
                    "prefillFromEntityProfile": false,
                    "entityFieldName": "",
                    "isEditable": true,
                    "showQuestionInPreview": false,
                    "deleted": false,
                    "remarks": "",
                    "value": "",
                    "usedForScoring": "",
                    "questionType": "auto",
                    "canBeNotApplicable": "false",
                    "visibleIf": "",
                    "validation": {
                      "required": true
                    },
                    "file": {
                      "required": true,
                      "type": [
                        "image/jpeg",
                        "docx",
                        "pdf",
                        "ppt"
                      ],
                      "minCount": 0,
                      "maxCount": 10,
                      "caption": "FALSE"
                    },
                    "externalId": "SUR_TEST_007_1712058149044-1712058152802",
                    "tip": "",
                    "hint": "",
                    "responseType": "radio",
                    "modeOfCollection": "onfield",
                    "accessibility": "No",
                    "rubricLevel": "",
                    "sectionHeader": "header section 2",
                    "page": "p3",
                    "questionNumber": "6",
                    "updatedAt": "2024-04-02T11:42:32.809Z",
                    "createdAt": "2024-04-02T11:42:32.364Z",
                    "__v": 0,
                    "createdFromQuestionId": "660bef28d2bc56000784ffd4",
                    "evidenceMethod": "SF",
                    "payload": {
                      "criteriaId": "660bef28d2bc56000785000e",
                      "responseType": "radio",
                      "evidenceMethod": "SF",
                      "rubricLevel": ""
                    },
                    "startTime": "",
                    "endTime": "",
                    "gpsLocation": ""
                  }
                ]
              },
              {
                "_id": "",
                "question": "",
                "isCompleted": "",
                "showRemarks": "",
                "options": "",
                "sliderOptions": "",
                "children": "",
                "questionGroup": "",
                "fileName": "",
                "instanceQuestions": "",
                "isAGeneralQuestion": "",
                "autoCapture": "",
                "allowAudioRecording": "",
                "prefillFromEntityProfile": "",
                "entityFieldName": "",
                "isEditable": "",
                "showQuestionInPreview": "",
                "deleted": "",
                "remarks": "",
                "value": "",
                "usedForScoring": "",
                "questionType": "",
                "canBeNotApplicable": "",
                "visibleIf": "",
                "validation": "",
                "externalId": "",
                "tip": "",
                "hint": "",
                "responseType": "pageQuestions",
                "modeOfCollection": "",
                "accessibility": "",
                "rubricLevel": "",
                "sectionHeader": "",
                "page": "p4",
                "questionNumber": "",
                "updatedAt": "",
                "createdAt": "",
                "__v": "",
                "createdFromQuestionId": "",
                "evidenceMethod": "",
                "payload": "",
                "startTime": "",
                "endTime": "",
                "gpsLocation": "",
                "file": "",
                "pageQuestions": [
                  {
                    "_id": "660bef28d2bc56000784fffe",
                    "question": [
                      "How imprtant is hands-on or practical training in a course for you?",
                      ""
                    ],
                    "isCompleted": false,
                    "showRemarks": true,
                    "options": [],
                    "sliderOptions": [],
                    "children": [],
                    "questionGroup": [
                      "A1"
                    ],
                    "fileName": [],
                    "instanceQuestions": [],
                    "isAGeneralQuestion": false,
                    "autoCapture": false,
                    "allowAudioRecording": false,
                    "prefillFromEntityProfile": false,
                    "entityFieldName": "",
                    "isEditable": true,
                    "showQuestionInPreview": false,
                    "deleted": false,
                    "remarks": "",
                    "value": "",
                    "usedForScoring": "",
                    "questionType": "auto",
                    "canBeNotApplicable": "false",
                    "visibleIf": "",
                    "validation": {
                      "required": true,
                      "max": "10",
                      "min": "1"
                    },
                    "file": {
                      "required": true,
                      "type": [
                        "image/jpeg",
                        "docx",
                        "pdf",
                        "ppt"
                      ],
                      "minCount": 0,
                      "maxCount": 10,
                      "caption": "FALSE"
                    },
                    "externalId": "SUR_TEST_008_1712058149044-1712058152802",
                    "tip": "",
                    "hint": "",
                    "responseType": "slider",
                    "modeOfCollection": "onfield",
                    "accessibility": "No",
                    "rubricLevel": "",
                    "sectionHeader": "header section 2",
                    "page": "p4",
                    "questionNumber": "7",
                    "updatedAt": "2024-04-02T11:42:32.809Z",
                    "createdAt": "2024-04-02T11:42:32.384Z",
                    "__v": 0,
                    "createdFromQuestionId": "660bef28d2bc56000784ffda",
                    "evidenceMethod": "SF",
                    "payload": {
                      "criteriaId": "660bef28d2bc56000785000e",
                      "responseType": "slider",
                      "evidenceMethod": "SF",
                      "rubricLevel": ""
                    },
                    "startTime": "",
                    "endTime": "",
                    "gpsLocation": ""
                  }
                ]
              },
              {
                "_id": "",
                "question": "",
                "isCompleted": "",
                "showRemarks": "",
                "options": "",
                "sliderOptions": "",
                "children": "",
                "questionGroup": "",
                "fileName": "",
                "instanceQuestions": "",
                "isAGeneralQuestion": "",
                "autoCapture": "",
                "allowAudioRecording": "",
                "prefillFromEntityProfile": "",
                "entityFieldName": "",
                "isEditable": "",
                "showQuestionInPreview": "",
                "deleted": "",
                "remarks": "",
                "value": "",
                "usedForScoring": "",
                "questionType": "",
                "canBeNotApplicable": "",
                "visibleIf": "",
                "validation": "",
                "externalId": "",
                "tip": "",
                "hint": "",
                "responseType": "pageQuestions",
                "modeOfCollection": "",
                "accessibility": "",
                "rubricLevel": "",
                "sectionHeader": "",
                "page": "p5",
                "questionNumber": "",
                "updatedAt": "",
                "createdAt": "",
                "__v": "",
                "createdFromQuestionId": "",
                "evidenceMethod": "",
                "payload": "",
                "startTime": "",
                "endTime": "",
                "gpsLocation": "",
                "file": "",
                "pageQuestions": [
                  {
                    "_id": "660bef28d2bc56000784ffff",
                    "question": [
                      "When did you last read a book?",
                      ""
                    ],
                    "isCompleted": false,
                    "showRemarks": false,
                    "options": [],
                    "sliderOptions": [],
                    "children": [],
                    "questionGroup": [
                      "A1"
                    ],
                    "fileName": [],
                    "instanceQuestions": [],
                    "isAGeneralQuestion": false,
                    "autoCapture": true,
                    "allowAudioRecording": false,
                    "prefillFromEntityProfile": false,
                    "entityFieldName": "",
                    "isEditable": true,
                    "showQuestionInPreview": false,
                    "deleted": false,
                    "remarks": "",
                    "value": "",
                    "usedForScoring": "",
                    "questionType": "auto",
                    "canBeNotApplicable": "false",
                    "visibleIf": "",
                    "validation": {
                      "required": true,
                      "max": "",
                      "min": ""
                    },
                    "dateFormat": "DD-MM-YYYY",
                    "externalId": "SUR_TEST_009_1712058149044-1712058152803",
                    "tip": "",
                    "hint": "",
                    "responseType": "date",
                    "modeOfCollection": "onfield",
                    "accessibility": "No",
                    "rubricLevel": "",
                    "sectionHeader": "",
                    "page": "p5",
                    "questionNumber": "8",
                    "updatedAt": "2024-04-02T11:42:32.809Z",
                    "createdAt": "2024-04-02T11:42:32.400Z",
                    "__v": 0,
                    "createdFromQuestionId": "660bef28d2bc56000784ffe0",
                    "evidenceMethod": "SF",
                    "payload": {
                      "criteriaId": "660bef28d2bc56000785000e",
                      "responseType": "date",
                      "evidenceMethod": "SF",
                      "rubricLevel": ""
                    },
                    "startTime": "",
                    "endTime": "",
                    "gpsLocation": "",
                    "file": ""
                  },
                  {
                    "_id": "660bef28d2bc560007850000",
                    "question": [
                      "What is your main goal for taking these courses?",
                      ""
                    ],
                    "isCompleted": false,
                    "showRemarks": false,
                    "options": [],
                    "sliderOptions": [],
                    "children": [],
                    "questionGroup": [
                      "A1"
                    ],
                    "fileName": [],
                    "instanceQuestions": [
                      {
                        "_id": "660bef28d2bc560007850001",
                        "question": [
                          "After taking courses on emerging technologies, I would like to:\n \n(Select all that apply) [we shall include improvement in service delivery/ program or scheme delivery]",
                          ""
                        ],
                        "isCompleted": false,
                        "showRemarks": false,
                        "options": [
                          {
                            "value": "R1",
                            "label": "Leverage emerging technologies for an existing project in my Dept/Ministry"
                          },
                          {
                            "value": "R2",
                            "label": "Identify areas where these technologies can be used in my Department/Ministry"
                          },
                          {
                            "value": "R3",
                            "label": "Implement digital technologies for program implementation and monitoring"
                          },
                          {
                            "value": "R4",
                            "label": "Implement digital technologies for improving service delivery to people/businesses"
                          },
                          {
                            "value": "R5",
                            "label": "Implement digital technologies for measurement of impact of programs/policies"
                          },
                          {
                            "value": "R6",
                            "label": "Implement digital technologies for risk mitigation"
                          },
                          {
                            "value": "R7",
                            "label": "Implement digital technologies for decision support system"
                          }
                        ],
                        "sliderOptions": [],
                        "children": [],
                        "questionGroup": [
                          "A1"
                        ],
                        "fileName": [],
                        "instanceQuestions": [],
                        "isAGeneralQuestion": false,
                        "autoCapture": false,
                        "allowAudioRecording": false,
                        "prefillFromEntityProfile": false,
                        "entityFieldName": "",
                        "isEditable": true,
                        "showQuestionInPreview": false,
                        "deleted": false,
                        "remarks": "",
                        "value": "",
                        "usedForScoring": "",
                        "questionType": "auto",
                        "canBeNotApplicable": "false",
                        "visibleIf": "",
                        "validation": {
                          "required": true
                        },
                        "externalId": "SUR_TEST_011_1712058149044-1712058152804",
                        "tip": "",
                        "hint": "",
                        "responseType": "multiselect",
                        "modeOfCollection": "onfield",
                        "accessibility": "No",
                        "rubricLevel": "",
                        "sectionHeader": "",
                        "page": "p5",
                        "questionNumber": "10",
                        "updatedAt": "2024-04-02T11:42:32.809Z",
                        "createdAt": "2024-04-02T11:42:32.444Z",
                        "__v": 0,
                        "createdFromQuestionId": "660bef28d2bc56000784ffec",
                        "evidenceMethod": "SF",
                        "payload": {
                          "criteriaId": "660bef28d2bc56000785000e",
                          "responseType": "multiselect",
                          "evidenceMethod": "SF",
                          "rubricLevel": ""
                        },
                        "startTime": "",
                        "endTime": "",
                        "gpsLocation": "",
                        "file": ""
                      }
                    ],
                    "isAGeneralQuestion": false,
                    "autoCapture": false,
                    "allowAudioRecording": false,
                    "prefillFromEntityProfile": false,
                    "entityFieldName": "",
                    "isEditable": true,
                    "showQuestionInPreview": false,
                    "deleted": false,
                    "remarks": "",
                    "value": "",
                    "usedForScoring": "",
                    "questionType": "auto",
                    "canBeNotApplicable": "false",
                    "visibleIf": "",
                    "validation": {
                      "required": true
                    },
                    "instanceIdentifier": "Matrix",
                    "externalId": "SUR_TEST_010_1712058149044-1712058152803",
                    "tip": "",
                    "hint": "",
                    "responseType": "matrix",
                    "modeOfCollection": "onfield",
                    "accessibility": "No",
                    "rubricLevel": "",
                    "sectionHeader": "",
                    "page": "p5",
                    "questionNumber": "9",
                    "updatedAt": "2024-04-02T11:42:32.809Z",
                    "createdAt": "2024-04-02T11:42:32.426Z",
                    "__v": 0,
                    "createdFromQuestionId": "660bef28d2bc56000784ffe6",
                    "evidenceMethod": "SF",
                    "payload": {
                      "criteriaId": "660bef28d2bc56000785000e",
                      "responseType": "matrix",
                      "evidenceMethod": "SF",
                      "rubricLevel": ""
                    },
                    "startTime": "",
                    "endTime": "",
                    "gpsLocation": "",
                    "file": ""
                  }
                ]
              }
            ],
            "name": "Survey Questions"
          }
        ],
        "externalId": "SF",
        "name": "Survey And Feedback",
        "description": "Survey And Feedback",
        "modeOfCollection": "",
        "canBeNotApplicable": false,
        "notApplicable": false,
        "canBeNotAllowed": false,
        "remarks": "",
        "isActive": true,
        "startTime": 1724659001124,
        "endTime": 1724659010821,
        "isSubmitted": false,
        "submissions": []
      }
    ],
    "submissions": {
      "SF": {
        "externalId": "SF",
        "answers": {
          "660bef28d2bc56000784fff7": {
            "qid": "660bef28d2bc56000784fff7",
            "value": "wnter",
            "remarks": "",
            "fileName": [],
            "gpsLocation": "",
            "payload": {
              "question": [
                "Email",
                "ईमेल"
              ],
              "labels": [
                "wnter"
              ],
              "responseType": "text",
              "filesNotUploaded": []
            },
            "startTime": 1724659001256,
            "endTime": 1724659008558,
            "criteriaId": "660bef28d2bc56000785000e",
            "responseType": "text",
            "evidenceMethod": "SF",
            "rubricLevel": ""
          },
          "660bef28d2bc56000784fff8": {
            "qid": "660bef28d2bc56000784fff8",
            "value": "",
            "remarks": "",
            "fileName": [],
            "gpsLocation": "",
            "payload": {
              "question": [
                "Enter secondary Email",
                "द्वितीयक ईमेल दर्ज करें"
              ],
              "labels": null,
              "responseType": "text",
              "filesNotUploaded": []
            },
            "startTime": 1724659001298,
            "endTime": "",
            "criteriaId": "660bef28d2bc56000785000e",
            "responseType": "text",
            "evidenceMethod": "SF",
            "rubricLevel": ""
          },
          "660bef28d2bc56000784fff9": {
            "qid": "660bef28d2bc56000784fff9",
            "value": "",
            "remarks": "",
            "fileName": [],
            "gpsLocation": "",
            "payload": {
              "question": [
                "Enter your Name",
                "ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ"
              ],
              "labels": null,
              "responseType": "text",
              "filesNotUploaded": []
            },
            "startTime": 1724659001307,
            "endTime": "",
            "criteriaId": "660bef28d2bc56000785000e",
            "responseType": "text",
            "evidenceMethod": "SF",
            "rubricLevel": ""
          },
          "660bef28d2bc56000784fffa": {
            "qid": "660bef28d2bc56000784fffa",
            "value": "",
            "remarks": "",
            "fileName": [],
            "gpsLocation": "",
            "payload": {
              "question": [
                "which Ministry/Department you belong to?",
                "మీరు ఏ మంత్రిత్వ శాఖ/విభాగానికి చెందినవారు?"
              ],
              "labels": null,
              "responseType": "text",
              "filesNotUploaded": []
            },
            "startTime": 1724659001314,
            "endTime": "",
            "criteriaId": "660bef28d2bc56000785000e",
            "responseType": "text",
            "evidenceMethod": "SF",
            "rubricLevel": ""
          },
          "660bef28d2bc56000784fffb": {
            "qid": "660bef28d2bc56000784fffb",
            "value": "",
            "remarks": "",
            "fileName": [],
            "gpsLocation": "",
            "payload": {
              "question": [
                "Designation@",
                ""
              ],
              "labels": null,
              "responseType": "number",
              "filesNotUploaded": []
            },
            "startTime": 1724659001321,
            "endTime": "",
            "criteriaId": "660bef28d2bc56000785000e",
            "responseType": "number",
            "evidenceMethod": "SF",
            "rubricLevel": ""
          },
          "660bef28d2bc56000784fffc": {
            "qid": "660bef28d2bc56000784fffc",
            "value": "",
            "remarks": "",
            "fileName": [],
            "gpsLocation": "",
            "payload": {
              "question": [
                "Which of the following technology domains are you most interested in learning about? (You may select more than one",
                ""
              ],
              "labels": [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
              ],
              "responseType": "multiselect",
              "filesNotUploaded": []
            },
            "startTime": 1724659001332,
            "endTime": "",
            "criteriaId": "660bef28d2bc56000785000e",
            "responseType": "multiselect",
            "evidenceMethod": "SF",
            "rubricLevel": ""
          },
          "660bef28d2bc56000784fffd": {
            "qid": "660bef28d2bc56000784fffd",
            "value": "",
            "remarks": "",
            "fileName": [],
            "gpsLocation": "",
            "payload": {
              "question": [
                "What should be the preferred duration of the online course on a subject?",
                ""
              ],
              "labels": null,
              "responseType": "radio",
              "filesNotUploaded": []
            },
            "startTime": 1724659001367,
            "endTime": "",
            "criteriaId": "660bef28d2bc56000785000e",
            "responseType": "radio",
            "evidenceMethod": "SF",
            "rubricLevel": ""
          },
          "660bef28d2bc56000784fffe": {
            "qid": "660bef28d2bc56000784fffe",
            "value": 1,
            "remarks": "",
            "fileName": [],
            "gpsLocation": "",
            "payload": {
              "question": [
                "How imprtant is hands-on or practical training in a course for you?",
                ""
              ],
              "labels": [
                1
              ],
              "responseType": "slider",
              "filesNotUploaded": []
            },
            "startTime": 1724659001389,
            "endTime": 1724659001488,
            "criteriaId": "660bef28d2bc56000785000e",
            "responseType": "slider",
            "evidenceMethod": "SF",
            "rubricLevel": ""
          },
          "660bef28d2bc56000784ffff": {
            "qid": "660bef28d2bc56000784ffff",
            "value": "",
            "remarks": "",
            "fileName": [],
            "gpsLocation": "",
            "payload": {
              "question": [
                "When did you last read a book?",
                ""
              ],
              "labels": null,
              "responseType": "date",
              "filesNotUploaded": []
            },
            "startTime": 1724659001422,
            "endTime": "",
            "criteriaId": "660bef28d2bc56000785000e",
            "responseType": "date",
            "evidenceMethod": "SF",
            "rubricLevel": ""
          },
          "660bef28d2bc560007850000": {
            "qid": "660bef28d2bc560007850000",
            "value": [],
            "remarks": "",
            "fileName": [],
            "gpsLocation": "",
            "payload": {
              "question": [
                "What is your main goal for taking these courses?",
                ""
              ],
              "labels": "",
              "responseType": "matrix",
              "filesNotUploaded": []
            },
            "startTime": "",
            "endTime": "",
            "criteriaId": "660bef28d2bc56000785000e",
            "responseType": "matrix",
            "evidenceMethod": "SF",
            "rubricLevel": "",
            "countOfInstances": 0
          }
        }
      }
    }
  }
}

interface FileUploadEvent {
  data: {
    submissionId: string;
    name: string;
    file: File;
    question_id: string;
  };
}

interface PresignedUrlResponse {
  url: string;
  getDownloadableUrl: string[];
  payload: Record<string, string>;
}

interface FileUploadResponse {
  status?: number;
  data?: FileUploadData | null;
  question_id?: string;
}

interface FileUploadData {
  name: string;
  url: string;
  previewUrl: string;
  [key: string]: any;
}

const QuestionnaireApp: React.FC = () => {
  const questionairePlayerMainRef = useRef<HTMLElement | null>(null);
  console.log('questionairePlayerMainRef', questionairePlayerMainRef);
  const [fileUploadResponse, setFileUploadResponse] =
    useState<FileUploadResponse | null>(null);
  const assessment = mockData;
  const uploadFileToPresignedUrl = async (event: FileUploadEvent) => {
    const payload: any = {
      ref: 'survey',
      request: {},
    };

    const submissionId = event.data.submissionId;
    payload.request[submissionId] = {
      files: [event.data.name],
    };

    try {
      const response = await axios.post('your-presigned-url-endpoint', payload); // Update with your correct endpoint

      const presignedUrlData: PresignedUrlResponse =
        response.data.result[submissionId].files[0];

      // Use FormData for file uploads
      const formData = new FormData();
      formData.append('file', event.data.file);

      await axios.put(presignedUrlData.url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const obj: FileUploadData = {
        name: event.data.name,
        url: presignedUrlData.url.split('?')[0],
        previewUrl: presignedUrlData.getDownloadableUrl[0],
      };

      for (const key of Object.keys(presignedUrlData.payload)) {
        obj[key] = presignedUrlData.payload[key];
      }
      console.log('obj', obj);
      setFileUploadResponse({
        status: 200,
        data: obj,
        question_id: event.data.question_id,
      });
    } catch (err) {
      console.error('Unable to upload the file. Please try again', err);
      setFileUploadResponse({
        status: 400,
        data: null,
        question_id: event.data.question_id,
      });
    }
  };

  const receiveUploadData = (event: any) => {
    console.log('event', event);

    if (event.data && event.data.file) {
      console.log('hello');
      uploadFileToPresignedUrl(event as FileUploadEvent);
    }
  };


  useEffect(() => {
    console.log('questionairePlayerMainRef', assessment);
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('message', receiveUploadData, false);

      return () => {
        window.removeEventListener('message', receiveUploadData, false);
      };
    }

  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const playerElement = questionairePlayerMainRef.current;

      if (playerElement) {
        console.log('playerElement', playerElement);
        const handlePlayerSubmitOrSaveEvent = (event: Event) => {
          console.log(
            'Event Data Logged from the react app',
            (event as CustomEvent).detail
          );
        };

        playerElement.addEventListener(
          'submitOrSaveEvent',
          handlePlayerSubmitOrSaveEvent
        );

        return () => {
          playerElement.removeEventListener(
            'submitOrSaveEvent',
            handlePlayerSubmitOrSaveEvent
          );
        };
      }
    }
  }, []);
  useEffect(() => {
    if (questionairePlayerMainRef.current) {
      console.log('Web component ref set correctly');
    } else {
      console.log('Web component ref not set');
    }
  }, [questionairePlayerMainRef]);

  return (
    <>
      <questionnaire-player-main
        assessment={JSON.stringify(assessment)}
        fileuploadresponse={JSON.stringify(fileUploadResponse)}
        ref={questionairePlayerMainRef}
      ></questionnaire-player-main>
    </>
  );
};

export default QuestionnaireApp;
