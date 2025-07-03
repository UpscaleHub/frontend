"use client";
import Image from "next/image";
import logo from "../imgs/Logo-L.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiChatVoiceAiLine, RiHome4Line } from "react-icons/ri";
import { BiTask, BiUser } from "react-icons/bi";
import { MdOutlineLeaderboard } from "react-icons/md";

export default function NavBar() {
  //check what router user is on
  // useEffect(() => {
  //   setMounted(true);
  // });
  const pathname = usePathname();
  // alert(router)
  // const { user } = useAuth();
  // useEffect(() => {
  //   if (user?.email) {
  //     setIsAuthed(true);
  //   } else if (pathname === "/") {
  //     setIsAuthed(false);
  //   } else {
  //     setIsAuthed(false);
  //   }
  // }, [user]);



  return (
    <>
      <div className="flex items-center justify-between md:px-10 px-2 py-4 text-white md:mt-0">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Up Scale Logo"
            width={120}
            height={40}
            className="w-30"
            priority
          />
        </Link>
        {pathname !== "/" ? (
          // a bottom fixed navbar
          <>
            <div className="navbar fixed bottom-0 mx-auto w-auto mb-4 lg:translate-x-full  z-50 flex justify-center items-center mt-5 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-full px-7 py-2">
              <div
                className={
                  "md:flex space-x-10 paragraph grid grid-cols-4 gap-4 text-xl items-center"
                }
              >
                <Link href={'/dailytask'} className={"hover:text-gray-300 cursor-pointer " + (pathname === '/dailytask' ? "active" : "")}>
                  <BiTask />
                </Link>
                <Link href={'/chat'} className={"hover:text-gray-300 cursor-pointer " + (pathname === '/chat' ? "active" : "")}>
                  <RiChatVoiceAiLine />
                </Link>
                <Link href={'/dashboard'} className={"hover:text-gray-300 cursor-pointer  " + (pathname === '/dashboard' ? "active" : "")}>
                  <RiHome4Line />
                </Link>
                <Link href={'/leaderboard'} className={"hover:text-gray-300 cursor-pointer " + (pathname === '/leaderboard' ? "active" : "")}>
                  <MdOutlineLeaderboard />
                </Link>
                <Link href={'/dashboard/profile'} className={"hover:text-gray-300 cursor-pointer " + (pathname == '/dashboard/profile' ? "active" : "")}>
                  <BiUser />
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="navbar flex items-center b space-x-2 ">
            <ul className={"md:flex space-x-10 paragraph text-sm hidden"}>
              <li className="hover:text-gray-300 cursor-pointer">Benefits</li>
              <li className="hover:text-gray-300 cursor-pointer">About</li>
              <li className="hover:text-gray-300 cursor-pointer">Services</li>
              <li className="hover:text-gray-300 cursor-pointer">Contact</li>
            </ul>
          </div>
        )}
      </div>
      {/* 
      // <div className="flex items-center justify-center gap-5 header">
      //   <IoIosHelpCircleOutline className="text-white text-xl cursor-pointer" />
      //   <div className=" cursor-pointer">$100</div>
      //   <div className="flex flex-col gap- group">
      //     <Image
      //       src={"https://avatar.iran.liara.run/public/49"}
      //       alt=""
      //       className="h-12 w-12 cursor-pointer "
      //       width={1000}
      //       height={1000}
      //     />
      //     <div className="hidden group-hover:block hover:block absolute bg--200 translate-y-15 -translate-x-20 lg:-translate-x-8 p-3 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-lg">
      //       <ul className="space-y-3">
      //         <li>Profile</li>
      //         <li>Dashboard</li>
      //         <li>Logout</li>
      //       </ul>
      //     </div>
      //   </div>
      // </div>
      */}
      <div className="flex items-center justify-center">
        <Link href={"/signup"}>
          <div className="bg-gradient-to-l to-blue-400 from-indigo-500 p-[2.5px] w-fit rounded-full">
            <button className=" bg-black text-white px-8 py-2 rounded-full paragraph text-sm cursor-pointer">
              Sign Up
            </button>
          </div>
        </Link>
        <Link href={"/login"}>
          <button className="bg-gradient-to-l to-blue-400 from-indigo-500  text-white px-10 py-2.5 rounded-full paragraph text-sm cursor-pointer hover:bg-gray-600 ml-2 ">
            Login
          </button>
        </Link>
      </div>
    </>
  );
}
