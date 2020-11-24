
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
                    type: "text",
                    name: "question10",
                    title: "What was you previous occupation?"
                },
                {
                    type: "radiogroup",
                    name: "question7",
                    title: "Are you able to work remotely?",
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
                    name: "question8",
                    title: "Have you been vaccinated for COVID-19?",
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
                    name: "question9",
                    title: "Have you ever been convicted of a crime?"
                },
                {
                    type: "checkbox",
                    name: "question5",
                    title: "What languages do you speak?",
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
                    name: "question6",
                    title: "What is your expected hourly wage?"
                },
                {
                    type: "radiogroup",
                    name: "question4",
                    title: "Do you have a valid driver's license?",
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
                    name: "question3",
                    title: "Are you eligible to work in Canada?",
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
                    name: "question2",
                    title: "What type of employment are you looking for?",
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
                    title: "What is you highest level of education?",
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
            ]
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document.location = "singlethanks.html";
    });

$("#surveyElement").Survey({ model: survey });