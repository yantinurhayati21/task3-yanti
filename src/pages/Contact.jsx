import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-700 to-gray-300 flex items-center justify-center py-6">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
                <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">Contact Us</h1>

                <div className="flex items-center mb-4">
                    <Mail size={36} className="text-blue-500" />
                    <span className="ml-4 text-xl font-semibold">Email</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                    Feel free to reach out to us via email at <a href="mailto:info@example.com" className="text-blue-500 hover:underline">tugasreact.com</a>. We are always ready to assist you.
                </p>

                <div className="flex items-center mt-6 mb-4">
                    <Phone size={36} className="text-green-500" />
                    <span className="ml-4 text-xl font-semibold">Phone</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                    Call us at <a href="tel:+1234567890" className="text-green-500 hover:underline">+6285321840790</a> for any inquiries or support you may need.
                </p>

                <div className="flex items-center mt-6">
                    <MapPin size={36} className="text-purple-500" />
                    <span className="ml-4 text-xl font-semibold">Address</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                    Visit us at our office located at:
                    <br />
                    Bandung, Jawa Barat, Indonesia
                </p>
            </div>
        </div>
    );
}
