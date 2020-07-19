export default {
   session: {
       set: (user) => sessionStorage.setItem("user", JSON.stringify(user)),
       get: () => JSON.parse(sessionStorage.getItem("user")),
       remove: () => sessionStorage.clear()
   },
   data: {
       set: (key, data) => localStorage.setItem(key.toString(), JSON.stringify(data)),
       get: (key) => JSON.parse(localStorage.getItem(key.toString()))
   }
};