'use client'

import LoginForm from "@/app/auth/sign-in/components/loginForm"
import RegisterForm from "@/app/auth/sign-up/components/registerForm"
import { Button } from "@/components/shadcn/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card"
import { Input } from "@/components/shadcn/ui/input"
import { Label } from "@/components/shadcn/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/ui/tabs"
import { useState } from "react"

export function AuthTabs() {

  const [selected, setSelected] = useState('login')


  return (
    <Tabs defaultValue={'login'} className="w-full">
      <TabsList className="grid h-full w-full grid-cols-2 bg-primary/10">
        <TabsTrigger value="login"
          className={`p-2 data-[state=active]:bg-primary data-[state=active]:text-white text-black`} >
            Sign In</TabsTrigger>
        <TabsTrigger value="register"
          className={`p-2 data-[state=active]:bg-primary data-[state=active]:text-white text-black`} >
            Sign Up
        </TabsTrigger>
      </TabsList>
      <TabsContent value="login">
       <LoginForm />
      </TabsContent>
      <TabsContent value="register">
       <RegisterForm />
      </TabsContent>
    </Tabs>
  )
}
