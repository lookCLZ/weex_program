import { getImg } from "@/tool.js"
export default {
  tabTitles: [
    {
      icon: getImg("home.png"),
      activeIcon: getImg("home_active.png"),
      title: "首页",
    }, {
      icon: getImg("record.png"),
      activeIcon: getImg("record_active.png"),
      title: "记录",
    }, {
      icon: getImg("notice.png"),
      activeIcon: getImg("notice_active.png"),
      title: "公告",
    }
  ],
  tabStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#666666',
    activeTitleColor: '#3D3D3D',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: true,
    iconWidth: 70,
    iconHeight: 70,
    width: 160,
    height: 120,
    fontSize: 24,
    textPaddingLeft: 10,
    textPaddingRight: 10
  },
  addRecords: [
    {
      img: getImg("project.png"),
      router: "add_project",
      text: "项目",
    },
    {
      img: getImg("scenic.png"),
      router: "add_scenic",
      text: "景区",
    },
    {
      img: getImg("merchant.png"),
      router: "add_merchant",
      text: "商户",
    },
  ]
}
