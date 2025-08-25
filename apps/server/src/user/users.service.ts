import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '@moa/database';
import { CreateUserInput, UpdateUserInput } from './user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const newUser = new this.userModel(createUserInput);
    return newUser.save();
  }

  async findAll() {
    return this.userModel.find().exec();
  }

  async findOne(id: string) {
    const item = await this.userModel.findById(id).exec();
    if (!item) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return item;
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    const existingItem = await this.userModel
      .findByIdAndUpdate(id, updateUserInput, { new: true })
      .exec();
    if (!existingItem) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return existingItem;
  }

  async remove(id: string) {
    const item = await this.userModel.findByIdAndDelete(id).exec();
    if (!item) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return item;
  }
}
