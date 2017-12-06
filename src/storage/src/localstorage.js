
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
	    	} catch(e) {
	    		console.error(e)	
	    	}
		}
	},

	remove(name){
		if (this.myStorage) {
			try {
        		this.myStorage.removeItem(name)
	    	} catch(e) {
	    		console.error(e)
	    	}
		}
	},

	clear(){
		if (this.myStorage) {
			try {
        		this.myStorage.clear()
	    	} catch(e) {
	    		console.error(e)
	    	}
		}
	}
}

export default local