'use client'
import { signIn } from "next-auth/react";
export async function socialLogin(formData:any) {
  const action = formData.get('action');
  console.log(action);
  await signIn(action,{rediectTo:"/"})}
