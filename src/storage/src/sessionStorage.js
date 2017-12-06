
const session = {
	mySession: window.sessionStorage,
	get(name){
		if (this.mySession) {
			const data = this.mySession.getItem(name)
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
		if (this.mySession) {
			try {
				const value = JSON.stringify(data)
        		this.mySession.setItem(name, value)
	    	} catch(e) {
	    		console.error(e)
	    	}
		}
	},

	remove(name){
		if (this.mySession) {
			try {
        		this.mySession.removeItem(name)
	    	} catch(e) {
	    		console.error(e)
	    	}
		}
	},

	clear(){
		if (this.mySession) {
			try {
        		this.mySession.clear()
	    	} catch(e) {
	    		console.error(e)
	    	}
		}
	}
}

export default session