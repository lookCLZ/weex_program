const getImg=function(img_name) {// 获取图片在三端上不同的路径
    let platform = weex.config.env.platform
    let img_path = ''
    if (platform == 'Web') {
        img_path = `src/images/${img_name}`
    } else if (platform == 'android') { //android 不需要后缀
        img_name = img_name.substr(0, img_name.lastIndexOf('.'));
        img_path = `local:///${img_name}`
    } else {
        img_path = `local:///${img_name}` // img_path = `../images/${img_name}`
    }
    return img_path
}

const setInterval=function(func, wait, arg){
    var self = this
    var inter = function(){
      if(self.timeRemain != arguments[0][0]){
        func.apply(null, arguments)
        setTimeout(inter, wait, arg)
      }
      else {
        func.apply(null, arguments)
        arguments[0][1] && typeof arguments[0][1] == 'function' && arguments[0][1].call(null)
      }
    }
    setTimeout(inter, wait, arg)
  }

export default{ 
    getImg:getImg,
    setInterval:setInterval,
}