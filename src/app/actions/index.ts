'use server';

type FormState = {
  message: string;
};

export const createEvent = async (formState: FormState, formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 250));
  const text = formData.get('text') as string;
  return {
    message: 'Message created: ' + text,
  };
};
