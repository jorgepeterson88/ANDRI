'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Shield, Eye, Database, UserCheck } from 'lucide-react'

export default function Privacy() {
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
            <Button variant="outline" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Kebijakan Privasi <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">ANDRI</span>
            </h1>
            <p className="text-xl text-gray-600">
              Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda.
            </p>
          </div>

          {/* Privacy Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-blue-600" />
                  <span>Pendahuluan</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Di ANDRI, kami menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda percayakan kepada kami. 
                  Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda 
                  saat menggunakan layanan kami.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dengan menggunakan layanan ANDRI, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini. 
                  Kami mendorong Anda untuk membaca dengan seksama kebijakan privasi kami.
                </p>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="h-5 w-5 text-blue-600" />
                  <span>Pengumpulan Data</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-lg">Informasi yang Kami Kumpulkan</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">Data Pribadi</h4>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                      <li>Nama lengkap</li>
                      <li>Alamat email</li>
                      <li>Nomor telepon</li>
                      <li>Alamat lengkap</li>
                      <li>Informasi profesional lainnya</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Data Penggunaan</h4>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                      <li>Informasi tentang bagaimana Anda menggunakan layanan kami</li>
                      <li>Data interaksi dengan website kami</li>
                      <li>Preferensi dan pengaturan</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <UserCheck className="h-5 w-5 text-blue-600" />
                  <span>Penggunaan Data</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Kami menggunakan data pribadi Anda untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Menyediakan dan meningkatkan layanan kami</li>
                  <li>Menanggapi permintaan dan pertanyaan Anda</li>
                  <li>Mengirim informasi penting tentang layanan</li>
                  <li>Melakukan analisis untuk meningkatkan pengalaman pengguna</li>
                  <li>Mematuhi kewajiban hukum dan peraturan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Keamanan Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Kami menerapkan berbagai langkah keamanan untuk melindungi data pribadi Anda:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Enkripsi data saat transmisi dan penyimpanan</li>
                  <li>Akses terbatas ke data pribadi</li>
                  <li>Monitoring keamanan berkelanjutan</li>
                  <li>Prosedur backup dan recovery</li>
                  <li>Pelatihan reguler staf tentang keamanan data</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Berbagi Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Kami tidak menjual, memperdagangkan, atau menyewakan data pribadi Anda kepada pihak ketiga. 
                  Kami hanya akan berbagi data Anda dalam kondisi berikut:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Dengan persetujuan eksplisit Anda</li>
                  <li>Untuk memenuhi kewajiban hukum</li>
                  <li>Dengan penyedia layanan tepercaya yang membantu operasi kami</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan kami atau orang lain</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Hak Anda</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Sebagai pengguna, Anda memiliki hak untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Mengakses data pribadi yang kami simpan tentang Anda</li>
                  <li>Memperbaiki data yang tidak akurat</li>
                  <li>Menghapus data pribadi Anda</li>
                  <li>Menolak pemrosesan data tertentu</li>
                  <li>Meminta salinan data pribadi Anda</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Hubungi Kami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau bagaimana kami menangani data pribadi Anda, 
                  silakan hubungi kami:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <p className="font-medium">ANDRI</p>
                  <p className="text-gray-600">JL JATI NO8 KAMPUS IPB, Desa/Kelurahan Babakan, Kec. Dramaga, Kab. Bogor, Provinsi Jawa Barat, 16680</p>
                  <p className="text-gray-600">Telepon: 082382466336</p>
                  <p className="text-gray-600">Email: privacy@andri.com</p>
                </div>
              </CardContent>
            </Card>

            {/* Update Policy */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Pembaruan Kebijakan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan dalam praktik kami 
                  atau perubahan dalam hukum yang berlaku. Setiap perubahan akan diposting di halaman ini dengan tanggal pembaruan terbaru.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Kebijakan Privasi ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 ANDRI. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Beranda
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}