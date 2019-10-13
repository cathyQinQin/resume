export default {
    "title" : "Welcome to my website",
    "navs" : [
        {
            "name" : "Experience",
            "target" : "#experience"
        },
        {
            "name" : "Education",
            "target" :  "#education"
        },
        {
            "name": "Projects",
            "target" : "#projects"
        },
        {
            "name" : "Skills",
            "target" : "#skills"
        },
        {
            "name" : "Contact Me",
            "target" : "#contact"
        }
    ],
    "toolbar" : [
        {  
            "name" : "Linkedin",
            "type" : "link",
            "icon" : "fab fa-linkedin",
            "target" : "https://www.linkedin.com/in/dingkai-liang-a667b014a/"
        },
        {
            "name" : "Github",
            "type" : "link",
            "icon" : "devicon-github-plain",
            "target" : "https://github.com/dingkailiang"
        },
        {
            "name" : "Resume",
            "type" : "dropdown",
            "icon" : "fas fa-download",
            "menu" : [
                {
                    "name" : " .doc",
                    "type" : "download",
                    "icon" : "far fa-file-word",
                    "target" : "./files/Dylan Liang Resume.docx"
                },
                {
                    "name" : " .pdf",
                    "type" : "download",
                    "icon" : "far fa-file-pdf",
                    "target" : "./files/Dylan Liang Resume.pdf"
                },
                // {
                //     "type" : "divider"
                // },
                // {
                //     "name" : "List of Reference",
                //     "type" : "download",
                //     "target" : "./files/Dylan Liang References.docx"
                // }
            ]
        }
    ]
}