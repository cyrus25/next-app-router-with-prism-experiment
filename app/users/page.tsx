import { AddUser } from '@/app/src/components/AddUser';
import { PrismaClient } from '@prisma/client';

const Hello = async () => {
  const prisma = new PrismaClient();
  const [posts, users] = await Promise.all([
    prisma.post.findMany(),
    prisma.user.findMany(),
  ]);

  return (
    <div className='mt-20 ml-20'>
      <AddUser />
      <h2 className='text-3xl mt-8 font-bold'>Posts</h2>
      {posts.map((post) => (
        <div className='mt-5' key={post.id}>
          <div>id: {post.id}</div>
          <div>title: {post.title}</div>
          <div>content: {post.content}</div>
        </div>
      ))}
      <h2 className='mt-8 text-3xl font-bold'>Users</h2>
      {users.map((user) => (
        <div className='mt-5' key={user.name}>
          <div>email: {user.email}</div>
          <div>name\: {user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Hello;
