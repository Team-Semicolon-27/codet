import prisma from './prisma';

async function main() {
  // Create a new user
  const newUser = await prisma.user.create({
    data: {
      email: 'test@example.com',
      name: 'Test User',
    },
  });
  console.log('Created new user:', newUser);

  // Fetch all users
  const allUsers = await prisma.user.findMany();
  console.log('All users:', allUsers);

  // Clean up: delete the created user
  await prisma.user.delete({
    where: {
      id: newUser.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });