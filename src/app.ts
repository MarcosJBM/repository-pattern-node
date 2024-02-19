import { prisma } from './libs';
import { PrismaUsersRepository } from './repositories';

(async () => {
  const prismaUsersRepository = new PrismaUsersRepository();

  const user = await prismaUsersRepository.create({
    bio: 'Developer since 2021.',
    email: 'marcosjbotene@gmail.com',
    name: 'Marcos Botene',
  });

  console.log(user);

  await prisma.user.delete({ where: { id: user.id } });
})();
