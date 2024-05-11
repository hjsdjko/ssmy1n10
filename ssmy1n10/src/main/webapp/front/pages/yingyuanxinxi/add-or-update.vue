<template>
	<view class="content">
		<form class="app-update-pv">
			
			<view :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 107, 19, 0.1)","borderColor":"rgba(245, 245, 245, 1)","margin":"0","borderWidth":"0 0 2rpx","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"200rpx","fontSize":"28rpx","color":"rgba(0, 0, 0, 1)","textAlign":"right"}' class="title">影院名称</view>
				<input :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"rgba(255, 170, 51, 1)","borderRadius":"8rpx","color":"rgba(51, 51, 51, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"26rpx","borderStyle":"solid","height":"80rpx"}' :disabled="ro.yingyuanmingcheng" v-model="ruleForm.yingyuanmingcheng" placeholder="影院名称"></input>
			</view>
			<view :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 107, 19, 0.1)","borderColor":"rgba(245, 245, 245, 1)","margin":"0","borderWidth":"0 0 2rpx","borderStyle":"solid","height":"108rpx"}' class="cu-form-group select">
				<view :style='{"width":"200rpx","fontSize":"28rpx","color":"rgba(0, 0, 0, 1)","textAlign":"right"}' class="title">影院规模</view>
				<picker @change="yingyuanguimoChange" :value="yingyuanguimoIndex"  :range="yingyuanguimoOptions">
					<view :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"rgba(255, 170, 51, 1)","borderRadius":"8rpx","color":"rgba(51, 51, 51, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"26rpx","borderStyle":"solid","height":"80rpx"}' class="uni-input">{{ruleForm.yingyuanguimo?ruleForm.yingyuanguimo:"请选择影院规模"}}</view>
				</picker>
			</view>
			<view :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 107, 19, 0.1)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"140rpx"}' class="cu-form-group" @tap="tupianTap" :class='left == "left"?"":"active"'>
				<view :style='{"width":"200rpx","fontSize":"28rpx","color":"rgba(0, 0, 0, 1)","textAlign":"right"}' class="title">图片</view>
				<view class="right-input" :style='{textAlign:"left"}' style="padding:0">
					<image :style='{"width":"120rpx","boxShadow":"0 0 8rpx rgba(0,0,0,.3)","borderRadius":"50%","textAlign":"left","height":"120rpx"}' class="avator" v-if="ruleForm.tupian" :src="baseUrl+ruleForm.tupian" mode="aspectFill"></image>
					<image :style='{"width":"120rpx","boxShadow":"0 0 8rpx rgba(0,0,0,.3)","borderRadius":"50%","textAlign":"left","height":"120rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
				</view>
			</view>
			<view :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 107, 19, 0.1)","borderColor":"rgba(245, 245, 245, 1)","margin":"0","borderWidth":"0 0 2rpx","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"200rpx","fontSize":"28rpx","color":"rgba(0, 0, 0, 1)","textAlign":"right"}' class="title">影院地址</view>
				<input :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"rgba(255, 170, 51, 1)","borderRadius":"8rpx","color":"rgba(51, 51, 51, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"26rpx","borderStyle":"solid","height":"80rpx"}' :disabled="ro.yingyuandizhi" v-model="ruleForm.yingyuandizhi" placeholder="影院地址"></input>
			</view>
			<view :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 107, 19, 0.1)","borderColor":"rgba(245, 245, 245, 1)","margin":"0","borderWidth":"0 0 2rpx","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"200rpx","fontSize":"28rpx","color":"rgba(0, 0, 0, 1)","textAlign":"right"}' class="title">咨询电话</view>
				<input :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"rgba(255, 170, 51, 1)","borderRadius":"8rpx","color":"rgba(51, 51, 51, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"26rpx","borderStyle":"solid","height":"80rpx"}' :disabled="ro.zixundianhua" v-model="ruleForm.zixundianhua" placeholder="咨询电话"></input>
			</view>
			
			<!-- 否 -->
 

			
			<view :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 107, 19, 0.1)","borderColor":"rgba(245, 245, 245, 1)","margin":"0 0 0 0","borderWidth":"0 0 2rpx","borderStyle":"solid","height":"308rpx"}' class="cu-form-group">
				<view :style='{"width":"200rpx","fontSize":"28rpx","color":"rgba(0, 0, 0, 1)","textAlign":"right"}' class="title">影院介绍</view>
				<textarea :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"rgba(255, 170, 51, 1)","borderRadius":"8rpx","color":"rgba(51, 51, 51, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"280rpx"}' v-model="ruleForm.yingyuanjieshao" placeholder="影院介绍"></textarea>
			</view>
			
			<view class="btn">
				<button :style='{"boxShadow":"0 0 0px rgba(0,0,0,0) inset","backgroundColor":"rgba(255, 107, 19, 1)","borderColor":"rgba(255, 107, 19, 1)","borderRadius":"20rpx","color":"#fff","borderWidth":"0","width":"100%","fontSize":"32rpx","borderStyle":"solid","height":"80rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

			
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";

	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				yingyuanmingcheng: '',
				yingyuanguimo: '',
				tupian: '',
				yingyuandizhi: '',
				zixundianhua: '',
				yingyuanjieshao: '',
				},
				yingyuanguimoOptions: [],
				yingyuanguimoIndex: 0,
				// 登陆用户信息
				user: {},
                                ro:{
                                   yingyuanmingcheng : false,
                                   yingyuanguimo : false,
                                   tupian : false,
                                   yingyuandizhi : false,
                                   zixundianhua : false,
                                   yingyuanjieshao : false,
                                },
			}
		},
		components: {
			wPicker
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
			
			
			
			
			
			
		},
		async onLoad(options) {
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取


			// 自定义下拉框值
			this.yingyuanguimoOptions = "小型,中型,大型".split(',')

			// 如果有登陆，获取登陆后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = options.refid;
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`yingyuanxinxi`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='yingyuanmingcheng'){
					this.ruleForm.yingyuanmingcheng = obj[o];
					this.ro.yingyuanmingcheng = true;
					continue;
					}
					if(o=='yingyuanguimo'){
					this.ruleForm.yingyuanguimo = obj[o];
					this.ro.yingyuanguimo = true;
					continue;
					}
					if(o=='tupian'){
					this.ruleForm.tupian = obj[o];
					this.ro.tupian = true;
					continue;
					}
					if(o=='yingyuandizhi'){
					this.ruleForm.yingyuandizhi = obj[o];
					this.ro.yingyuandizhi = true;
					continue;
					}
					if(o=='zixundianhua'){
					this.ruleForm.zixundianhua = obj[o];
					this.ro.zixundianhua = true;
					continue;
					}
					if(o=='yingyuanjieshao'){
					this.ruleForm.yingyuanjieshao = obj[o];
					this.ro.yingyuanjieshao = true;
					continue;
					}
				}
			}
			this.styleChange()
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv .cu-form-group .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数



			// 下拉变化
			yingyuanguimoChange(e) {
				this.yingyuanguimoIndex = e.target.value
				this.ruleForm.yingyuanguimo = this.yingyuanguimoOptions[this.yingyuanguimoIndex]
			},

			tupianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.tupian = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},

			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {












//跨表计算判断
				if((!this.ruleForm.yingyuanmingcheng)){
					this.$utils.msg(`影院名称不能为空`);
					return
				}
				if((!this.ruleForm.yingyuanguimo)){
					this.$utils.msg(`影院规模不能为空`);
					return
				}
				if(this.ruleForm.zixundianhua&&(!this.$validate.isPhone(this.ruleForm.zixundianhua))){
					this.$utils.msg(`咨询电话应输入电话格式`);
					return
				}
				//更新跨表属性
			       var crossuserid;
			       var crossrefid;
			       var crossoptnum;
				if(this.cross){
					var statusColumnName = uni.getStorageSync('statusColumnName');
					var statusColumnValue = uni.getStorageSync('statusColumnValue');
					if(statusColumnName!='') {
						var obj = uni.getStorageSync('crossObj');
						if(!statusColumnName.startsWith("[")) {
							for (var o in obj){
								if(o==statusColumnName){
									obj[o] = statusColumnValue;
								}

							}
							var table = uni.getStorageSync('crossTable');
							await this.$api.update(`${table}`, obj);
						} else {
						       crossuserid=Number(uni.getStorageSync('userid'));
						       crossrefid=obj['id'];
						       crossoptnum=uni.getStorageSync('statusColumnName');
						       crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
						}
					}
				}
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid=crossuserid;
					this.ruleForm.crossrefid=crossrefid;
					let params = {
						page: 1,
						limit:10,
						crossuserid:crossuserid,
						crossrefid:crossrefid,
					}
					let res = await this.$api.list(`yingyuanxinxi`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`yingyuanxinxi`, this.ruleForm);
						}else{
							await this.$api.add(`yingyuanxinxi`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`yingyuanxinxi`, this.ruleForm);
					}else{
						await this.$api.add(`yingyuanxinxi`, this.ruleForm);
					}
					this.$utils.msgBack('提交成功');
				}
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 20upx;
	}
	
	.content:after {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		content: '';
		background-attachment: fixed;
		background-size: cover;
		background-position: center;
	}

	textarea {
		border: 1upx solid #EEEEEE;
		border-radius: 20upx;
		padding: 20upx;
	}

	.title {
		width: 180upx;
	}

	.avator {
		width: 150upx;
		height: 60upx;
	}

	.right-input {
		flex: 1;
		text-align: left;
		padding: 0 24upx;
	}
	
	.cu-form-group.active {
		justify-content: space-between;
	}
	
	.btn {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  flex-wrap: wrap;
	  padding: 20upx 0;
	}
	
	.cu-form-group {
		padding: 0 24upx;
		background-color: transparent;
		min-height: inherit;
	}
	
	.cu-form-group+.cu-form-group {
		border: 0;
	}
	
	.cu-form-group uni-input {
		padding: 0 30upx;
	}
	
	.uni-input {
		padding: 0 30upx;
	}
	
	.cu-form-group uni-textarea {
		padding: 30upx;
		margin: 0;
	}
	
	.cu-form-group uni-picker::after {
		line-height: 80rpx;
	}
	
	.select .uni-input {
		line-height: 80rpx;
	}
	
	.input .right-input {
		line-height: 80rpx;
	}
</style>
