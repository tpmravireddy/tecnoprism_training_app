export default {
	downloadDummy(){
		Get_Users100.run({offset:0, limit: 100})
		showAlert("Dummy function called")			
	}
	
}