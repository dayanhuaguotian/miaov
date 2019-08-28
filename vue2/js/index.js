window.onload=function(){
var list=[{'user':'张小六','backpic':'img/friendcircle-banner.png','headpic':'img/user.jpg'},
		[{
		'off':true,
		'num':'1',
		'photo':'img/user.jpg',
		'name':'甲壳虫',
		'text':'2017年一月,心向往之，记我的西藏行，历时16天，川进青出。',
		'article':[],
		'love':'9',
		'time':'一小时前',	
		'sharepic':[],
		'comment':[{'name':'秋香','text':'赞~','show':'true'},{'name':'秋香','text':'赞~','show':'true'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽','show':'true'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽','show':'false'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽','show':'false'}],
	 	},{
	 	'off':true,
	 	'num':'2',
		'photo':'img/user.jpg',
		'name':'甲壳虫',
		'text':'2017年一月,心向往之，记我的西藏行，历时16天，川进青出。',
		'article':[{'pic':'img/user.jpg','title':'滴滴出行，从此出行再无滴出行从此出行再无忧滴滴出行'}],
		'love':'5',
		'time':'一天前',	
		'sharepic':[],
		'comment':[{'name':'秋香','text':'赞~','show':'true'},{'name':'秋香','text':'赞~','show':'true'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽','show':'true'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽','show':'false'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽','show':'false'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽','show':'false'}],
	 	},{
	 	'off':true,
	 	'num':'3',	
		'photo':'img/user.jpg',
		'name':'张小六',
		'text':'2016年一月,心向往之，记我的西藏行，历时16天，川进青出。',
		'article':[{'pic':'img/user.jpg','title':'滴滴出行，从此出行再无忧'}],
		'love':'6',
		'time':'两天前',	
		'sharepic':['img/user.jpg','img/user.jpg','img/user.jpg','img/user.jpg'],
		'comment':[{'name':'秋香','text':'赞~','show':'true'},{'name':'秋香','text':'赞~','show':'true'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽','show':'true'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽','show':'false'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽','show':'false'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽','show':'false'}],
	 	},{
	 	'off':true,
	 	'num':'4',	
		'photo':'img/user.jpg',
		'name':'甲壳虫',
		'text':'2017年一月,心向往之，记我的西藏行，历时16天，川进青出。',
		'article':[{'pic':'img/user.jpg','title':'滴滴出行，从此出行再无忧'}],
		'love':'100',
		'time':'一周前',	
		'sharepic':['img/user.jpg','img/user.jpg','img/user.jpg'],
		'comment':[{'name':'秋香','text':'赞~','show':'true'},{'name':'秋香','text':'赞~','show':'true'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽','show':'true'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽','show':'false'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽','show':'false'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽','show':'false'}],
	 	},{
	 	'off':true,	
	 	'num':'5',
		'photo':'img/user.jpg',
		'name':'张小六',
		'text':'2017年一月,心向往之，记我的西藏行，历时16天，川进青出。',
		'article':[{'pic':'img/user.jpg','title':'滴滴出行，从此出行再无忧'}],
		'love':'6',
		'time':'一月前',	
		'sharepic':['img/user.jpg'],
		'comment':[{'name':'秋香','text':'赞~','show':'true'},{'name':'秋香','text':'赞~','show':'true'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽','show':'true'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽','show':'false'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽','show':'false'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽','show':'false'}],
	 	},]
		
	];
var message = new Vue({
	  el: '#app',
	  data: {
	  	message:'hello',
	    list:list,
	    length:list[1].length,
	    loveoff:[],
	  },
	  methods:{
	  	constructor(){
	  		for (var i = 0; i < this.length; i++) {
	  			this.loveoff.push({'off':'true'});
	  		}
	  		
	  	},
	  	show(index){//显示隐藏
	  		if(this.list[1][index].off){
	  			for (var i = 3; i < this.list[1][index].comment.length; i++) {
	  			this.list[1][index].comment[i].show='true';
	  			this.list[1][index].off=false;	
	  			}
	  		}else{
	  			for (var i = 3; i < this.list[1][index].comment.length; i++) {
	  			this.list[1][index].comment[i].show='false';
	  			this.list[1][index].off=true;
	  			}
	  		}	  		
	  	},
	  	love(index){
	  		if(this.loveoff[index].off){
	  			this.list[1][index].love=parseInt(this.list[1][index].love)+1;
	  			this.loveoff[index].off=false;
	  		}else{
	  			this.list[1][index].love=parseInt(this.list[1][index].love)-1;
	  			this.loveoff[index].off=true;
	  		}
	  	},
	  	todo(index){ 		
	  		this.list[1].splice(index,1)
	  	},
	  	addtodo(index){
	  		console.log(1)
	  	}
	  }
	});
	message.constructor();
	// 图片点击跳转事件
	// 运用html5本地缓存
	(function(){
		$('.share-photo img').on("click", function(){
			console.log(1)
			var siteurl = this.src;  
		    localStorage.setItem('sitename', siteurl);
		    window.location.href = 'picshow.html';
		});

	})();
}



		
