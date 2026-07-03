import {
  Baby,
  BookOpen,
  BriefcaseBusiness,
  Church,
  Compass,
  Globe2,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Mail,
  MapPin,
  Sprout,
  UsersRound
} from "lucide-react";

export const church = {
  name: "Malaysia Discipleship Centre",
  purpose: "We purpose to make disciples and disciple makers.",
  description:
    "We purpose as a church to worship God and be on mission with Him, in obedience to the Great Commission, in Malaysia and beyond.",
  identity:
    "MDC is a non-denominational, independent, evangelical, Christ-centred and Word-centred church that seeks to multiply churches.",
  registration: "Registered under the National Evangelical Christian Fellowship Malaysia.",
  address:
    "18, Jalan Teknologi 3/4, PJU 5, Kota Damansara, 47810, Petaling Jaya, Selangor, Malaysia",
  email: "mdc.mys@gmail.com"
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Beliefs", href: "#beliefs" },
  { label: "Ministries", href: "#ministries" },
  { label: "Visit", href: "#visit" },
  { label: "Contact", href: "#contact" }
];

export const serviceTimes = [
  {
    title: "Sunday Worship Service",
    time: "Every Sunday, 8:45am",
    detail: "Language: English",
    icon: Church
  },
  {
    title: "Youth Fellowship",
    time: "Every Saturday, 3:00pm",
    detail: "Growing together in Christ",
    icon: UsersRound
  },
  {
    title: "Church School",
    time: "Every Saturday, 3:00pm",
    detail: "Word-centred formation for children",
    icon: GraduationCap
  },
  {
    title: "Chinese Fellowship",
    time: "Every Saturday, 1:30pm",
    detail: "Online",
    icon: HeartHandshake
  }
];

export const faithStatements = [
  "Both Old and New Testaments constitute the divinely inspired Word of God, inerrant in the originals.",
  "There is one God existing eternally in three Persons: Father, Son and Holy Spirit.",
  "The Lord Jesus Christ, the Son of God, became man without ceasing to be God, to reveal God and redeem sinful men.",
  "The Holy Spirit convicts, regenerates, sanctifies, comforts, seals believers, and empowers them for the work of Christ.",
  "Humanity is unable to remedy its lost condition apart from God.",
  "Salvation is God's gift, brought by grace and received through personal faith in the Lord Jesus Christ.",
  "Believer's baptism by water symbolises union with Christ in His death and resurrection.",
  "The Lord's Supper commemorates the sacrifice of our Saviour.",
  "The believer is called to holy conduct before God and man, and to be life-giving light in the world.",
  "The Lord Jesus Christ will return personally, visibly, bodily, and imminently."
];

export const ministries = [
  {
    title: "Children's Ministry",
    description:
      "Supporting parents as the primary disciplers of their children and helping children know God personally through the Word of God, character, compassion, and service.",
    icon: Baby
  },
  {
    title: "Youth Ministry",
    description:
      "Helping youths grow spiritually, physically, intellectually, emotionally, and socially, grounded in the Word of God.",
    icon: Sprout
  },
  {
    title: "Young Working Adults",
    description:
      "Providing Christ-centred community, discipleship, and support for individuals navigating career, relationships, and life transitions.",
    icon: BriefcaseBusiness
  },
  {
    title: "Chinese Seniors Fellowship",
    description:
      "Encouraging seniors to live purposefully, receive pastoral care, stay connected in community, and continue exercising godly influence.",
    icon: HandHeart
  }
];

export const missionFocus = [
  {
    title: "Disciple Making",
    description:
      "Helping believers follow Christ, grow in Christlike character, obey His commands, and multiply by discipling others.",
    icon: BookOpen
  },
  {
    title: "Missions",
    description:
      "Working with churches and organisations to promote the biblical basis and framework of disciple making in Malaysia and beyond.",
    icon: Globe2
  }
];

export const visitSteps = [
  {
    title: "Come for worship",
    description: "Join the English Sunday Worship Service at 8:45am.",
    icon: Compass
  },
  {
    title: "Find us in Kota Damansara",
    description: church.address,
    icon: MapPin
  },
  {
    title: "Send an enquiry",
    description: "Ask about worship, ministries, disciple making, missions, or visiting with your family.",
    icon: Mail
  }
];

export const enquiryTypes = [
  "Worship Visit",
  "Children's Ministry",
  "Youth Fellowship",
  "Church School",
  "Chinese Fellowship",
  "Disciple Making",
  "Missions",
  "General Enquiry"
];
