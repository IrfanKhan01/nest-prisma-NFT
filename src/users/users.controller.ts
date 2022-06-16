import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './users.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users/:id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.userService.user({ id: Number(id) });
  }

  @Get('users')
  async getUsers(): Promise<User[]> {
    return this.userService.users({});
  }

  @Post('users/sign-up')
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<User> {
    return this.userService.createUser(userData);
  }

  @Put('users/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() userData: { name?: string; email: string },
  ): Promise<User> {
    return this.userService.updateUser({
      where: { id: Number(id) },
      data: userData,
    });
  }

  @Delete('users/:id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.userService.deleteUser({ id: Number(id) });
  }
}
