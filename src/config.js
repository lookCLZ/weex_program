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
  bottomTabsShowRouter: ["/home", "/record", "/notice"]
}
