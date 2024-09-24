import React from 'react'
import Layout from './Layout'  // Ensure correct import for Layout component
// import { Button } from '@/components/ui/button'  // Make sure the path is correct for your project
// import { Input } from '@/components/ui/input'    // Make sure the path is correct for your project
// import { Textarea } from '@/components/ui/textarea' // Make sure the path is correct for your project
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-green-700 mb-4">
              We're here to help! If you have any questions or need support, please don't hesitate to reach out.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-green-700">
                <Mail className="mr-2" />
                <span>support@expensetracker.com</span>
              </div>
              <div className="flex items-center text-green-700">
                <Phone className="mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-green-700">
                <MapPin className="mr-2" />
                <span>123 Finance St, Money City, 12345</span>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" className="w-full" />
            <Input type="email" placeholder="Your Email" className="w-full" />
            <Input type="text" placeholder="Subject" className="w-full" />
            <Textarea placeholder="Your Message" className="w-full" rows={4} />
            <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  )
}
