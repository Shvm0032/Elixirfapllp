"use client";

export default function ContactMap() {
  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Find Us on Map</h2>
        <p className="text-gray-600">
          Visit our office or contact us for any medical or product inquiries.
        </p>
      </div>

      {/* Google Map */}
      <div className="w-full h-[400px] md:h-[400px] overflow-hidden rounded-lg shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.869685006846!2d77.2090215!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd42f865d15f%3A0x78da37b9ffb5cb2f!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 w-full h-full"
        ></iframe>
      </div>
    </section>
  );
}
