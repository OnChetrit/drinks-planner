'use server';
import { Event, RequestEvent } from '@/types';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export const createEvent = async (formData: FormData): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 250));

  console.log('formData', formData);

  const start = new Date(formData.get('start') as string).toISOString();
  const end = new Date(formData.get('end') as string).toISOString();
  const membersCount = formData.get('members_count') as string;
  const menCount = formData.get('gender_range') as string;
  const ageRange = formData.get('age_range') as string;

  const event = await prisma.event.create({
    data: {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      start_date: start,
      end_date: end,
      members_count: +membersCount,
      men_count: +menCount,
      women_count: +membersCount - +menCount,
      max_age: 30,
      min_age: 24,
    },
  });
  console.log(event);
  revalidatePath('/');
};

export const getEvents = async () => {
  const events = await prisma.event.findMany();
  return events.map((event) => formatEvent(event));
};

export const getAlcohols = async () => {
  return await prisma.drink.findMany();
};

const formatEvent = (requestEvent: RequestEvent): Event => {
  return {
    id: requestEvent.id,
    title: requestEvent.title,
    description: requestEvent.description,
    start_date: requestEvent.start_date,
    end_date: requestEvent.end_date,
    members_count: requestEvent.members_count,
    men_women_ratio: {
      men: requestEvent.men_count,
      women: requestEvent.women_count,
    },
    age_range: {
      min: requestEvent.min_age,
      max: requestEvent.max_age,
    },
    alcohol_list: [],
  };
};
