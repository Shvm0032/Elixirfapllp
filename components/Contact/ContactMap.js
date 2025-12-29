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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4869.602717531469!2d78.0570384271522!3d30.341595478149163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929d43ab92d57%3A0x128eb697c057ec78!2sParsvnath%20Complex!5e0!3m2!1sen!2sin!4v1767008926784!5m2!1sen!2sin"
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
