import React from 'react'
import Layout from './layout'  // Ensure correct import for Layout component
import { Button, Input, Textarea } from '@nextui-org/react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto bg-green-100 p-4 rounded-lg shadow-md bg-opacity-80 mt-10 mb-10">
      <h1 className="text-3xl font-bold text-black mb-6">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-black mb-4">
            We're here to help! If you have any questions or need support, please don't hesitate to reach out.
          </p>
          <div className="space-y-4">
            <div className="flex items-center text-black">
              <Mail className="mr-2" />
              <span>support@expenseera.com</span>
            </div>
            <div className="flex items-center text-black">
              <Phone className="mr-2" />
              <span>+1 (877) 393-4448</span>
            </div>
            <div className="flex items-center text-black">
              <MapPin className="mr-2" />
              <span>127 Financial Freedom Ave, Money City, 12345</span>
            </div>
          </div>
        </div>
        <form className="space-y-4">
          <Input type="text" placeholder="Your Name" className="w-full" />
          <Input type="email" placeholder="Your Email" className="w-full" />
          <Input type="text" placeholder="Subject" className="w-full" />
          <Textarea placeholder="Your Message" className="w-full" rows={4} />
          <div className="flex justify-center ">
            <Button type="submit" className="bg-green-100 hover:bg-green-700 text-black rounded-lg shadow-md bg-opacity-80">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
