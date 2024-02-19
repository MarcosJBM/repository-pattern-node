# 📖 About

The **Repository pattern** is widely used in software applications to separate the **data access logic** from the **business logic**. The main purpose of this project is to explore how the **Repository pattern** can be applied in **Node.js** projects.

# 📝 Explanation

As mentioned earlier, the **Repository pattern** is used to separate the **data access logic** from the **business logic**, and for that, we need a place where data access is performed.

Within the `src` folder, we have a folder called `repositories`, and inside it, we have our **contracts** and their respective **repositories**, but first, we need to understand what **contracts** are.

**Contracts** are nothing more than interfaces responsible for telling us which methods we need to implement in our repository, for example:

```ts
import { Prisma, User } from '@prisma/client';

export interface UsersRepository {
  create(user: Prisma.UserCreateInput): Promise<User>;
}
```

The above contract (located in `src/repositories/interfaces`) tells us that we need to implement the `create` method in our user repository, as well as informing us which data should be provided and returned.

The repository responsible for working with user data (located in `src/repositories/prisma`) will implement our contract and the logic for inserting data:

```ts
import { Prisma } from '@prisma/client';

import { prisma } from '../../libs';
import { UsersRepository } from '../interfaces';

export class PrismaUsersRepository implements UsersRepository {
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({ data });

    return user;
  }
}
```

With the repository created, the logic responsible for inserting user data into our database is centralized in one place.

To use the repository, we create an instance of it and use its methods:

```ts
const prismaUsersRepository = new PrismaUsersRepository();

const user = await prismaUsersRepository.create({
  bio: 'Developer since 2021.',
  email: 'marcosjbotene@gmail.com',
  name: 'Marcos Botene',
});
```

# 🔩 Technologies

- [Node.js](https://nodejs.org/en)
- [Prisma](https://www.prisma.io/)
- [Docker](https://www.docker.com/)
- [TypeScript](https://www.typescriptlang.org/)

# 📚 References

- https://ducmanhphan.github.io/2019-04-28-Repository-pattern/
- https://medium.com/@erickwendel/generic-repository-with-typescript-and-node-js-731c10a1b98e
