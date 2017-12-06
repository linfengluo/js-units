const cookie = {
	get(name){
		let result = null
		if (document.cookie.length > 0) {
		   let startAt = document.cookie.indexOf(name + "=")
		  	if (startAt !== -1) { 
			    startAt = startAt + name.length + 1 
			    let endAt = document.cookie.indexOf(";" , startAt)
			    if (endAt === -1) {
			    	endAt = document.cookie.length
			    }
			    result = unescape(document.cookie.substring(startAt, endAt))
	   		}
	  	}
		return result
	},

	set(name, value, expire = -9999){
		try {
			if (expire === -9999) {
				document.cookie = `${name}=${escape(value)}`
			} else {
				let expireTime = this.getExpireTime(expire)
				let expireDate = new Date()
				expireDate = expireDate.setTime(expireDate.getTime() + expireTime)
				name+ "=" + escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
				document.cookie = `${name}=${escape(value)};expires=${expireDate.toGMTString()}`
			}
			return true
		} catch(e) {
			console.error(e)
			return false
		}
		
	},

	remove(name){
		try {
			var expireDate = new Date()
			expireDate.setTime(expireDate.getTime() - 1);
			var value = this.get(name)
			document.cookie = `${name}=${escape(value)};expires=${expireDate.toGMTString()}`
			return true
		} catch(e) {
			console.error(e)
			return false
		}
		
	},

	getExpireTime(expire) {
		let time = Number(expire.substring(0, expire.length - 1))
		let type = expire.substring(expire.length - 1, expire.length)
		let expireTime = 0
		switch (type) {
			case 's':
				expireTime = time * 1000
			case 'm':		
				expireTime = time * 60 * 1000
				break
			case 'h':
				expireTime = time * 60 * 60 * 1000
				break
			case 'd':
				expireTime = time * 24 * 60 * 60 * 1000
				break
			default:
				expireTime = time * 24 * 60 * 60 * 1000
				break
		}
		
		return expireTime
	}
}

export default cookie