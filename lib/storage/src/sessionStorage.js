"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var session = {
  mySession: window.sessionStorage,
  get: function get(name) {
    if (this.mySession) {
      var data = this.mySession.getItem(name);

      try {
        var result = JSON.parse(data);
        return result;
      } catch (e) {
        console.error(e);
        return data;
      }
    }
  },
  set: function set(name, data) {
    if (this.mySession) {
      try {
        var value = JSON.stringify(data);
        this.mySession.setItem(name, value);
        return true;
      } catch (e) {
        console.error(e);
        return false;
      }
    }
  },
  remove: function remove(name) {
    if (this.mySession) {
      try {
        this.mySession.removeItem(name);
        return true;
      } catch (e) {
        console.error(e);
        return false;
      }
    }
  },
  clear: function clear() {
    if (this.mySession) {
      try {
        this.mySession.clear();
        return true;
      } catch (e) {
        console.error(e);
        return false;
      }
    }
  }
};
var _default = session;
exports.default = _default;