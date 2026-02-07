import Button from "../components/Button";
import Links from "../components/Links";
import PageTransition from "../components/PageTransition";

export default function Contact() {
  return (
    <PageTransition>
    <div className="mx-auto w-full max-w-135 flex flex-col items-center font-mono gap-8.25 py-3.75 lg:max-w-200 xl:max-w-250 xl:gap-10 xl:py-10">
      <div className="w-full flex flex-col items-center gap-9 sm:flex-row sm:justify-between">
        <h1 className="text-4xl font-bold italic sm:w-2xs lg:text-5xl lg:w-sm xl:text-[64px] xl:w-xl">Thanks for stopping by!</h1>
        <img src="/logo/logo-sm.svg" alt="Logo" className="hidden sm:block w-28 sm:mr-7 lg:w-44.5 xl:w-59.25" />
      </div>
      <p className="text-xs w-full lg:text-sm xl:text-base">I'm always excited to connect with fellow developers and designers. Whether you have a project in mind or just want to chat about design systems and frontend architecture, I'd love to hear from you.</p>
      <div className="w-full flex flex-col gap-8.25 lg:flex-row lg:gap-12.5">
        <div className="w-full flex flex-col gap-8.25 lg:w-93.75 xl:w-145">   
          <p className="text-md w-full lg:text-lg xl:text-xl">If you have any inquiries, please feel free to reach out to me directly over <strong>email</strong></p>
          <a className="text-left flex flex-row gap-5" href="mailto:fergusonfinn00@gmail.com">
            <img src="/email.svg" alt="Email" />
            <p className="font-sans text-xl xl:text-2xl">fergusonfinn00@gmail.com</p>
          </a>
        </div>
        <Links />
      </div>
    </div>
    </PageTransition>
  );
}
