export default {
	myFun1 () {
		Get_Country.run().then(dt => {
			showAlert(""+dt[0].country)
		})
		showAlert("arst");

	},
	async newFun () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		const country = await Get_Country.run()
		await showAlert(""+ country[0].country)
		await showAlert("HI")
	},	
	async demoDependency (){
		let resp = await Get_Country.run()

		}


}