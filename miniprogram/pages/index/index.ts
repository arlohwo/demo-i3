//index.ts

Page({
  data:{
    playerList:[
      {img:'../img/WechatIMG1501.jpeg',name:'关关',win:4,loss:4,winRate:'',total:0},
      {img:'../img/WechatIMG1502.jpeg',name:'李昂',win:3,loss:1,winRate:'',total:0},
      {img:'../img/WechatIMG1503.jpeg',name:'舒健',win:1,loss:1,winRate:'',total:0},
      {img:'../img/WechatIMG1504.jpeg',name:'先生',win:5,loss:3,winRate:'',total:0},
      {img:'../img/WechatIMG1505.jpeg',name:'魏来',win:1,loss:3,winRate:'',total:0},
      {img:'../img/WechatIMG1506.jpeg',name:'小凌',win:6,loss:2,winRate:'',total:0},
      {img:'../img/WechatIMG1507.jpeg',name:'小亮',win:2,loss:3,winRate:'',total:0},
      {img:'../img/WechatIMG1508.jpeg',name:'小Chris',win:5,loss:3,winRate:'',total:0},
      {img:'../img/WechatIMG1509.jpeg',name:'Johnny',win:4,loss:3,winRate:'',total:0},
      {img:'../img/WechatIMG1510.jpeg',name:'刘奇峰',win:1,loss:2,winRate:'',total:0},
      {img:'../img/WechatIMG1511.jpeg',name:'大雷',win:3,loss:1,winRate:'',total:0},
      {img:'../img/WechatIMG1512.jpeg',name:'贾波',win:3,loss:5,winRate:'',total:0},
      {img:'../img/WechatIMG1513.jpeg',name:'Chris',win:4,loss:3,winRate:'',total:0},
      {img:'../img/WechatIMG1514.jpeg',name:'朱巧林',win:3,loss:3,winRate:'',total:0},
      {img:'../img/WechatIMG1515.jpeg',name:'李睿',win:1,loss:6,winRate:'',total:0},
    ]
  },
  onLoad:function(){
    var playerList = this.data.playerList.map((item)=>{
      var {win,loss,total} = item;
      var winRate = win / (win + loss) * 100;
      var total = win + loss
      return { ...item, winRate : winRate.toFixed(1), total }
    })
    playerList.sort((a, b) => parseFloat(b.winRate) - parseFloat(a.winRate))
    this.setData({playerList})
  },
})