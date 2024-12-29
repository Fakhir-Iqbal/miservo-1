import React from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Drawer,
  Card,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  beneficiary,
  assets,
  attorney,
  setting,
  terms,
  privacyPolicy,
  support,
  logout,
  hemBurger,
  cancel,
} from "@root/icons";
import Icon from "./Icon";
import Link from "next/link";

export function SidebarWithBurgerMenu() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  // Define the top navigation items
  const topItems = [
    {
      title: "Beneficiaries",
      icon: <Icon src={beneficiary} className="w-5" />,
      link: '/Beneficiaries'
    },
    { title: "Assets", icon: <Icon src={assets} className="w-5" />,link: '/Assets' },
    { title: "Attorney", icon: <Icon src={attorney} className="w-5" />,link: '/Attorney' },
    { title: "Settings", icon: <Icon src={setting} className="w-5" />,link: '/Setting' },
  ];

  // Define the bottom navigation items
  const bottomItems = [
    { title: "Terms of Use", icon: <Icon src={terms} className="w-5" />,link: '/TermsOfUse' },
    {
      title: "Privacy Policy",
      icon: <Icon src={privacyPolicy} className="w-5" />,
      link: '/PrivacyPolicy'
    },
    { title: "Support", icon: <Icon src={support} className="w-5" />,link: '/HelpSupport' },
    { title: "Log Out", icon: <Icon src={logout} className="w-5" />,link: '/LogOut' },
  ];

  return (
    <>
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <Icon src={cancel} className="w-5" />
        ) : (
          <Icon src={hemBurger} className="w-32 h-full" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer} className="bg-gray-900">
        <Card
          color="transparent"
          shadow={false}
          className="flex flex-col h-[calc(100vh-2rem)] w-full p-4"
        >
          <button onClick={closeDrawer} className="flex justify-end text-white">
            <XMarkIcon className="h-8 w-8 stroke-2" />
          </button>
          <List className="flex-grow">
            <h1 className="text-3xl text-yellow-800 py-5 font-bold">
              {" "}
              MISERVO{" "}
            </h1>
            {/* Top items */}
            {topItems.map((item, index) => (
              <Link href={item.link} >
                <ListItem key={index} className="p-2.5">
                <ListItemPrefix>{item.icon}</ListItemPrefix>
                <Typography className="text-gray-100 ">{item.title}</Typography>
              </ListItem>
              </Link>
            ))}

            <hr className="my-2 border-blue-gray-50 mt-16" />
          </List>

          <List>
            {bottomItems.map((item, index) => (
              <Link href={item.link}>
                <ListItem key={index} className="p-2.5 item-center">
                <ListItemPrefix>{item.icon}</ListItemPrefix>
                <Typography className="text-gray-100">{item.title}</Typography>
              </ListItem>
              </Link>
            ))}
          </List>
        </Card>
      </Drawer>
    </>
  );
}
