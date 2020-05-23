import { getImg } from "@/tool.js"
export default {
  tabTitles: [
    {
      icon: getImg("home.png"),
      activeIcon: getImg("home_active.png"),
      // title: "首页",
    }, {
      icon: getImg("record.png"),
      activeIcon: getImg("record_active.png"),
      // title: "记录",
    }, {
      icon: getImg("notice.png"),
      activeIcon: getImg("notice_active.png"),
      // title: "公告",
    }
  ],
  tabStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#666666',
    activeTitleColor: '#3D3D3D',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: true,
    iconWidth: 50,
    iconHeight: 50,
    width: 160,
    height: 120,
    fontSize: 24,
    textPaddingLeft: 10,
    textPaddingRight: 10,
  },
  tabIconFontStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#666666',
    activeTitleColor: '#3D3D3D',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: true,
    width: 160,
    height: 120,
    fontSize: 24,
    textPaddingLeft: 10,
    textPaddingRight: 10,
    iconFontSize: 50,
    iconFontMarginBottom: 8,
    iconFontColor: '#333333',
    activeIconFontColor: 'red',
    iconFontUrl: '//at.alicdn.com/t/font_501019_mauqv15evc1pp66r.ttf'
  }, tabIconFontTitles: [
    {
      title: '首页',
      codePoint: '\ue623'
    },
    {
      title: '特别推荐',
      codePoint: '\ue608'
    },
    {
      title: '消息中心',
      codePoint: '\ue752',
      badge: 5
    },
    {
      title: '我的主页',
      codePoint: '\ue601',
      dot: true
    }
  ],
  addRecords: [
    {
      img: getImg("project.png"),
      router: "project_input",
      text: "项目",
    },
    {
      img: getImg("scenic.png"),
      router: "scenic_input",
      text: "景区",
    },
    {
      img: getImg("merchant.png"),
      router: "merchant_input",
      text: "商户",
    },
  ]
}
