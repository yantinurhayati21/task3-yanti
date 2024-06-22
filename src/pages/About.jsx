import { BookOpen, User, Globe } from 'lucide-react';

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-700 to-gray-300 flex items-center justify-center py-6">
            <div className="container mx-auto px-4">
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
                    <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">About StudentsApp</h1>
                    <div className="flex items-center mb-4">
                        <User size={36} className="text-blue-500" />
                        <span className="ml-2 font-semibold">Who We Are</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        StudentsApp adalah platform inovatif yang didedikasikan untuk mengelola informasi mahasiswa dengan efisien dan mudah digunakan. Kami bertekad untuk menyediakan pengalaman yang menyenangkan dalam memantau dan mengelola data mahasiswa secara digital.
                    </p>
                    <div className="flex items-center mb-4">
                        <BookOpen size={36} className="text-green-500" />
                        <span className="ml-2 font-semibold">Our Mission</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Misi kami adalah untuk memudahkan institusi pendidikan dalam mengelola informasi mahasiswa dengan teknologi terkini, sehingga mereka dapat fokus pada pengembangan akademik dan pembelajaran.
                    </p>
                    <div className="flex items-center">
                        <Globe size={36} className="text-purple-500" />
                        <span className="ml-2 font-semibold">Our Vision</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        Visi kami adalah menjadi solusi terdepan dalam manajemen informasi mahasiswa global yang memberdayakan lembaga pendidikan untuk mencapai keunggulan dalam pendidikan dan penelitian.
                    </p>
                </div>
            </div>
        </div>
    );
}
