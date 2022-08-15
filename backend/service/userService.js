/* eslint-disable @typescript-eslint/no-var-requires */
const bcrypt = require("bcrypt");

const UserDto = require("../dtos/userDto");
const UserInfoDto = require("../dtos/userInfoDto");
const ApiError = require("../exeptions/apiError");
const UserModel = require("../models/userModel");
const tokenService = require("../service/tokenService");

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email });

    if (candidate) {
      throw ApiError.BadRequest(`Email ${email} has already been registrated`);
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const user = await UserModel.create({
      email,
      password: hashPassword,
      is_current_project: false,
      project_list: [],
    });

    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async login(email, password) {
    const user = await UserModel.findOne({ email });

    if (!user) {
      throw ApiError.BadRequest({
        message: "Can not found user with such email",
      });
    }

    const isPassEquals = await bcrypt.compare(password, user.password);

    if (!isPassEquals) {
      throw ApiError.BadRequest({
        message: "Password is incorrect",
      });
    }

    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async refreshToken(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }

    const userData = tokenService.validateRefreshToken(refreshToken);

    const tokenFromDB = await tokenService.findToken(refreshToken);

    if (!userData || !tokenFromDB) {
      throw ApiError.UnauthorizedError();
    }

    const user = await UserModel.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async getUserInfo(id) {
    const user = await UserModel.findOne({ id });
    const userDto = new UserInfoDto(user);
    return { user: userDto };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }
}
module.exports = new UserService();
