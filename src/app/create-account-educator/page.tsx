// src/app/create-account-educator/page.tsx

import Link from 'next/link'
import { Icons } from '@/components/ui/icons'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function CreateAccountEducator() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#001C22]">
      <Card className="w-[456px] h-[580px] flex flex-col justify-center p-4 border border-[#0A3D44] rounded-lg shadow-[0_4px_5px_rgba(0,0,0,0.25)] bg-[#001C22]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-[24px] font-semibold leading-[32px] text-[#F3F4F6]">Start teaching with <span className="text-[#2EFFD9]">Sonical.ly</span></CardTitle>
          <p className="text-sm text-[#F3F4F6]">Want to sign up as a player? <Link href="#" className="underline">Click here.</Link></p>
        </CardHeader>
        <CardContent className="flex-1 grid gap-2 mt-2">
          <div className="grid grid-cols-2 gap-2">
            <div className="grid gap-1">
              <Label htmlFor="first-name" className="text-sm font-medium text-[#F3F4F6]">First name</Label>
              <Input id="first-name" type="text" placeholder="First name" className="h-[36px] text-sm text-[#001C22] bg-[#F3F4F6] border-[#092e35]" />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="last-name" className="text-sm font-medium text-[#F3F4F6]">Last name</Label>
              <Input id="last-name" type="text" placeholder="Last name" className="h-[36px] text-sm text-[#001C22] bg-[#F3F4F6] border-[#092e35]" />
            </div>
          </div>
          <div className="grid gap-1 mt-2">
            <Label htmlFor="email" className="text-sm font-medium text-[#F3F4F6]">Email</Label>
            <Input id="email" type="email" placeholder="Email" className="h-[36px] text-sm text-[#001C22] bg-[#F3F4F6] border-[#092e35]" />
          </div>
          <div className="grid gap-1 mt-2">
            <Label htmlFor="password" className="text-sm font-medium text-[#F3F4F6]">Password</Label>
            <Input id="password" type="password" placeholder="Password" className="h-[36px] text-sm text-[#001C22] bg-[#F3F4F6] border-[#092e35]" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-2 mt-2 mb-1">
          <Button className="w-full h-[36px] bg-black text-[#F3F4F6]">Sign Up</Button>
          <div className="relative w-full mt-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-[#F3F4F6]" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <div className="relative flex justify-center text-xs uppercase px-2 text-[#F3F4F6] bg-[#001C22]">
                <span className="px-2 bg-[#001C22]">Or continue with</span>
              </div>
            </div>
          </div>
          <Button className="w-full h-[36px] flex items-center justify-center gap-2 mt-2 bg-black text-[#F3F4F6]">
            <Icons.google className="h-4 w-4" />
            Google
          </Button>
          <div className="text-center text-sm mt-2 text-[#F3F4F6]">
            <Link href="/login" className="text-sm">
              Already have an account? <span className="font-medium underline">Log in</span>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
