
const local = {
	myStorage: window.localStorage,
	get(name){
		if (this.myStorage) {
			const data = this.myStorage.getItem(name)
			try {
            	const result = JSON.parse(data);
            	return result;
        	} catch(e) {
        		console.error(e)
            	return data;
        	}
		}
	},

	set(name, data){
		if (this.myStorage) {
			try {
				const value = JSON.stringify(data)
        		this.myStorage.setItem(name, value)
        		return true
	    	} catch(e) {
	    		console.error(e)	
	        	return false
	    	}
		}
	},

	remove(name){
		if (this.myStorage) {
			try {
        		this.myStorage.removeItem(name)
        		return true
	    	} catch(e) {
	    		console.error(e)
	        	return false
	    	}
		}
	},

	clear(){
		if (this.myStorage) {
			try {
        		this.myStorage.clear()
        		return true
	    	} catch(e) {
	    		console.error(e)
	        	return false
	    	}
		}
	}
}

export default local