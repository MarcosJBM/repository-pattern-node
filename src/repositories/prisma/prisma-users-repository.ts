import { Prisma } from '@prisma/client';

import { prisma } from '../../libs';
import { UsersRepository } from '../interfaces';

export class PrismaUsersRepository implements UsersRepository {
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({ data });

    return user;
  }
}
