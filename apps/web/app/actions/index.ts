'use client';
import { signIn } from "next-auth/react";

export async function socialLogin(formData: FormData) {
  const action = formData.get('action');

  if (typeof action !== 'string') {
    console.error('Invalid action, expected a string provider name');
    return;
  }

  const result = await signIn(action, { 
    redirect: false,  
    callbackUrl: '/'  
  });

  if (result?.error) {
    console.error('Error during social login:', result.error);
  } else {
    window.location.href = '/home';
  }
}
