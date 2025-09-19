export default {
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	getCustomChart () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		
	return {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: get_gender_ratio.data.map(dt => ({
				value: dt.count,
				name: dt.gender				
			}))		
    }
  ]
};
	}
}