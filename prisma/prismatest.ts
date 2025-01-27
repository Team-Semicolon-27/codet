import { db } from "../lib/db";

async function main() {
  // Create a new user
  const newUser = await db.user.create({
    data: {
      email: 'test@example.com',
      name: 'Test User',
    },
  });
  console.log('Created new user:', newUser);

  // Fetch all users
  const allUsers = await db.user.findMany();
  console.log('All users:', allUsers);

  // Clean up: delete the created user
  await db.user.delete({
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
    await db.$disconnect();
  });