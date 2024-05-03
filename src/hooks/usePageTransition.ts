import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

export const usePageTransition = () => {
  const controls = useAnimation();
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      controls.start('exit');
    };

    const handleComplete = () => {
      controls.start('enter');
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
    };
  }, [controls, router.events]);

  return controls;
};
