'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, FileText, AlertCircle, CheckCircle, Scale } from 'lucide-react'

export default function Terms() {
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
              <FileText className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Syarat & Ketentuan <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">ANDRI</span>
            </h1>
            <p className="text-xl text-gray-600">
              Syarat dan ketentuan penggunaan layanan ANDRI.
            </p>
          </div>

          {/* Terms Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <span>Pendahuluan</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Selamat datang di ANDRI. Syarat dan Ketentuan ini ("Syarat") mengatur penggunaan layanan yang 
                  disediakan oleh ANDRI ("Layanan") yang diakses melalui website kami atau platform lainnya.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dengan mengakses atau menggunakan Layanan kami, Anda setuju untuk terikat oleh Syarat ini. 
                  Jika Anda tidak setuju dengan Syarat ini, Anda tidak boleh menggunakan Layanan kami.
                </p>
              </CardContent>
            </Card>

            {/* Definitions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Definisi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">"ANDRI"</h4>
                    <p className="text-gray-600">Merujuk pada perusahaan ANDRI yang menyediakan layanan profesional.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">"Layanan"</h4>
                    <p className="text-gray-600">Merujuk pada semua layanan yang disediakan oleh ANDRI, termasuk konsultasi, pengembangan proyek, dan support.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">"Pengguna"</h4>
                    <p className="text-gray-600">Merujuk pada individu atau entitas yang menggunakan Layanan ANDRI.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">"Konten"</h4>
                    <p className="text-gray-600">Merujuk pada semua informasi, materi, dan data yang tersedia melalui Layanan.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Terms */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span>Syarat Layanan</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-lg">Kewajiban Pengguna</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Memberikan informasi yang akurat dan lengkap</li>
                  <li>Mematuhi semua hukum dan peraturan yang berlaku</li>
                  <li>Tidak menggunakan Layanan untuk tujuan ilegal atau tidak etis</li>
                  <li>Menjaga kerahasiaan informasi akses Anda</li>
                  <li>Melaporkan masalah keamanan atau penyalahgunaan segera</li>
                </ul>
                
                <h3 className="font-semibold text-lg mt-6">Hak ANDRI</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Memodifikasi atau menghentikan Layanan sewaktu-waktu</li>
                  <li>Menolak Layanan kepada siapa pun dengan alasan apa pun</li>
                  <li>Menghapus konten yang melanggar Syarat</li>
                  <li>Memperbarui Syarat dan Kebijakan Privasi</li>
                </ul>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Syarat Pembayaran</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-lg">Struktur Biaya</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Biaya Layanan akan diinformasikan sebelum dimulainya proyek</li>
                  <li>Pembayaran dapat dilakukan sesuai kesepakatan</li>
                  <li>Biaya tambahan mungkin berlaku untuk layanan tambahan</li>
                  <li>Semua harga dalam mata uang Rupiah</li>
                </ul>
                
                <h3 className="font-semibold text-lg mt-6">Metode Pembayaran</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Transfer bank ke rekening resmi ANDRI</li>
                  <li>Pembayaran tunai di kantor ANDRI</li>
                  <li>Metode pembayaran lain yang disepakati</li>
                </ul>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Hak Kekayaan Intelektual</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Semua konten, merek dagang, dan hak kekayaan intelektual lainnya yang terkait dengan Layanan 
                  adalah milik ANDRI atau pemberi lisensi kami.
                </p>
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-800">Hak Pengguna</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Menggunakan Layanan sesuai Syarat yang berlaku</li>
                    <li>Mengakses konten yang tersedia secara publik</li>
                    <li>Memberikan umpan balik dan saran</li>
                  </ul>
                  
                  <h4 className="font-medium text-gray-800 mt-4">Batasan</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Tidak boleh menyalin, mendistribusikan, atau memodifikasi konten tanpa izin</li>
                    <li>Tidak boleh menggunakan merek dagang ANDRI tanpa izin tertulis</li>
                    <li>Tidak boleh melakukan reverse engineering pada Layanan</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Confidentiality */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Kerahasiaan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  ANDRI berkomitmen untuk menjaga kerahasiaan informasi yang Anda berikan. 
                  Informasi rahasia meliputi:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Data pribadi dan informasi kontak</li>
                  <li>Informasi bisnis dan strategi perusahaan</li>
                  <li>Detail proyek dan dokumen teknis</li>
                  <li>Informasi keuangan dan komersial</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Kami tidak akan mengungkapkan informasi rahasia kepada pihak ketiga tanpa persetujuan Anda, 
                  kecuali jika diwajibkan oleh hukum atau peraturan yang berlaku.
                </p>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                  <span>Pembatasan Tanggung Jawab</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Sejauh diizinkan oleh hukum, ANDRI tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                  <li>Kehilangan data atau keuntungan</li>
                  <li>Gangguan Layanan yang tidak dapat kami kendalikan</li>
                  <li>Kerusakan yang disebabkan oleh penggunaan yang tidak tepat</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Tanggung jawab maksimal ANDRI terbatas pada jumlah yang Anda bayarkan untuk Layanan 
                  dalam periode 12 bulan sebelum klaim.
                </p>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Pengakhiran</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-lg">Pengakhiran oleh Pengguna</h3>
                <p className="text-gray-700 leading-relaxed">
                  Anda dapat menghentikan penggunaan Layanan kapan saja dengan memberikan pemberitahuan 
                  tertulis kepada ANDRI.
                </p>
                
                <h3 className="font-semibold text-lg mt-4">Pengakhiran oleh ANDRI</h3>
                <p className="text-gray-700 leading-relaxed">
                  ANDRI dapat menghentikan Layanan jika:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Anda melanggar Syarat ini</li>
                  <li>Penggunaan Layanan membahayakan keamanan</li>
                  <li>Diwajibkan oleh hukum atau peraturan</li>
                  <li>Alasan bisnis yang sah</li>
                </ul>
              </CardContent>
            </Card>

            {/* Dispute Resolution */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Scale className="h-5 w-5 text-blue-600" />
                  <span>Penyelesaian Sengketa</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Jika terjadi sengketa terkait Syarat ini atau penggunaan Layanan, kedua belah pihak sepakat untuk:
                </p>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>Terlebih dahulu mencoba menyelesaikan secara musyawarah</li>
                  <li>Mediasi melalui pihak ketiga yang netral</li>
                  <li>Penyelesaian melalui pengadilan di Kabupaten Bogor</li>
                </ol>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Syarat ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Hubungi Kami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <p className="font-medium">ANDRI</p>
                  <p className="text-gray-600">JL JATI NO8 KAMPUS IPB, Desa/Kelurahan Babakan, Kec. Dramaga, Kab. Bogor, Provinsi Jawa Barat, 16680</p>
                  <p className="text-gray-600">Telepon: 082382466336</p>
                  <p className="text-gray-600">Email: legal@andri.com</p>
                </div>
              </CardContent>
            </Card>

            {/* Last Updated */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Pembaruan Terakhir</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Syarat dan Ketentuan ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  ANDRI berhak mengubah Syarat ini kapan saja. Perubahan akan berlaku efektif 
                  setelah diposting di website kami.
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