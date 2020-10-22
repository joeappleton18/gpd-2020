module.exports = {
  dest: "docs",
  base: "/gpd-2020/",
  themeConfig: {
    displayAllHeaders: true,
    sidebar: [
      {
        title: "Overview",
        collapsable: true,
        children: ["/"],
      },
      {
        title: "Assessment Briefs",
        collapsable: true,
        children: [
          "/assessments/assessment_1.md",
          "/assessments/assessment_2.md",
        ],
      },
      {
        title: "Assessment Support",
        collapsable: true,
        children: [
          "./assessment_support/assessment_1.md",
          "/assessment_support/assessment_2.md",
        ],
      },

      {
        title: "Week 1 -  Unit introduction & forming teams",
        collapsable: true,
        children: ["/week_1/lecture_presentation.md", "/week_1/seminar.md"],
      },
      {
        title: "Week 2 -  Critically analysing  sources",
        collapsable: true,
        children: [
          "/week_2/",
          "/week_2/lecture_presentation.md",
          "/week_2/seminar.md",
        ],
      },

      {
        title: "Week 3 -  Employability",
        collapsable: true,
        children: ["/week_3/seminar.md"]
     },

      // {
      //   title: "Week 2 -  Critically analysing  sources",
      //   collapsable: true,
      //   children: [
      //     "/week_2/",
      //     "/week_2/lecture_presentation.md",
      //     "/week_2/seminar.md"
      //   ]
      // },

      // {
      //   title: "Week 3 -  Employability",
      //   collapsable: true,
      //   children: ["/week_3/seminar.md"]
      // },
      // {
      //   title: "Week 4 -  Referencing and Integrity",
      //   collapsable: true,
      //   children: [
      //     "/week_4/",
      //     "/week_4/lecture_presentation.md",
      //     "/week_4/seminar.md"
      //   ]
      // },

      // {
      //   title: "Week 5 -  Presentations",
      //   collapsable: true,
      //   children: ["/week_5/seminar.md", "/week_5/lecture_presentation.md"]
      // },

      // {
      //   title: "Week 6 -   Adjourning",
      //   collapsable: true,
      //   children: ["/week_6/"]
      // },

      // {
      //   title: "Week 7 -   Assessment Support",
      //   collapsable: true,
      //   children: ["/assessment_support/assessment_1.md"]
      // },

      // {
      //   title: "Week 8 -   Assessment Support",
      //   collapsable: true,
      //   children: [
      //     "/week_8/lecture_presentation.md",
      //     "/assessment_support/assessment_1.md"]
      // },

      // {
      //   title: "Week 9 -   Framing Your Project",
      //   collapsable: true,
      //   children: [
      //     "/week_9/lecture_presentation.md",
      //     "/week_9/seminar.md"  ]
      // },

      // {
      //   title: "Week 10 -   Searching for Literature",
      //   collapsable: true,
      //   children: [
      //     "/week_10/lecture_presentation.md",
      //     "/week_10/seminar.md", ]
      // },

      // {
      //   title: "Week 11 -   Methods",
      //   collapsable: true,
      //   children: [
      //     "/week_11/lecture_presentation.md",
      //     "/week_11/",

      //     "/week_11/seminar.md" ]
      // },

      // {
      //   title: "Collaboratively generate tools and tips",
      //   collapsable: true,
      //   children: ["/support_tools/"]
      // },

      {
        title: "Assessment Support",
        collapsable: true,
        children: [
          "/assessment_support/assessment_1.md",
          "/assessment_support/assessment_2.md",
        ],
      },

      {
        title: "Literature Review Protocol",
        collapsable: true,
        children: ["/literature_review_protocol.md"],
      },

      /*{
        title: "Placement Information And Advice",
        collapsable: true,
        children: ["./placement_information/"]
      }*/
    ],
  },
};
