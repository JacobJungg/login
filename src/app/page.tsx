"use client"

import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-[456px] p-6 border rounded-lg shadow-[0_4px_5px_rgba(0,0,0,0.25)]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-[24px] font-semibold leading-[32px]">Login</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-sm font-medium">Email</Label>
            <Input id="email" type="email" placeholder="Email" className="h-[40px] text-sm"/>
          </div>
          <div className="grid gap-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password" className="text-sm font-medium">Password</Label>
              <a href="#" className="text-sm">Forgot your password?</a>
            </div>
            <Input id="password" type="password" placeholder="Password" className="h-[40px] text-sm"/>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-4">
          <Button className="w-full h-[40px] mt-2">Sign in</Button>
          <div className="relative w-full mt-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase bg-white px-2">
              <span className="px-2 bg-white">Or continue with</span>
            </div>
          </div>
          <Button variant="outline" className="w-full h-[40px] flex items-center justify-center gap-2 mt-2">
            <Icons.google className="h-4 w-4" />
            Google
          </Button>
          <div className="text-center text-sm mt-4">
            <a href="#" className="text-sm">
              Don't have an account? <span className="font-medium">Create an account</span>
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
