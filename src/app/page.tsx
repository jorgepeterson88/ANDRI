'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  CheckCircle,
  Users,
  Target,
  Award,
  ArrowRight,
  Menu,
  X
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo-andri.png" 
                alt="ANDRI" 
                className="h-10 w-auto rounded-lg"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                ANDRI
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
              <Button variant="outline" size="sm" asChild>
                <a href="/privacy">Privacy</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="/terms">Terms</a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
              <Separator />
              <div className="flex space-x-2 px-3">
                <Button variant="outline" size="sm" asChild>
                  <a href="/privacy">Privacy</a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="/terms">Terms</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit">
                Profesional & Terpercaya
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  ANDRI
                </span>
                <br />
                Solusi Terbaik untuk Bisnis Anda
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Kami adalah mitra terpercaya untuk mengembangkan bisnis Anda dengan solusi 
                profesional dan inovatif yang disesuaikan dengan kebutuhan spesifik Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Hubungi Kami
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Pelajari Lebih Lanjut
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl transform rotate-3"></div>
              <Card className="relative bg-white shadow-2xl rounded-2xl overflow-hidden">
                <img 
                  src="/team-meeting.png" 
                  alt="Team Meeting" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Tim Profesional</h3>
                        <p className="text-sm text-gray-600">Berpengalaman dan ahli di bidangnya</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Target className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Hasil Terjamin</h3>
                        <p className="text-sm text-gray-600">Komitmen pada kualitas terbaik</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <Award className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Berpengalaman</h3>
                        <p className="text-sm text-gray-600">Solusi yang telah terbukti</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tentang <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">ANDRI</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami adalah perusahaan yang berkomitmen untuk memberikan layanan terbaik 
              dengan standar kualitas yang tinggi dan integritas yang kuat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Kualitas Terjamin</h3>
              <p className="text-gray-600">
                Setiap layanan yang kami berikan melalui proses quality control yang ketat 
                untuk memastikan kepuasan pelanggan.
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Tepat Waktu</h3>
              <p className="text-gray-600">
                Kami menghargai waktu Anda dan selalu berusaha untuk menyelesaikan setiap 
                proyek tepat sesuai jadwal yang disepakati.
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Layanan Pelanggan</h3>
              <p className="text-gray-600">
                Tim support kami siap membantu Anda dengan responsif dan solutif untuk 
                setiap kebutuhan dan pertanyaan Anda.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai layanan profesional yang disesuaikan untuk memenuhi kebutuhan bisnis Anda.
            </p>
          </div>

          <div className="mb-12">
            <img 
              src="/consultation.png" 
              alt="Business Consultation" 
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Konsultasi Bisnis",
                description: "Analisis mendalam dan solusi strategis untuk pertumbuhan bisnis Anda.",
                icon: Target,
                color: "blue"
              },
              {
                title: "Pengembangan Proyek",
                description: "Implementasi proyek dengan manajemen profesional dan hasil terjamin.",
                icon: Award,
                color: "green"
              },
              {
                title: "Support & Maintenance",
                description: "Layanan pendukung berkelanjutan untuk memastikan operasional yang optimal.",
                icon: Users,
                color: "purple"
              }
            ].map((service, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className={`w-16 h-16 bg-${service.color}-100 rounded-full flex items-center justify-center mb-4`}>
                  <service.icon className={`h-8 w-8 text-${service.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button variant="outline" className="w-full">
                  Pelajari Lebih Lanjut
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-600">
              Siap untuk memulai proyek Anda? Hubungi kami hari ini.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 border-0 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Alamat</p>
                    <p className="text-gray-600">
                      JL JATI NO8 KAMPUS IPB, Desa/Kelurahan Babakan, Kec. Dramaga,
                      Kab. Bogor, Provinsi Jawa Barat, 16680
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Telepon</p>
                    <p className="text-gray-600">082382466336</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@andri.com</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-0 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Pesan</label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={4}
                    placeholder="Tulis pesan Anda..."
                  ></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Kirim Pesan
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/logo-andri.png" 
                  alt="ANDRI" 
                  className="h-8 w-auto rounded-lg"
                />
                <span className="text-xl font-bold">ANDRI</span>
              </div>
              <p className="text-gray-400 mb-4">
                Mitra terpercaya untuk solusi bisnis profesional dan inovatif.
                Kami berkomitmen untuk memberikan layanan terbaik dengan integritas dan kualitas yang tinggi.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Konsultasi Bisnis</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pengembangan Proyek</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support & Maintenance</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ANDRI. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              JL JATI NO8 KAMPUS IPB, Bogor, Jawa Barat 16680
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}