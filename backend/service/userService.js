const bcrypt = require("bcrypt");

const UserDto = require("../dtos/userDto");
const UserModel = require("../models/userModel");
const tokenService = require("../service/tokenService");

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email });

    if (candidate) {
      throw new Error(`Email ${email} has already been registrated`);
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const user = await UserModel.create({ email, password: hashPassword });

    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }
}
module.exports = new UserService();
