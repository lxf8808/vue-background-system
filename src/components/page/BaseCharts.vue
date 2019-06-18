<template>
	<div>
		<div class="crumbs">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item><i class="el-icon-pie-chart"></i> chart图表</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="container">
			<!-- <div class="plugins-tips">
                vue-schart：vue.js封装sChart.js的图表组件。
                访问地址：<a href="https://github.com/lin-xin/vue-schart" target="_blank">vue-schart</a>
            </div> -->
			<div class="schart-box">
				<div class="content-title">柱状图</div>
				<chart class="schart" ref="chart1" :options="orgOptions1" :auto-resize="true"></chart>
			</div>
			<div class="schart-box">
				<div class="content-title">折线图</div>
				<chart class="schart" ref="chart2" :options="orgOptions2" :auto-resize="true"></chart>
			</div>
			<div class="schart-box">
				<div class="content-title">饼状图</div>
				<chart class="schart" ref="chart3" :options="orgOptions3" :auto-resize="true"></chart>
			</div>
			<div class="schart-box">
				<div class="content-title">环形图</div>
				<chart class="schart" ref="chart4" :options="orgOptions4" :auto-resize="true"></chart>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'basecharts',
		data: () => ({
			orgOptions1: {
				color: ['red'],
				title: {
					text: '某商店近年营业总额',
					// subtext: '纯属虚构',
					x: 'center'
				},
				xAxis: {
					type: 'category',
					data: [2012, 2013, 2014, 2015, 2016, 2017, 2018]
				},
				yAxis: {
					type: 'value'
				},
				series: [{
					data: [820, 932, 901, 934, 1290, 1330, 1320],
					type: 'bar'
				}]
			},
			orgOptions2: {
				title: {
					text: '某商店近年营业总额',
					// subtext: '纯属虚构',
					x: 'center'
				},
				xAxis: {
					type: 'category',
					data: [2012, 2013, 2014, 2015, 2016, 2017, 2018]
				},
				yAxis: {
					type: 'value'
				},
				series: [{
					data: [820, 932, 901, 934, 1290, 1330, 1320],
					type: 'line'
				}]
			},
			orgOptions3: {
				title: {
					text: '某商店各商品年度销量',
					// subtext: '纯属虚构',
					x: 'center'
				},
				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
					orient: 'vertical',
					left: 'left',
					data: ['短袖', '休闲裤', '连衣裙', '外套', '羽绒服']
				},
				series: [{
					name: '访问来源',
					type: 'pie',
					radius: '55%',
					center: ['50%', '60%'],
					data: [{
							name: '短袖',
							value: 1200
						},
						{
							name: '休闲裤',
							value: 1222
						},
						{
							name: '连衣裙',
							value: 1283
						},
						{
							name: '外套',
							value: 1314
						},
						{
							name: '羽绒服',
							value: 2314
						}
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}]
			},
			orgOptions4: {
				title: {
					text: '某商店各商品年度销量',
					// subtext: '纯属虚构',
					x: 'center'
				},
				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b}: {c} ({d}%)"
				},
				legend: {
					orient: 'vertical',
					x: 'left',
					data: ['短袖', '休闲裤', '连衣裙', '外套', '羽绒服']
				},
				series: [{
					name: '访问来源',
					type: 'pie',
					radius: ['50%', '70%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: false,
							position: 'center'
						},
						emphasis: {
							show: true,
							textStyle: {
								fontSize: '30',
								fontWeight: 'bold'
							}
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					data: [{
							name: '短袖',
							value: 1200
						},
						{
							name: '休闲裤',
							value: 1222
						},
						{
							name: '连衣裙',
							value: 1283
						},
						{
							name: '外套',
							value: 1314
						},
						{
							name: '羽绒服',
							value: 2314
						}
					]
				}]
			}
		})
	}
</script>

<style scoped>
	.schart-box {
		display: inline-block;
		margin: 20px;
	}

	.schart {
		width: 500px;
		height: 400px;
	}

	.content-title {
		clear: both;
		font-weight: 400;
		line-height: 50px;
		margin: 10px 0;
		font-size: 22px;
		color: #1f2f3d;
	}
</style>
