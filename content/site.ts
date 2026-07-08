import {
  Baby,
  BookOpen,
  BriefcaseBusiness,
  Church,
  Globe2,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Megaphone,
  Sprout,
  UsersRound
} from "lucide-react";

export const church = {
  name: "Malaysia Discipleship Centre",
  purpose: "Our call is to make disciples and disciple makers.",
  description:
    "We believe God called us as a body to worship Him and be on mission with Him, in Malaysia and beyond.",
  identity:
    "An evangelical, non-denominational and independent church that seeks to multiply disciples by the enabling of the Holy Spirit.",
  registration: "Registered with the National Evangelical Christian Fellowship, Malaysia.",
  address:
    "18, Jalan Teknologi 3/4, PJU 5, Kota Damansara, 47810, Petaling Jaya, Selangor, Malaysia",
  email: "mdc.mys@gmail.com"
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Beliefs", href: "#beliefs" },
  { label: "Mission and Strategy", href: "#mission-strategy" },
  { label: "Discipling Ministry and Missions", href: "#discipling" },
  { label: "Ministries", href: "#ministries" }
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
    title: "Seniors Fellowship",
    time: "Every Saturday, 1:30pm",
    detail: "Online",
    icon: HeartHandshake
  }
];

export const faithStatements = [
  "WE BELIEVE that both Old and New Testaments constitute the divinely inspired Word of God, inerrant in the originals.",
  "WE BELIEVE in one God existing eternally in three Persons, Father, Son and Holy Spirit.",
  "WE BELIEVE that the Lord Jesus Christ, the Son of God, became man without ceasing to be God, in order that He might reveal God and redeem sinful men.",
  "WE BELIEVE that the Holy Spirit came forth from the Father and the Son to convict the world of sin, of righteousness and of judgement and to regenerate, sanctify, comfort, and seal those who believe in Jesus Christ, and to empower them to use spiritual gifts for the carrying out of the work of the Lord Jesus Christ.",
  "WE BELIEVE that man is totally depraved in that of himself he is utterly unable to remedy his lost condition.",
  "WE BELIEVE that salvation of man's eternal being is the gift of God brought to man by grace and received by personal faith in the Lord Jesus Christ, whose atoning blood was shed on the cross for the forgiveness of sins.",
  "WE BELIEVE in the baptism by water of believers, symbolising the believer's union in the death and resurrection of Jesus Christ.",
  "WE BELIEVE in the observance of the Lord's Supper, commemorating the sacrifice of our Saviour for all mankind.",
  "WE BELIEVE the life of the believer is to be separate from worldliness by consistent conduct before God and man, and is to be in the world as life-giving light.",
  "WE BELIEVE in the personal, visible, bodily and imminent return of the Lord Jesus Christ, and that His second advent is essential to the fulfilment of God's plan for this age."
];

export const ministries = [
  {
    title: "Worship Service",
    description:
      "As a body we acknowledge God's kingship and sovereign rule and glorify Him in worship. The preached Word of God instructs the church in sound doctrine and application, leading to spiritual transformation, gospel proclamation and mission.",
    icon: Church
  },
  {
    title: "Children's Ministry",
    description:
      "Supporting parents as the primary disciplers of their children, laying the early foundation of faith through the Word of God and cultivating character and compassion.",
    icon: Baby
  },
  {
    title: "Youth Ministry",
    description:
      "Helping youths grow holistically to become lifelong followers of Christ and future leaders by grounding them in the Word of God.",
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
      "Encouraging seniors to live purposefully in discipleship and be connected with community, while receiving pastoral care.",
    icon: HandHeart
  }
];

export const missionStrategy = [
  {
    title: "Evangelism",
    description: "To the unsaved in the world.",
    icon: Megaphone
  },
  {
    title: "Teaching",
    description: "Every believer to become a Christlike disciple.",
    icon: BookOpen
  },
  {
    title: "Training",
    description: "Equipping every disciple to be a disciple maker.",
    icon: GraduationCap
  },
  {
    title: "Transmitting",
    description:
      "Transmitting the vision of the discipling ministry so the disciple maker becomes a servant leader.",
    icon: Globe2
  }
];

export const disciplingMaterials = [
  "Basics of the Christian Life",
  "Towards Christian Maturity",
  "Go Make Disciples the Master's Way"
];
