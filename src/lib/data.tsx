import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

export const navbarItems = [
  { id: 1, label: "New & Notable", href: "" },
  { id: 2, label: "Gifts", href: "" },
  { id: 3, label: "Skin Care", href: "" },
  { id: 4, label: "Hand & Body", href: "" },
  { id: 5, label: "Home", href: "" },
  { id: 6, label: "Hair", href: "" },
  { id: 7, label: "Fragrance", href: "" },
  { id: 8, label: "Kits & Travel", href: "" },
  { id: 9, label: "Read", href: "" },
  { id: 10, label: "Stores", href: "" },
  { id: 11, label: "Facial Appointments", href: "" },
  { id: 12, isIcon: true },
  {
    subItems: [
      { id: 1, label: "Log in", href: "" },
      { id: 2, label: "Cabinet", href: "" },
      { id: 3, label: "Cart", href: "" },
    ],
  },
];

export const mobileNavbarItems = [
  { id: 2, isIcon: true, icon: <IoSearchSharp />, alt: "Global Search" },
  { id: 3, isIcon: true, icon: <FaRegHeart />, alt: "Favorites" },
  { id: 4, label: "Cart", href: "" },
];

export const heroPaginationItems = [
  {
    id: 1,
    isVideo: true,
    title: "Timely gifts",
    content:
      "With the festivities fast-approaching, explore a range of gifts fit for all manner of recipients, ready to deliver or collect in-store. ",
    videoUrl: "/videos/heroSlideOne.mp4",
    buttonLabel: "Discover more",
    href: "",
  },
  {
    id: 2,
    subTitle: "Online only",
    title: "Four bundles for hair, hands and home",
    content:
      "The Home Necessities Duo, Adventurer Hand Care Trio, Basin Essentials and Hair Care Duo are arranged in a gift box suitable for sending directly to recipients. Available exclusively on aesop.com.",
    imageUrl:
      "https://www.aesop.com/u1nb1km7t5q7/5vpNVK6wllBuslo8h5RxcK/f688f642e01df2150326d9f8b520ba3f/Aesop_Bundles_HK_2024_Web_Homepage_Primary_50-50_Desktop_1440x810px.jpg",
    buttonLabel: "Explore bundles",
    href: "",
  },
  {
    id: 3,
    subTitle: "Tokens of appreciation",
    title: "Corporate gifts",
    content:
      "Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery.",
    imageUrl:
      "https://www.aesop.com/u1nb1km7t5q7/1u7HJKpzglOvTtyRPTqQMm/5eaf79549a3692049b0692d8aca0d2f6/Aesop_Corporate_Gifting_AU_Web_Homepage_Secondary_50-50_Desktop_1440x1500px.jpg",
    buttonLabel: "Learn more about this service",
    href: "",
  },
];
