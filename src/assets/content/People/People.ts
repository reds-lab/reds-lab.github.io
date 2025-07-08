import ruoxiJiaImage from "./profile/ruoxi jia.png";
import yiZengImage from "./profile/yi zeng.png";
import siChenImage from "./profile/si chen.png";
import myeongseobKoImage from "./profile/myeongseob ko.png";
import hoangJustImage from "./profile/hoang just.png";
import feiyangKangImage from "./profile/feiyang kang.png";
import mahavirDabasImage from "./profile/mahavir dabas.png";
import adamNguyenImage from "./profile/adam nguyen.png";
import minzhouPanImage from "./profile/minzhou pan.png";
import tranHuynhImage from "./profile/tran huynh.png";
import himanshuJahagirdaranImage from "./profile/himanshu jahagirdaran.png";
import nikhilAbhyankarImage from "./profile/nikhil abhyankar.png";
import jiachenWangImage from "./profile/jiachen wang.png";
import qianWangImage from "./profile/qian wang.jpg";
interface Links {
  website?: string;
  github?: string;
  googleScholar?: string;
  linkedin?: string;
  twitter?: string;
}

interface Person {
  profileImage: string;
  name: string;
  details: string;
  links: Links;
}

interface PeopleGroup {
  title: string;
  people: Person[];
}

export const peopleData: PeopleGroup[] = [
  {
    title: "Faculty Members",
    people: [
      {
        profileImage: ruoxiJiaImage,
        name: "Ruoxi Jia",
        details: "Ruoxi is an Assistant Professor in the Electrical and Computer Engineering Department. Her work focuses on designing data and learning techniques to make AI systems more efficient and reliable. The applications span from natural language processing, computer vision, recommendation systems, to critical societal infrastructure.",
        links: {
          website: "https://ruoxijia.com",
          github: "https://github.com/ruoxijia",
          googleScholar: "https://scholar.google.com/citations?user=abc123",
          linkedin: "https://www.linkedin.com/in/ruoxi-jia",
          twitter: "https://twitter.com/ruoxijia"
        }
      }
    ]
  },
  
  {
    title: "PhD Students",
    people: [
      {
        profileImage: myeongseobKoImage,
        name: "Myeongseob Ko",
        details: "Myeongseob's research focuses on broad machine learning problems, with a particular emphasis on privacy and a data-centric perspective, aiming ultimately to develop AI systems that interact more effectively and beneficially with humanity.",
        links: {
          linkedin: "https://www.linkedin.com/in/myeongseob-ko-a87325175/",
          twitter: "https://twitter.com/KoMyeongseob"
        }
      },
      {
        profileImage: hoangJustImage,
        name: "Hoang Anh Just",
        details: "Hoang's research focuses on data-centric AI, especially on the importance of quality of data on the model's reasoning and understanding.",
        links: {
          website: "https://www.justhoanganh.com/",
          linkedin: "https://www.linkedin.com/in/justhoanganh/",
          twitter: "https://twitter.com/reds_tiger"
        }
      },
      {
        profileImage: feiyangKangImage,
        name: "Feiyang Kang",
        details: "Feiyang's research interests lie in data problems (data valuation, data selection/curation, scaling laws, data influence, Optimal Transport), attribution, interpretability, etc. with applications in LLMs/foundation models, vision applications, and multimodal models.",
        links: {
          linkedin: "https://www.linkedin.com/in/fykang/",
          twitter: "https://twitter.com/feiyang_ml"
        }
      },
      {
        profileImage: tranHuynhImage,
        name: "Tran Huynh",
        details: "Tran's research focuses on understanding the vulnerabilities of AI models and advancing the robustness of AI systems against adversarial threats.",
        links: {}
      },
      {
        profileImage: mahavirDabasImage,
        name: "Mahavir Dabas",
        details: "Mahavir's research focuses on Large Language Models, Reinforcement Learning, Cognitive Modeling and AI safety.",
        links: {
          github: "https://github.com/MahavirDabas18",
          googleScholar: "https://scholar.google.com/citations?hl=en&authuser=2&user=Av9MILkAAAAJ",
          linkedin: "https://www.linkedin.com/in/mahavir-dabas-8b920a191/"
        }
      }
    ]
  },
  {
    title: "Undergraduate Students",
    people: [
      {
        profileImage: adamNguyenImage,
        name: "Adam Nguyen",
        details: "Adam is an undergraduate student in the Computer Science department. He is interested in exploring the applications of AI in real-world scenarios.",
        links: {}
      }
    ]
  },
  {
    title: "Past Alumni",
    people: [
      {
        profileImage: yiZengImage,
        name: "Yi Zeng",
        details: "Ph.D. student, 2021-2025. (Next: TikTok)",
        links: {googleScholar: "https://scholar.google.com/citations?user=slUNmHQAAAAJ&hl=en"}
      },
      {
        profileImage: siChenImage,
        name: "Si Chen",
        details: "Ph.D. student, 2020-2025. (Next: Salesforce)",
        links: {googleScholar: "https://scholar.google.com/citations?hl=en&user=pJvSiBgAAAAJ"}
      },
      {
        profileImage: minzhouPanImage,
        name: "Minzhou Pan",
        details: "Undergraduate student, 2021-2022. (Next: PhD student at Northeastern University)",
        links: {}
      },
      {
        profileImage: himanshuJahagirdaranImage,
        name: "Himanshu Jahagirdar",
        details: "MS student, 2022-2023. (Next: Data scientist at the Washington Post)",
        links: {}
      },
      {
        profileImage: nikhilAbhyankarImage,
        name: "Nikhil Abhyankar",
        details: "MS student, 2022-2023. (Next: PhD student at Virginia Tech)",
        links: {
          website: "https://nikhilsab.github.io/",
          linkedin: "https://www.linkedin.com/in/nikhil-abhyanksar/"
        }
      }
    ]
  },
  {
    title: "Visiting Scholar",
    people: [{
      profileImage: jiachenWangImage,
      name: "Jiachen T. Wang",
      details: "Jiachen is a third-year Ph.D. student at Princeton University, working closely with Prof. Ruoxi Jia at Virginia Tech. His research focuses on responsible machine learning, particularly data valuation in foundation models, using statistical and game theory approaches.",
      links: {
        website: "https://tianhaowang.netlify.app/"
      }},
      {
        profileImage: qianWangImage,
        name: "Qian Wang",
        details: "Qian is a fourth-year Ph.D. student at Huazhong University of Science and Technology, working closely with Prof. Ruoxi Jia at Virginia Tech. His research focuses on computer vision, particularly video generation, visual security, and AI agents.",
        links: {
        }
    }]
    },
];