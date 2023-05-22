import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export const AddUser = () => {
  async function createUser(formData: any) {
    'use server';
    const prisma = new PrismaClient();
    await prisma.user.create({
      data: {
        name: formData.get('name'),
        email: formData.get('email'),
        id: Math.floor(Math.random() * 100),
      },
    });
    revalidatePath('/users');
  }
  return (
    <>
      <h2 className='text-3xl font-bold'>Add User</h2>
      <form action={createUser}>
        <label htmlFor='name'>First name</label>
        <input
          className='bg-pink-100 ml-5 text-black'
          type='text'
          name='name'
        ></input>
        <label className='ml-5' htmlFor='email'>
          Email
        </label>
        <input
          className='bg-pink-100 ml-5 text-black'
          type='text'
          name='email'
        ></input>
        <button className='bg-blue-400 ml-5 rounded-lg py-2 px-5' type='submit'>
          Submit
        </button>
      </form>
    </>
  );
};
