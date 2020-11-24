
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "Employee Screening Questions",
    description: "A survey made using SurveyJS",
    pages: [
        {
            name: "page1",
            elements: [
                {
                    type: "radiogroup",
                    name: "question2",
                    title: "What type of employment are you looking for?",
                    isRequired: true,
                    choices: [
                        {
                            value: "item1",
                            text: "Full-Time"
                        },
                        {
                            value: "item2",
                            text: "Part-Time"
                        },
                        {
                            value: "item3",
                            text: "Seasonal"
                        }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "question1",
                    title: "What is your highest level of education?",
                    isRequired: true,
                    choices: [
                        {
                            value: "item1",
                            text: "Post-Secondary"
                        },
                        {
                            value: "item3",
                            text: "Some College"
                        },
                        {
                            value: "item2",
                            text: "High-School"
                        }
                    ]
                }
            ],
            title: "(5 - Page)"
        },
        {
            name: "page2",
            elements: [
                {
                    type: "radiogroup",
                    name: "question19",
                    title: "Do you have a valid driver's license?",
                    isRequired: true,
                    choices: [
                        {
                            value: "item1",
                            text: "Yes"
                        },
                        {
                            value: "item2",
                            text: "No"
                        }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "question20",
                    title: "Are you eligible to work in Canada?",
                    isRequired: true,
                    choices: [
                        {
                            value: "item1",
                            text: "Yes"
                        },
                        {
                            value: "item2",
                            text: "No"
                        }
                    ]
                }
            ],
            title: "(5 - Page)"
        },
        {
            name: "page3",
            elements: [
                {
                    type: "radiogroup",
                    name: "question6",
                    title: "Have you been vaccinated for COVID-19?",
                    isRequired: true,
                    choices: [
                        {
                            value: "item1",
                            text: "Yes"
                        },
                        {
                            value: "item2",
                            text: "No"
                        }
                    ]
                },
                {
                    type: "boolean",
                    name: "question7",
                    title: "Have you ever been convicted of a crime?",
                    isRequired: true
                }
            ],
            title: "(5 - Page)"
        },
        {
            name: "page4",
            elements: [
                {
                    type: "text",
                    name: "question23",
                    title: "What was your previous occupation?",
                    isRequired: true
                },
                {
                    type: "radiogroup",
                    name: "question25",
                    title: "Are you able to work remotely?",
                    isRequired: true,
                    choices: [
                        {
                            value: "item1",
                            text: "Yes"
                        },
                        {
                            value: "item2",
                            text: "No"
                        }
                    ]
                }
            ],
            title: "(5 - Page)"
        },
        {
            name: "page5",
            elements: [
                {
                    type: "checkbox",
                    name: "question3",
                    title: "What languages do you speak?",
                    isRequired: true,
                    choices: [
                        {
                            value: "item1",
                            text: "English"
                        },
                        {
                            value: "item2",
                            text: "French"
                        },
                        {
                            value: "item3",
                            text: "Other"
                        }
                    ]
                },
                {
                    type: "text",
                    name: "question35",
                    title: "What is your expected hourly wage?",
                    isRequired: true
                }
            ],
            title: "(5 - Page)"
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .location = "indexthanks.html";
    });

$("#surveyElement").Survey({ model: survey });