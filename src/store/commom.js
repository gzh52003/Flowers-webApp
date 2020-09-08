const common = {
    state:{
        showTabbar:true,
        festival:[{
            title:'温暖向阳',
            sub_title:'全网热销',
            price:'￥296',
            backgroud_url:'background-image:url(/img/fs1.jpg)',
            mg_url:'https://img01.hua.com/uploadpic/newpic/9012452.jpg_220x240.jpg',
            fes_swiper:[{swiper_url:'https://img01.hua.com/uploadpic/newpic/9012452.jpg'},
            {swiper_url:'https://img01.hua.com/uploadpic/newpic/202004091616390990.jpg'},
            {swiper_url:'https://img01.hua.com/uploadpic/newpic/202004091616452946.jpg'},
            {swiper_url:'https://img01.hua.com/uploadpic/newpic/202004091616513375.jpg'},
        ],
        Instro:'韩式系列/一路向阳 ',
        Cpmc:'花艺师打造 韩式花束系列',
        LinePrice:"398",
        Price:'296',
        Sales: "6.54万"
          },{
            title:'韩式爆款',
            sub_title:'致敬恩师',
            price:'￥239',
             backgroud_url:'background-image:url(/img/fs2.jpg)',
             img_url:'https://img01.hua.com/uploadpic/newpic/9012461.jpg_220x240.jpg',
             fes_swiper:[{swiper_url:'https://img01.hua.com/uploadpic/newpic/9012461.jpg'},
            {swiper_url:'https://img01.hua.com/uploadpic/newpic/202003231547274786.jpg'},
            {swiper_url:'https://img01.hua.com/uploadpic/newpic/202003231547317057.jpg'},
            {swiper_url:'https://img01.hua.com/uploadpic/newpic/202006021703206190.jpg'},
        ],
        Instro:'韩式系列/温柔以待',
        Cpmc:'花艺师打造 韩式花束系列',
        LinePrice:"319",
        Price:'239',
        Sales: "4311"
          },{
            title:'丰富花材',
            sub_title:'老师桌面风景',
            price:'￥245',
             backgroud_url:'background-image:url(/img/fs3.jpg)',
             img_url:'https://img01.hua.com/uploadpic/newpic/9012332.jpg_220x240.jpg',
             fes_swiper:[{swiper_url:'https://img01.hua.com/uploadpic/newpic/9012332.jpg'},
            {swiper_url:'https://img01.hua.com/uploadpic/newpic/201809061455222856.jpg'},
            {swiper_url:'https://img01.hua.com/uploadpic/newpic/201809061455181633.jpg'},
            {swiper_url:'https://img01.hua.com/uploadpic/newpic/201809061512161441.jpg'},
        ],
        Instro:'留住好时光-粉绣球1枝，粉雪山玫瑰6枝 ',
        Cpmc:'精选昆明A级花材',
        LinePrice:"306",
        Price:'245',
        Sales: "1.15万"
          },{
            title:'高端礼盒',
            sub_title:'芳香馥郁',
            price:'￥388',
             backgroud_url:'background-image:url(/img/fs4.jpg)',
             img_url:'https://img01.hua.com/uploadpic/newpic/1073173.jpg_220x240.jpg',
             fes_swiper:[{swiper_url:'https://img01.hua.com/uploadpic/newpic/1073173.jpg'},
            {swiper_url:'https://img01.hua.com/uploadpic/newpic/202004031631335614.jpg'},
            {swiper_url:'https://img01.hua.com/uploadpic/newpic/202004031631377149.jpg'},
            {swiper_url:'https://img01.hua.com/uploadpic/newpic/202004031631415977.jpg'},
        ],
        Instro:'柔情时光-进口香氛款',
        Cpmc:'进口香氛 特别定制款',
        LinePrice:"588",
        Price:'388',
        Sales: "3129"
          }],
    },
    getters:{
      
    },
    mutations:{
        displayTabbar(state,playload){
            state.showTabbar = playload
        },
       
    },
    actions:{

    }
}

export default common;