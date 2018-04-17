export class Config {
    //static baseurl = "";
    static baseurl = "http://180.178.42.214";
    static bankcardIconMap = {
      "中国工商银行": "assets/img/bank/gongshang.svg",
      "中国建设银行": "assets/img/bank/jianshe.svg",
      "中国农业银行": "assets/img/bank/nongye.svg",
      "中国银行": "assets/img/bank/zhongguo.svg",
      "招商银行": "assets/img/bank/zhaoshang.svg",
      "中国交通银行": "assets/img/bank/jiaotong.svg",
      "中国民生银行": "assets/img/bank/mingsheng.svg",
      "中信银行": "assets/img/bank/zhongxin.svg",
      "上海浦东发展银行": "assets/img/bank/pufa.svg",
      "广东发展银行": "assets/img/bank/guangfa.svg",
      "平安银行": "assets/img/bank/pingan.svg",
      "兴业银行": "assets/img/bank/xingye.svg",
      "华夏银行": "assets/img/bank/huaxia.svg",
      "中国光大银行": "assets/img/bank/guangda.svg",
      "中国邮政储蓄银行": "assets/img/bank/youzheng.svg",
      "财付通": "assets/img/bank/caifutong.svg",
  
      "上海银行": "assets/img/bank/shanghai.svg",
      "北京银行": "assets/img/bank/beijing.svg",
      "江苏银行": "assets/img/bank/jiangsu.svg",
      "宁波银行": "assets/img/bank/ningbo.svg",
      "深圳发展银行": "assets/img/bank/shenfa.svg",
      "温州银行": "assets/img/bank/wenzhou.svg",
      "杭州银行": "assets/img/bank/hangzhou.svg",
      "金华银行": "assets/img/bank/jinhua.svg",
  
      "恒丰银行": "assets/img/bank/hengfeng.svg",
      "郑州银行": "assets/img/bank/zhengzhou.svg",
      "包商银行": "assets/img/bank/baoshang.svg",
      "福建海峡银行": "assets/img/bank/fujianhaixia.svg",
      "嘉兴银行": "assets/img/bank/jiaxing.svg",
      "绍兴银行": "assets/img/bank/shaoxing.svg",
    };
  
  
    static gameiconMap = {
      "时时彩系列": "assets/img/lottery-sort/shishicai.png",
      "11选5系列": "assets/img/lottery-sort/11select5.png",
      "六合彩系列": "assets/img/lottery-sort/liuhecai.png",
      "快三系列": "assets/img/lottery-sort/jiangsukuai3.png",
      "福彩3D": "assets/img/lottery-sort/fucai3d.png",
      "幸运28系列": "assets/img/lottery-sort/kuaile28.png",
      "排列3/5": "assets/img/lottery-sort/ticaiP3-5.png",
      "北京PK10": "assets/img/lottery-sort/beijingpk10.png"
    };
  
    static userTypeMap = {
      0: '普通用户',
      1: '代理',
      2: '总代'
    };
  
    static ballLabelMap = {
      'w': '万',
      'q': '千',
      'b': '百',
      's': '十',
      'g': '个',
      'danhao': '单号',
      'erchonghao': '二重号',
      'sanchonghao': '三重号',
      'sichonghao': '四重号',
      'da': '大',
      'xiao': '小',
      'dan': '单',
      'shuang': '双',
  
      'baozi': '豹子',
      'shunzi': '顺子',
      'duizi': '对子',
  
      'xiao(0-4)': '小(0-4)',
      'da(5-9)': '大(5-9)',
  
      'yiqu(0,1)': '一区(0,1)',
      'erqu(2,3)': '二区(2,3)',
      'sanqu(4,5)': '三区((4,5)',
      'siqu(6,7)': '四区(6,7)',
      'wuqu(8,9)': '五区(8,9)',
  
      'long': '龙',
      'hu': '虎',
      'he': '和',
      'wq': '万:千',
      'wb': '万:百',
      'ws': '万:十',
      'wg': '万:个',
  
      'qb': '千:百',
      'qs': '千:十',
      'qg': '千:个',
      'bs': '百:十',
      'bg': '百:个',
      'sg': '十:个',
      'erwei': '二位',
      'yiwei': '一位',
      'sanwei': '三位',
      '5dan0shuang': '5单0双',
      '4dan1shuang': '4单1双',
      '3dan2shuang': '3单2双',
      '2dan3shuang': '2单3双',
      '1dan4shuang': '1单4双',
      '0dan5shuang': '0单5双',
      'danma': '胆码',
      'tuoma': '拖码'
    };
  
    static repleceImgSrc(str: string): string {
      return str.replace(/src="([\s\S]+?)"/g, (mathed, a) => {
        return `src="${Config.baseurl}${a}"`;
      });
    }
  
  }
  