"use client";
import { useEffect } from 'react';

function ClientPwa() {
  useEffect(() => {
    const installPromptHandler = (event) => {
      event.preventDefault();
      // Показываем пользователю диалоговое окно для установки
      event.prompt();
      return false;
    };

    window.addEventListener('beforeinstallprompt', installPromptHandler);

    return () => {
      window.removeEventListener('beforeinstallprompt', installPromptHandler);
    };
  }, []);

  return null;
}

export default ClientPwa;