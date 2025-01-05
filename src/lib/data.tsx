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

export const aromaSection = [
  {
    id: 1,
    title: "Six aromatic encounters",
    content:
      "Fragrance Anthology Volume I invites curious noses to explore and experience our range of unorthodox aromas, from the fresh to the floral, the woody and the opulent.",
    imgUrl:
      "https://www.aesop.com/u1nb1km7t5q7/UNC2CaQtqARmMN0LO9DCc/bb34ebc74d72ea79ce7f7f7d0dac4ebc/Aesop_Fragrance_Anthology_Volume_I_Web_Homepage_Secondary_Mid_Desktop_2560x1440px.jpg",
  },
  {
    id: 2,
    title: "Home gifts",
    content:
      "From hand care to home fragrances, explore a curation of products that are ideal for hospitable hosts, the house-proud or the recently moved in.",
    videoUrl:
      "https://videos.ctfassets.net/u1nb1km7t5q7/6zoc46Ksxu0R9C0Xc6LaCn/9f5ac4f239da5914926b403fae67d4f2/Aesop_Gift_Kits_2024-25_Web_Homepage_Secondary_Gifts_for_Home_1920x1080px.mp4.mp4",
  },
];

export const PodiumData = [
  {
    id: 1,
    imgUrl:
      "https://www.aesop.com/u1nb1km7t5q7/6zG3G1hBdkLebFmYxmJR6X/04908764c522b4da6f88d8cd6b690536/Aesop_Bundles_Festive_Bundles_GL_2024_Hand_Balm_Trio_Web_Front_Large_1800X1093px.png",
    title: "Aromatique Hand Balm Trio",
    content: "Three hydrating hand balms, unique in aroma",
  },
  {
    id: 2,
    imgUrl:
      "https://www.aesop.com/u1nb1km7t5q7/gK70UK0cUqX2HjWYYEADL/5bb0fa22d0433792cac699241bbfaeae/Aesop_Home_Ptolemy_Aromatique_Candle_Web_Front_Large_1800x1573px.png",
    title: "Ptolemy Aromatique Candle",
    content: "A sensuous blend of leather, smoke and wood",
  },
  {
    id: 3,
    imgUrl:
      "https://www.aesop.com/u1nb1km7t5q7/49zAX8areSn5M6MzW8VgU6/cd59141080e11df31ca99a148ac94d49/Aesop_Kits_Reverence_Duet_Web_Front_A_Large_1800x1093px.png",
    title: "Reverence Duet",
    content: "A sumptuous pairing for hands",
  },
  {
    id: 4,
    imgUrl:
      "https://www.aesop.com/u1nb1km7t5q7/3t4Pw4CMMF5ULshh61MaYK/e3b85a9c802815533f1b70664aa6c5d6/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Front_Large_900x878px.png",
    title: "Lucent Facial Concentrate",
    content: "A Vitamin C-rich layering serum",
  },
  {
    id: 5,
    imgUrl:
      "https://www.aesop.com/u1nb1km7t5q7/6XK2lvnK9rno0Keq5zyYVB/b9f6917829d091f3ea55b207b3138f8b/Aesop_Home_Bronze_Incense_Holder_Web_Front_A_Large_1800x752px.png",
    title: "Bronze Incense Holder",
    content: "Suited to any interior",
  },
];
