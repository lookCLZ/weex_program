import { getImg } from "@/tool.js"
export default {
  bottomTabs: [
    {
      router: "/home",
      img: getImg("home.png"),
      activeImg: getImg("home_active.png"),
      text: "首页",
    }, {
      router: "/record",
      img: getImg("record.png"),
      activeImg: getImg("record_active.png"),
      text: "记录",
    }, {
      router: "/notice",
      img: getImg("notice.png"),
      activeImg: getImg("notice_active.png"),
      text: "公告",
    }
  ],
  bottomTabsShowRouter: ["/home", "/record", "/notice"],
  addRecords:[
    {
      img:getImg("project.png"),
      router:"add_project",
      text:"项目",
    },
    {
      img:getImg("scenic.png"),
      router:"add_scenic",
      text:"景区",
    },
    {
      img:getImg("merchant.png"),
      router:"add_merchant",
      text:"商户",
    },
  ]
}
