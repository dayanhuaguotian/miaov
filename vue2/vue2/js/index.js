var data={
	"status":1,

	"result":{
		"totalMoney":59,
		"list":[
			{
				"productId":"46464566",
				"productName":"黄鹤楼",
				"productPrice":19,
				"productQuentity":1,
				"productImge":"img/goods-1.jpg",
				"parts":[
					{
						"parsId":"1000",
						"parsName":"打火机"
					},
					{
						"parsId":"1000",
						"parsName":"打火机2"
					}
				]
			},
			{
				"productId":"46464568",
				"productName":"黄鹤楼2",
				"productPrice":25,
				"productQuentity":2,
				"productImge":"img/goods-2.jpg",
				"parts":[
					{
						"parsId":"1000",
						"parsName":"打橙子"
					}
				]
			}
		]
	},
	"message":""
};
var vm=new Vue({
	el:'#app',
	data:{
		totalMoney:0,
		checkedAll:false,
		onff:'',
		curproduct:{},
		productList:[]
	},
	filters:{
		formatMoney:function(value){
			return "￥"+value.toFixed(2)
		}
	},
	mounted:function(){
		this.$nextTick(function () {
           this.show()
  		})
	},
	methods:{
		show(){
			this.productList=data.result.list;
		},
		changenum(item,num){
			if(num>0){
				item.productQuentity++
			}else{
				
				item.productQuentity--
				if(item.productQuentity<1){
					item.productQuentity=1
				}
			}
			this.caculate()

		},
		chose(item){
			if(typeof item.checked=='undefined'){
				Vue.set(item,'checked',true);
				// this.$set(item,'checked',true);
			}else{
				item.checked=!item.checked;
			}
			this.caculate()
		},
		checkedAllF(flag){
			this.checkedAll=flag;
			this.productList.forEach(function(item,index){
				if(typeof item.checked=='undefined'){
					Vue.set(item,'checked',flag);
					// this.$set(item,'checked',true);
				}else{
					item.checked=flag;
				}
			});

			this.caculate()
		},
		caculate(){
			var _this=this;
			_this.totalMoney=0;
			this.productList.forEach(function(item,index){
				if(item.checked){
					_this.totalMoney+=item.productQuentity*item.productPrice
				}
			})
		},
		deleconfirm(item){
			this.onff=true;
			this.curproduct=item;
		},
		deleproduct(){
			var index=this.productList.indexOf(this.curproduct);
			this.productList.splice(index,1);
			this.onff=false;
		}	
	}
});
Vue.filter('money',function(value,type){
return "￥"+value.toFixed(2)+type
})