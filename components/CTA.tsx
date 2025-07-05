import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start learning your way.</div>
      <h2 className="text-3xl font-bold">
        Build and Personalize Learning Companion
      </h2>
      <p>
        Pick a name, subject, voice, & personality — and start learning through
        voice conversations that feel natural and fun.
      </p>
      <Image
        src="images/cta.svg"
        alt="cta"
        width={362}
        height={232}
        className="cta-image" // Add a class for styling
      />
      <Link href="/companions/new">
        <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition-all cta-button">
          <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
          <span>Build a New Companion</span>
        </button>
      </Link>
    </section>
  );
};

export default Cta;