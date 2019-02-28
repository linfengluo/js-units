const session = {
  mySession: window.sessionStorage,
  get(name){
    if (this.mySession) {
      const data = this.mySession.getItem(name)
      try {
        const result = JSON.parse(data);
        return result;
      } catch (e) {
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
        return true
      } catch (e) {
        console.error(e)
        return false
      }
    }
  },
  
  remove(name){
    if (this.mySession) {
      try {
        this.mySession.removeItem(name)
        return true
      } catch (e) {
        console.error(e)
        return false
      }
    }
  },
  
  clear(){
    if (this.mySession) {
      try {
        this.mySession.clear()
        return true
      } catch (e) {
        console.error(e)
        return false
      }
    }
  }
}

export default session