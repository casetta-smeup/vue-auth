export const login = ({ commit }, payload) => {
  return new Promise(resolve =>
    setTimeout(function() {
      // TODO fare chiamata al server, passando username e password inclusi nel payload
      commit("setUsername", payload.username);
      resolve();
    }, 1000)
  );
};
