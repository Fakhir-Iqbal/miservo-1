import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Collapse,
  Card,
  CardBody,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import NavigationLinks from "@root/src/components/NavigationLinks";
import Icon from "@root/src/components/Icon";
import { plus, mail, hemBurger, cancel } from "@root/icons";
import CustomButton from "@root/src/components/CustomButton";

const Feature = [
  {
    img: "/images/home/icon4.png",
    name: "Secure",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    img: "/images/home/icon5.png",
    name: "Automated Notifications",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    img: "/images/home/icon1.png",
    name: "User Check Ins",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    img: "/images/home/icon3.png",
    name: "Subscription",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    img: "/images/home/icon2.png",
    name: "Premium Features",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
];
const WorksCard = [
  {
    name: "Create Your Account",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  {
    name: "Choose Executors",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  {
    name: "Pick Beneficiaries",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
];
const navigationName = [
  {
    name: "About Us",
    link: "/",
  },
  {
    name: "How It Works",
    link: "/",
  },
  {
    name: "Subscription",
    link: "/",
  },
  {
    name: "Miservo",
    link: "/",
  },
  {
    name: "Contact Us",
    link: "/",
  },
];
const FAQ = [
  {
    heading:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    desc: "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
  },
  {
    heading:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    desc: "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1600s",
  },
  {
    heading:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    desc: "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1700s",
  },
  {
    heading:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    desc: "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1800s",
  },
  {
    heading:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    desc: "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1900s",
  },
];
const FooterContactInfo = [
  {
    heading: "Contact Info",
    links: [
      { name: "About Us" },
      { name: "How It Works" },
      { name: "Subscription" },
      { name: "Miservo" },
      { name: "Contact Us" },
    ],
  },
];
const FooterNewsletter = [
  {
    heading: "News Letter",
    links: [
      { name: "Subscribe to our newsletter to get our latest updates & news." },
    ],
  },
];
const FooterLinks = [
  {
    heading: "Quick Links",
    links: [
      { name: "About Us", link: "/" },
      { name: "How It Works", link: "/" },
      { name: "Subscription", link: "/" },
      { name: "Miservo", link: "/" },
      { name: "Contact Us", link: "/" },
    ],
  },
];
const herosectionpints = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
];

export default function Home() {
  const [openNav, setOpenNav] = React.useState(false);
  const [open, setOpen] = React.useState(null);

  const toggleOpen = (index) => {
    setOpen((current) => (current === index ? null : index));
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="my-6 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navigationName.map((data) => (
        <Typography
          as="li"
          color="black"
          className="flex items-center gap-x-2 p-1 font-bold"
        >
          <Link href={data.link} className="flex items-center text-sm">
            {data.name}
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <div className="bg-white">

      {/* Navbar */}
      <Navbar className="mx-auto px-4 py-2 lg:py-4 shadow-none">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className="mr-4 font-bold text-3xl cursor-pointer py-1.5"
          >
            Miservo
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            <CustomButton
              href="/Login"
              title="Register Now"
              className="hidden lg:inline-block"
            />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <Icon src={cancel} className="w-4 " />
            ) : (
              <Icon src={hemBurger} className="w-7 h-7 " />
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">
            {navList}
            <div className="flex items-center gap-x-1 ">
              <CustomButton href="/Login" title="Register Now" />
            </div>
          </div>
        </MobileNav>
      </Navbar>

      {/* Hero Section  */}
      <div className="border border-yellow-800 flex flex-wrap md:flex-nowrap m-4 rounded-lg">
        <div className="flex flex-col lg:basis-3/4 p-8 md:p-12 md:py-20 overflow-hidden">
          <h1 className="text-4xl sm:text-5xl font-bold ">Confidential Management</h1>
          <span className="flex items-center mt-4">
            <Image
              src="/images/home/righticon.png"
              width={140}
              height={0}
              alt="icon"
              className="h-4 hidden md:block"
            />
            <h1 className="text-4xl sm:text-5xl font-bold md:ml-14">Trusted Security</h1>
          </span>
          <div className="flex justify-end mt-5 xl:mr-24" >
            <Image
              src="/images/home/roundArrow.png"
              width={100}
              height={0}
              alt="icon"
              className="h-20 hidden lg:block  "
            />
          </div>
          <Image
            src="/images/home/hero.png"
            width={500}
            height={0}
            alt="icon"
            className="h-auto mt-7"
          />
        </div>
        <div className="flex flex-col md:basis-2/5 p-5 md:p-0">
          <div className="py-10 lg:p-20">
            <h2 className="text-2xl text-blue-900 md:text-3xl font-semibold">
              Miservo
            </h2>
            <p className="text-xs mt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
            <div className="flex justify-center md:justify-start mt-4">
              <CustomButton href="/" title="Get Started" />
            </div>
          </div>
          <div className="flex flex-col gap-5 py-5">
            {herosectionpints.map((item, index) => (
              <span key={index} className="flex gap-4 text-sm">
                <span className="text-yellow-800">&#10003;</span>
                <p>{item}</p>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* why Us  */}
      <div className="py-7 px-14">
        <h2 className="text-3xl font-semibold">
          Discover the Benefits of Protecting Your Sensitive <br /> Information
          with <span className="text-yellow-800">Miservo</span>
        </h2>
        <div className="flex justify-evenly flex-wrap lg:flex-nowrap">
          {Feature.map((data) => (
            <div className="flex flex-col mr-5 my-9" key={data.name}>
              <div className="flex items-center">
                <Image src={data.img} height={50} width={50} alt={data.name} />
                <p className="ml-2 font-semibold">{data.name}</p>
              </div>
              <p className="mt-2 text-sm">{data.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Register Now */}
      <div
        className="bg-cover bg-no-repeat h-auto md:h-[500px] py-20 px-4 lg:px-40"
        style={{
          backgroundImage: 'url("/images/home/subscribe-bg.png")',
        }}
      >
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mx-auto px-5">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Trust Your Legacy with Those Who Matter Most
            </h2>
            <h4 className="text-sm md:text-md mt-2 font-semibold text-blue-700">
              We never sell your personal data
            </h4>
            <p className="text-xs md:text-sm my-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <CustomButton href="/Login" title="Register Now" />
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/home/register.png"
              width={300}
              height={300}
              alt="Register"
              className="h-[200px] md:h-[300px] w-auto"
            />
          </div>
        </div>
      </div>

      {/* How Miservo works */}
      <div className="bg-gray-900 text-white py-16 px-4 lg:px-40">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          How <span className="text-yellow-800 font-bold">Miservo</span> works
        </h2>
        <p className="text-xs md:text-sm text-center my-7 w-[90%] md:w-[70%] mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled.
        </p>
        <div className="flex flex-col md:flex-row md:flex-nowrap gap-4 mx-auto justify-center">
          {WorksCard.map((data, index) => (
            <div
              key={index}
              className="border border-white p-4 rounded-lg w-full md:w-[30%]"
            >
              <div className="flex items-center text-lg font-semibold">
                <span className="text-4xl md:text-5xl font-extrabold italic mr-5 text-yellow-700">
                  {index + 1}
                </span>
                <span>{data.name}</span>
              </div>
              <p className="text-xs font-thin mt-5">{data.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-8">
          <CustomButton href="/" title="Get Started" />
        </div>
      </div>

      {/* forget Account */}
      <div className="mx-auto relative py-20 px-4 lg:px-40">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <Image
              src="/images/home/checkin.png"
              width={400}
              height={300}
              className="w-full md:w-[400px] h-auto rounded-lg"
              alt="Checkin"
            />
          </div>

          <div className="text-center md:text-left flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Don't Forget to Check In, Your Account Awaits
            </h2>
            <p className="text-xs mt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
            <div className="flex justify-center md:justify-start mt-4">
              <CustomButton href="/" title="Get Started" />
            </div>
          </div>
        </div>

        <Image
          src="/images/home/lock.png"
          width={150}
          height={150}
          className="absolute right-5 bottom-16 hidden xl:block"
          alt="Lock"
        />
      </div>

      {/* Subscribe Miservo */}
      <div
        className="bg-cover bg-no-repeat md:max-h-[600px] py-8 px-4 lg:px-40"
        style={{
          backgroundImage: 'url("/images/home/subscribe-bg.png")',
        }}
      >
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mx-auto">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Don't Forget to Check In, Your Account Awaits
            </h2>
            <p className="text-xs mt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
            <div className="flex gap-4 justify-center md:justify-start my-4">
              <Link
                href="/"
                className="bg-white px-5 rounded-md text-black text-xs font-bold flex items-center space-x-1"
              >
                <span className="text-green-800 text-2xl">&#8226;</span>
                <span>Monthly</span>
              </Link>
              <Link
                href="/"
                className="bg-white px-5 rounded-md text-black text-xs font-bold flex items-center space-x-1"
              >
                <span className="text-green-800 text-2xl">&#8226;</span>
                <span>Yearly</span>
              </Link>
            </div>
            <CustomButton href="/" title="Subscribe Now" />
          </div>
          <div className="flex-1 flex justify-center max-h-[460px]">
            <Image
              src="/images/home/subscribe-img.png"
              width={600}
              height={300}
              className="h-auto w-full object-contain	"
              alt="Subscribe"
            />
          </div>
        </div>
      </div>

      {/* frequently asked questions */}
      <div
        className="bg-cover py-12 md:h-[700px] text-white"
        style={{
          backgroundImage: 'url("/images/home/FAQ-bg.png")',
        }}
      >
        <div className="bg-[#724e01a6] mx-auto rounded-xl p-2 md:p-8 md:!m-8 min-h-[550px]  ">
          <h2 className="text-3xl font-semibold text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-center my-7 mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>

          {FAQ.map(
            (
              item,
              index // Destructure item to get heading and desc
            ) => (
              <div key={index} className="mt-5">
                <Button
                  onClick={() => toggleOpen(index)}
                  className="d-flex-between-y-center gap-4 w-full bg-white text-black capitalize"
                >
                  <span className="text-start">{item.heading}</span> <Icon src={plus} className="w-2.5" />
                </Button>
                <Collapse open={open === index}>
                  <Card className="mx-auto rounded-none">
                    <CardBody>
                      <Typography>{item.desc}</Typography>
                    </CardBody>
                  </Card>
                </Collapse>
              </div>
            )
          )}
        </div>
      </div>

      {/* Footer  */}
      <div className="bg-gray-900 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 py-16 px-6 md:px-10 flex-wrap md:flex-nowrap">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-yellow-800 mb-5 md:mb-7">
              Miservo
            </h1>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer scrambled it to make
              a type specimen book.
            </p>
          </div>
          <div className="flex-1">
            {FooterLinks.map((section, index) => (
              <NavigationLinks key={index} section={section} />
            ))}
          </div>
          <div className="flex-1">
            {FooterContactInfo.map((section, index) => (
              <NavigationLinks key={index} section={section} />
            ))}
          </div>
          <div className="flex-1">
            {FooterNewsletter.map((section, index) => (
              <NavigationLinks key={index} section={section} />
            ))}
            <div className="flex items-center border-b-[1px] p-2 mt-4 justify-between">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="bg-transparent text-xs focus:outline-none w-full"
              />
              <Icon src={mail} className="w-4 " />
            </div>
            <div className="flex gap-4 mt-5">
              <Link href="/">
                <Image
                  src="/images/home/icons/fb.png"
                  width={30}
                  height={30}
                  alt="Facebook"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/images/home/icons/twitter.png"
                  width={30}
                  height={30}
                  alt="Twitter"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/images/home/icons/youtube.png"
                  width={30}
                  height={30}
                  alt="YouTube"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/images/home/icons/insta.png"
                  width={30}
                  height={30}
                  alt="Instagram"
                />
              </Link>
            </div>
          </div>
        </div>

        <hr className="border-yellow-800 mx-6 md:mx-10 my-5" />

        <div className="px-6 md:px-10 pb-5 text-sm flex flex-col md:flex-row justify-between">
          <span>
            Copyright © 2024 <span className="text-yellow-800">Miservo</span>{" "}
            All Rights Reserved.
          </span>
          <div className="flex gap-5 md:gap-8 mt-4 md:mt-0">
            <span>Terms & Condition</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>

    </div>
  );
}
