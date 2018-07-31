export const login = ({ commit }, payload) => {
  return new Promise(resolve => {
    commit("setLoading", true);
    return setTimeout(function() {
      // TODO fare chiamata al server, passando username e password inclusi nel payload
      commit("setUsername", payload.username);
      commit("setLoading", false);
      resolve();
    }, 1500);
  });
};

export const loadAuthorizations = ({ commit }) => {
  return new Promise(resolve => {
    commit("setLoading", true);
    return setTimeout(function() {
      // TODO fare chiamata al server per farsi dare le autorizzazioni
      commit("setAuthorizations", [
        {
          descr: "L'applicazione vuole i tuoi soldi.",
          id: 1
        },
        {
          descr: "L'applicazione vuole la tua anima.",
          id: 2
        },
        {
          descr: "L'applicazione vuole i tuoi animali domestici",
          id: 3
        }
      ]);
      commit("setLoading", false);
      resolve();
    }, 1500);
  });
};
