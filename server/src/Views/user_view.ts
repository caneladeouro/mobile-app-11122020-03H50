import User from "../Models/User";

export default {
  render(user: User) {
    return {
      id: user.cd_id,
      name: user.nm_user,
      email: user.nm_email,
      password: user.ds_password,
    };
  },

  renderMany(users: User[]) {
    return users.map((user) => this.render(user));
  },
};
