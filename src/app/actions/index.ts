'use server';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createEvent = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 250));
  const title = formData.get('title') as string;
  const event = await prisma.event.create({
    data: {
      title
    },
  })
  console.log(event)

  return {
    title: 'Message created: ' + title,
  };
};

export const getAllEvents = async () => {
  return await prisma.event.findMany()
}
