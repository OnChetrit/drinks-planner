'use server';

type FormState = {
  title: string;
};

export const createEvent = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 250));
  const title = formData.get('title') as string;
  return {
    title: 'Message created: ' + title,
  };
};
