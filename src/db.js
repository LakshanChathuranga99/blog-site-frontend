
const posts = [
    {
        id: 1,
        heading: "first post",
        content: "aaawdfk jnw afubawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uh",
        excelent: 23,
        good: 10,
        commentSection: [
            {
                id: 1,
                comment: "comment 1 aaaawdafwawef afawf wafawf awf a",
                type: 'Supportive',
                dateTime: "16/10/2020 23:07:32",
                agree: 23,
                disagree: 10,
                replies: [
                    { 
                        id: 1,
                        reply: "rply1 afawef afa wfaw faefgawe fawf ",
                        dateTime: "04/09/2020 14:20:30",
                        agree: 23,
                        disagree: 10,
                    },
                    { 
                        id: 2,
                        reply: "rply2a thdrth drh wse ryhw rjhws  aehg ae",
                        dateTime: "04/09/2020 14:20:30",
                        agree: 23,
                        disagree: 10,
                    },
                ]
            },
            {
                id: 2,
                comment: "comment 2 awdawdaw wd awd awd aw dawdfwafa",
                type: 'Question-wise',
                dateTime: "04/09/2020 14:20:30",
                agree: 7,
                disagree: 10,
                replies: [
                    { 
                        id: 1,
                        reply: "rply1 afg aegh aseryha wea gheah ",
                        dateTime: "04/09/2020 14:20:30",
                        agree: 8,
                        disagree: 4,
                    },
                    { 
                        id: 2,
                        reply: "rply2 aega hasrh ahah aeh aehh ahe",
                        dateTime: "04/09/2020 14:20:30",
                        agree: 23,
                        disagree: 0,
                    },
                    { 
                        id: 3,
                        reply: "rply 3 afawef afa wfaw faefgawe fawf ",
                        dateTime: "04/09/2020 14:20:30",
                        agree: 23,
                        disagree: 10,
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        heading: "second post",
        content: "awdfk jnw awdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo u jnw awdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhafubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uh",
        excelent: 23,
        good: 10,
        commentSection: [
            {
                id: 1,
                comment: "comment 1 awdafwawef afawf wafawf awf a",
                type: 'I have a another Opinion',
                dateTime: "04/09/2020 14:20:30",
                agree: 23,
                disagree: 10,
                replies: [
                    { 
                        id: 1,
                        reply: "rply1 afawef afa wfaw faefgawe fawf ",
                        dateTime: "04/09/2020 14:20:30",
                        agree: 23,
                        disagree: 10,
                    },
                    { 
                        id: 2,
                        reply: "rply2a thdrth drh wse ryhw rjhws  aehg ae",
                        dateTime: "04/09/2020 14:20:30",
                        agree: 23,
                        disagree: 10,
                    },
                ]
            },
            {
                id: 2,
                comment: "comment 2 awdawdaw wd awd awd aw dawdfwafa",
                type: 'Question-wise',
                dateTime: "04/09/2020 14:20:30",
                agree: 7,
                disagree: 10,
                replies: [
                    { 
                        id: 1,
                        reply: "rply1 afg aegh aseryha wea gheah ",
                        dateTime: "04/09/2020 14:20:30",
                        agree: 8,
                        disagree: 4,
                    },
                    { 
                        id: 2,
                        reply: "rply2 aega hasrh ahah aeh aehh ahe",
                        dateTime: "04/09/2020 14:20:30",
                        agree: 23,
                        disagree: 0,
                    },
                ]
            }
        ]
    },
    {
        id: 3,
        heading: "third post",
        content: "awdfk jnw afubn fnn biuawfiuawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uh",
        excelent: 23,
        good: 10,
        commentSection: [
            {
                id: 1,
                comment: "comment 1 awdafwawef afawf wafawf awf a",
                type: 'Supportive',
                dateTime: "04/09/2020 14:20:30",
                agree: 23,
                disagree: 10,
                replies: [
                    { 
                        id: 1,
                        reply: "rply1 afawef afa wfaw faefgawe fawf ",
                        dateTime: "04/09/2020 14:20:30",
                        agree: 23,
                        disagree: 10,
                    },
                    { 
                        id: 2,
                        reply: "rply2a thdrth drh wse ryhw rjhws  aehg ae",
                        dateTime: "04/09/2020 14:20:30",
                        agree: 23,
                        disagree: 10,
                    },
                ]
            },
            {
                id: 2,
                comment: "comment 2 awdawdaw wd awd awd aw dawdfwafa",
                type: 'Question-wise',
                dateTime: "04/09/2020 14:20:30",
                agree: 7,
                disagree: 10,
                replies: [
                    { 
                        id: 1,
                        reply: "rply1 afg aegh aseryha wea gheah ",
                        dateTime: "04/09/2020 14:20:30",
                        agree: 8,
                        disagree: 4,
                    },
                    { 
                        id: 2,
                        reply: "rply2 aega hasrh ahah aeh aehh ahe",
                        dateTime: "04/09/2020 14:20:30",
                        agree: 23,
                        disagree: 0,
                    },
                ]
            }
        ]
    },
    {
        id: 4,
        heading: "fourth post",
        content: "awdfk jnw afubn fnn awdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhbiuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uh",
        excelent: 23,
        good: 10,
        commentSection: [
            {
                id: 1,
                comment: "comment 1 awdafwawef afawf wafawf awf a",
                type: 'Supportive',
                dateTime: "04/09/2020 14:20:30",
                agree: 23,
                disagree: 10,
                replies: [
                    { 
                        id: 1,
                        reply: "rply1 afawef afa wfaw faefgawe fawf ",
                        dateTime: "04/09/2020 14:20:30",
                        agree: 23,
                        disagree: 10,
                    },
                    { 
                        id: 2,
                        reply: "rply2a thdrth drh wse ryhw rjhws  aehg ae",
                        dateTime: "04/09/2020 14:20:30",
                        agree: 23,
                        disagree: 10,
                    },
                ]
            },
            {
                id: 2,
                comment: "comment 2 awdawdaw wd awd awd aw dawdfwafa",
                type: 'Question-wise',
                dateTime: "04/09/2020 14:20:30",
                agree: 7,
                disagree: 10,
                replies: [
                    { 
                        id: 1,
                        reply: "rply1 afg aegh aseryha wea gheah ",
                        dateTime: "04/09/2020 14:20:30",
                        agree: 8,
                        disagree: 4,
                    },
                    { 
                        id: 2,
                        reply: "rply2 aega hasrh ahah aeh aehh ahe",
                        dateTime: "04/09/2020 14:20:30",
                        agree: 23,
                        disagree: 0,
                    },
                ]
            }
        ]
    },
    {
        id: 5,
        heading: "fifth post",
        content: "awdfk jnw awdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhawdfk jnw afubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uhafubn fnn biuawfiuawb iau ba ioubhwd fiouw bnaouia wo uiawoa fubna wpofuinha fiopuawhopawhpa foui apiobwapo uh",
        excelent: 23,
        good: 10,
        commentSection: [
            {
                id: 1,
                comment: "comment 1 awdafwawef afawf wafawf awf a",
                type: 'Supportive',
                dateTime: "04/09/2020 14:20:30",
                agree: 23,
                disagree: 10,
                replies: [
                    { 
                        id: 1,
                        reply: "rply1 afawef afa wfaw faefgawe fawf ",
                        dateTime: "04/09/2020 14:20:30",
                        agree: 23,
                        disagree: 10,
                    },
                    { 
                        id: 2,
                        reply: "rply2a thdrth drh wse ryhw rjhws  aehg ae",
                        dateTime: "04/09/2020 14:20:30",
                        agree: 23,
                        disagree: 10,
                    },
                ]
            },
            {
                id: 2,
                comment: "comment 2 awdawdaw wd awd awd aw dawdfwafa",
                type: 'Question-wise',
                dateTime: "04/09/2020 14:20:30",
                agree: 7,
                disagree: 10,
                replies: [
                    { 
                        id: 1,
                        reply: "rply1 afg aegh aseryha wea gheah ",
                        dateTime: "04/09/2020 14:20:30",
                        agree: 8,
                        disagree: 4,
                    },
                    { 
                        id: 2,
                        reply: "rply2 aega hasrh ahah aeh aehh ahe",
                        dateTime: "04/09/2020 14:20:30",
                        agree: 23,
                        disagree: 0,
                    },
                ]
            }
        ]
    }
];

export default posts;
