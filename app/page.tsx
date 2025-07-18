import Image from "next/image"
import PatientForm from "@/components/forms/PatientForm";
import Link from "next/link"
import PassKeyModal from "@/components/PasskeyModal";

export default async function Home({ searchParams }: { searchParams: Promise<{ admin?: string }> }) {
  const params = await searchParams;
  const isAdmin = params.admin === 'true'; 
  
  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PassKeyModal/>}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-width-[496px]">
          <Image
            src="\assets\icons\logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <PatientForm/>

          <div className="text-14-regular mt-15 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2025 CarePulse
            </p>
            <Link href="?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        alt="patient"
        width={1000}
        height={1000}
        className="side-img max-w-[50%]"
      />
    </div>
  )
}

