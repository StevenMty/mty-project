<template>
	<div class="mty-product">
		<Table border :columns="title" :data="datas"></Table>
	</div>
</template>
<script>
	export default {
		data() {
			return{
				title: [
					{ title: '商品名称', key:'productName' },
					{ title: '价格', key:'price' },
					{ title: '简介', key:'remark' },
					{ title: '地址', key:'address' },
					{ title: '年份', key:'years' },
					{ title: '类型', key:'type' },
					{ title: '含量', key:'content' },
				],
				datas: [
					{
						productName:'阿斯蒂甜白葡萄酒',
						price:'15888',
						remark:'意大利品牌名酒',
						address:'皮埃蒙特',
						years:'2015',
						type:'酒水',
						content:'750ml',
					}, {
						productName:'阿斯蒂甜白葡萄酒',
						price:'15888',
						remark:'意大利品牌名酒',
						address:'皮埃蒙特',
						years:'2015',
						type:'酒水',
						content: '750ml',
					}
				]
			}
		}
	}
</script>