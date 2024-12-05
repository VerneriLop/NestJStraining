import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../user/user';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // GET /users - Hakee kaikki käyttäjät
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  // POST /users - Lisää uuden käyttäjän
  @Post()
  async create(@Body() user: Partial<User>): Promise<User> {
    return this.usersService.createUser(user);
  }
}
