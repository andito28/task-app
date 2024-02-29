class User {
  constructor() {
    this.users = this.getUsers() || [];
  }

  saveUser(userData) {
    const newUser = {
      id: Date.now(),
      ...userData,
    };

    this.users.push(newUser);
    localStorage.setItem("users", JSON.stringify(this.users));

    return {
      success: true,
    };
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }

  signInUser(usernameByInput) {
    const userExist = this.users.some(
      (user) => user.username.toLowerCase() === usernameByInput.toLowerCase()
    );

    if (userExist) {
      localStorage.setItem("usernameLoggedIn", usernameByInput);
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        message: "Username tidak terdaftar",
      };
    }
  }
}
