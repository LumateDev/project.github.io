function getStorageInfo() {
  return {
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    text: localStorage.getItem("text"),
    phone: localStorage.getItem("phone"),
    sending: false
  };
}
function toLocalStorage() {
  const name = document.getElementById("inputName");
  const email = document.getElementById("inputEmail");
  const phone = document.getElementById("inputPhone");
  const text = document.getElementById("inputText");
  localStorage.setItem("name", name.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("phone", phone.value);
  localStorage.setItem("text", text.value);
}
export default {
  actions: {
    async sendForm(ctx) {
      const btn = document.getElementById("form-submit");
      const form = document.getElementById("sendForm");
      toLocalStorage();
      btn.disabled = true;
      ctx.commit("changeSendingValue", true);
      let formData = new FormData(form);
      let response = await fetch("https://formcarry.com/s/HhDnMI-5UW_", {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });
      ctx.commit("changeSendingValue", false);
      let result = await response.json();
      if (response.ok) {
        alert("Запрос успешно обработан!");
      } else {
        alert("Произошла ошибка. Отправьте форму повторно!");
      }
      btn.disabled = false;
    }
  },
  mutations: {
    changeSendingValue(state, val) {
      state.formData.sending = val;
    }
  },
  state: {
    formData: getStorageInfo()
  },
  getters: {
    getValues(state) {
      return state.formData;
    }
  }
};
