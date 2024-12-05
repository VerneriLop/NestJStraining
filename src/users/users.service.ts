import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/user';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, // TypeORM:n tietokantayhteys
  ) {}

  // Hakee kaikki käyttäjät tietokannasta
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // Lisää uuden käyttäjän tietokantaan
  async createUser(user: Partial<User>): Promise<User> {
    return this.userRepository.save(user);
  }
}
