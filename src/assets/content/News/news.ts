interface NewsItem {
  date: string;
  content: string;
}

const recentNews: NewsItem[] = [
  {
    date: "September 2024",
    content: "Our 3 papers got accepted to NeurIPS, 2024: 'Fairness-Aware Meta-Learning via Nash Bargaining', 'Boosting Alignment for Post-Unlearning Text-to-Image Generative Models' and 'Compute-efficient LLM Training via Online Batch Selection'"
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
    date: "September 2024",
    content: "Our 3 papers got accepted to EMNLP, 2024: 'BEEAR: Embedding-based Adversarial Removal of Safety Backdoors in Instruction-tuned Language Models', 'FASTTRACK: Reliable Fact Tracing via Clustering and LLM-Powered Evidence Validation' and 'Can We Trust the Performance Evaluation of Uncertainty Estimation Methods in Text Summarization'"
  },
  {
    date: "August 2024",
    content: "Our paper titled 'How Johnny Can Persuade LLMs to Jailbreak Them: Rethinking Persuasion to Challenge AI Safety by Humanizing LLMs' got the <strong style=\"color: red;\">Best Social Impact Paper Award</strong> at ACL 2024! Congrats Yi and co-authors!"
  },
  {
    date: "August 2024",
    content: "Our paper titled 'Data Valuation in the Absence of a Reliable Validation Set' got accepted to TMLR 2024!"
  },
  {
    date: "July 2024",
    content: "We are organizing the Trustworthy Interactive Decision-Making with Foundation Models Workshop at IJCAI 2024. It will be on August 3. Check out more details <a href='https://sites.google.com/view/ijcai24-tfm' target='_blank' rel='noopener noreferrer'>here</a>!"
  },
  {
    date: "May 2024",
    content: "Our 2 papers got accepted to ACL, 2024: 'Decision Making via Multi-Stakeholder Alignment in LLMs' and 'How Johnny Can Persuade LLMs to Jailbreak Them: Rethinking Persuasion to Challenge AI Safety by Humanizing LLMs'"
  },
  {
    date: "May 2024",
    content: "Our 4 papers got accepted to ICML, 2024: 'Rethinking Data Shapley for Data Selection Tasks: Misleads and Merits', 'RigorLLM: Resilient Guardrails for Large Language Models against Undesired Content', 'A Safe Harbor for AI Evaluation and Red Teaming', and 'Algorithm of Thoughts: Enhancing Exploration of Ideas in Large Language Models'"
  },
  {
    date: "May 2024",
    content: "Our paper titled 'Learning to Rank for Active Learning via Multi-Task Bilevel Optimization' got accepted to UAI, 2024!"
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
    date: "Feb 2024",
    content: "Our paper titled 'The Mirrored Influence Hypothesis: Efficient Data Influence Estimation by Harnessing Forward Passes' got accepted to CVPR, 2024!"
  },
  {
    date: "Jan 2024",
    content: "Our paper titled 'Efficient Data Valuation for Weighted Nearest Neighbor Algorithms' got accepted to AISTATS, 2024"
  },
  {
    date: "Jan 2024",
    content: "Our 2 papers got accepted to ICLR, 2024: 'Get more for less: Principled Data Selection for Warming Up Fine-Tuning in LLMs' and 'Fine-tuning Aligned Language Models Compromises Safety, Even When Users Do Not Intend To!'"
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