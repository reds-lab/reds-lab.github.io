interface NewsItem {
  date: string;
  content: string;
}

const recentNews: NewsItem[] = [
  {
    date: "April 2025",
    content: "Our paper titled 'Data Shapley in One Training Run' got the <strong style=\"color: red;\">Outstanding Paper Honorable Mention</strong> at ICLR 2025!"
  },
  {
    date: "April 2025",
    content: "Yi and Si defended their thesis!"
  },
  {
    date: "March 2025",
    content: "Ruoxi received the Early Career Scholarly Impact Award!"
  },
  {
    date: "January 2025",
    content: "Congrats Yi for receiving the Blackwell Graduate Research Paper award!"
  },
  {
    date: "September 2024",
    content: "Our team HokieTokie is one of the 10 teams selected for the Amazon Trusted AI Challenge as a Model Developer. Congrats Yi, Tran, Adam, Mahavir, and Sanchit!"
  },
  {
    date: "September 2024",
    content: "Ruoxi is going to co-organize a tutorial at NeurIPS 2024 on \"<strong>Advancing Data Selection for Foundation Models: From Heuristics to Principled Method</strong>.\" Stay tuned!"
  },
  {
    date: "August 2024",
    content: "Our paper titled 'How Johnny Can Persuade LLMs to Jailbreak Them: Rethinking Persuasion to Challenge AI Safety by Humanizing LLMs' got the <strong style=\"color: red;\">Best Social Impact Paper Award</strong> at ACL 2024! Congrats Yi and co-authors!"
  },
  {
    date: "July 2024",
    content: "We are organizing the Trustworthy Interactive Decision-Making with Foundation Models Workshop at IJCAI 2024. It will be on August 3. Check out more details <a href='https://sites.google.com/view/ijcai24-tfm' target='_blank' rel='noopener noreferrer'>here</a>!"
  },
  {
    date: "May 2024",
    content: "We are organizing the Workshop on Navigating and Addressing Data Problems for Foundation Models at ICLR 2024. Check out more details <a href='https://sites.google.com/view/dpfm-iclr24/home?authuser=0' target='_blank' rel='noopener noreferrer'>here</a>!"
  },
  {
    date: "Apr 2024",
    content: "Ruoxi received the Outstanding New Assistant Professor Award!"
  },
  {
    date: "Dec 2023",
    content: "We are organizing the tutorial on Data Contribution Estimation for Machine Learning at NeurIPS, 2023! Check out the live stream and more details <a href='https://nips.cc/virtual/2023/tutorial/73959' target='_blank' rel='noopener noreferrer'>here</a>."
  },
  {
    date: "Oct 2023",
    content: "The New York Times compiled a story about our work 'Fine-tuning Aligned Language Models Compromises Safety, Even When Users Do Not Intend To!' Check it out <a href='https://www.nytimes.com/2023/10/19/technology/guardrails-artificial-intelligence-open-source.html' target='_blank' rel='noopener noreferrer'>here</a>!"
  },
  {
    date: "Feb 2023",
    content: "Ruoxi received the NSF CAREER award!"
  },
  {
    date: "Aug 2022",
    content: "Yi received the Amazon Fellowship!"
  }
];

export default recentNews;