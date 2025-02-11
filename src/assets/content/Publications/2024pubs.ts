const publications = [
    {
      title: "Data-Centric Defense: Shaping Loss Landscape with Augmentations to Counter Model Inversion",
      authors: "Si Chen, Feiyang Kang, Nikhil Abhyankar, Ming Jin, Ruoxi Jia",
      conference: "Transactions on Machine Learning Research (TMLR), 2024",
      openreview: "https://openreview.net/forum?id=VqzKim4Pd0",
      highlights: []
    },
    {
      title: "Fairness-Aware Meta-Learning via Nash Bargaining",
      authors: "Yi Zeng, Xuelin Yang, Li Chen, Cristian Canton Ferrer, Ming Jin, Michael Jordan, Ruoxi Jia",
      conference: "Conference on Neural Information Processing Systems (NeurIPS), 2024",
      arxiv: "https://arxiv.org/abs/2406.07029",
      highlights: []
    },
    {
      title: "Boosting Alignment for Post-Unlearning Text-to-Image Generative Models",
      authors: "Myeongseob Ko, Henry Li, Zhun Wang, Jonathan Patsenker, Jiachen T. Wang, Qinbin Li, Ming Jin, Dawn Song, Ruoxi Jia",
      conference: "Conference on Neural Information Processing Systems (NeurIPS), 2024",
      arxiv: "",
      highlights: []
    },
    {
      title: "Compute-efficient LLM Training via Online Batch Selection",
      authors: "Jiachen T. Wang, Tong Wu, Dawn Song, Prateek Mittal, Ruoxi Jia",
      conference: "Conference on Neural Information Processing Systems (NeurIPS), 2024",
      arxiv: "",
      highlights: ["Spotlight presentation"]
    },
    {
      title: "BEEAR: Embedding-based Adversarial Removal of Safety Backdoors in Instruction-tuned Language Models",
      authors: "Yi Zeng, Weiyu Sun, Tran Ngoc Huynh, Dawn Song, Bo Li, Ruoxi Jia",
      conference: "Conference on Empirical Methods in Natural Language Processing (EMNLP), 2024",
      arxiv: "https://arxiv.org/pdf/2406.17092"
    },
    {
      title: "FASTTRACK: Reliable Fact Tracing via Clustering and LLM-Powered Evidence Validation",
      authors: "Si Chen, Feiyang Kang, Ning Yu, Ruoxi Jia",
      conference: "Empirical Methods in Natural Language Processing (EMNLP) Findings, 2024",
      arxiv: "https://arxiv.org/pdf/2404.15157"
    },
    {
      title: "Can We Trust the Performance Evaluation of Uncertainty Estimation Methods in Text Summarization?",
      authors: "Jianfeng He, Runing Yang, Linlin Yu, Changbin Li, Ruoxi Jia, Feng Chen, Ming Jin, Chang-Tien Lu",
      conference: "Conference on Empirical Methods in Natural Language Processing (EMNLP), 2024",
      arxiv: "https://arxiv.org/pdf/2406.17274"
    },
    {
      title: "Data Valuation in the Absence of a Reliable Validation Set",
      authors: "Himanshu Jahagirdar, Jiachen T. Wang, Ruoxi Jia",
      conference: "Transactions on Machine Learning Research 2024",
      openreview: "https://openreview.net/forum?id=xBORyL316c&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3DTMLR%2FAuthors%23your-submissions)"
    },
    {
      title: "Skin-in-the-Game: Decision Making via Multi-Stakeholder Alignment in LLMs",
      authors: "Bilgehan Sel, Priya Shanmugasundaram, Mohammad Kachuee, Kun Zhou, Ruoxi Jia, Ming Jin",
      conference: "Annual Meeting of the Association for Computational Linguistics (ACL), 2024",
      arxiv: "https://arxiv.org/abs/2405.12933",
      highlights: []
    },
    {
      title: "How Johnny Can Persuade LLMs to Jailbreak Them: Rethinking Persuasion to Challenge AI Safety by Humanizing LLMs",
      authors: "Yi Zeng, Hongpeng Lin, Jingwen Zhang, Diyi Yang, Ruoxi Jia, Weiyan Shi",
      conference: "Annual Meeting of the Association for Computational Linguistics (ACL), 2024",
      arxiv: "https://arxiv.org/abs/2401.06373",
      highlights: ["Best Social Impact Paper Award"]
    },
    {
      title: "Rethinking Data Shapley for Data Selection Tasks: Misleads and Merits",
      authors: "Jiachen T. Wang, Tianji Yang, James Zou, Yongchan Kwon, Ruoxi Jia",
      conference: "International Conference on Machine Learning (ICML), 2024",
      arxiv: "https://arxiv.org/abs/2405.03875",
      highlights: ["Oral presentation"]
    },
    {
      title: "RigorLLM: Resilient Guardrails for Large Language Models against Undesired Content",
      authors: "Zhuowen Yuan, Zidi Xiong, Yi Zeng, Ning Yu, Ruoxi Jia, Dawn Song, Bo Li",
      conference: "International Conference on Machine Learning (ICML), 2024",
      arxiv: "https://arxiv.org/abs/2403.13031",
      highlights: []
    },
    {
      title: "A Safe Harbor for AI Evaluation and Red Teaming",
      authors: "Shayne Longpre, Sayash Kapoor, Kevin Klyman, Ashwin Ramaswami, Rishi Bommasani, Borhane Blili-Hamelin, Yangsibo Huang, Aviya Skowron, Zheng-Xin Yong, Suhas Kotha, Yi Zeng, Weiyan Shi, Xianjun Yang, Reid Southen, Alexander Robey, Patrick Chao, Diyi Yang, Ruoxi Jia, Daniel Kang, Sandy Pentland, Arvind Narayanan, Percy Liang, Peter Henderson",
      conference: "International Conference on Machine Learning (ICML), 2024",
      arxiv: "https://arxiv.org/abs/2403.04893",
      highlights: ["Oral presentation"]
    },
    {
      title: "Algorithm of Thoughts: Enhancing Exploration of Ideas in Large Language Models",
      authors: "Bilgehan Sel, Ahmad Al-Tawaha, Vanshaj Khattar, Ruoxi Jia, Ming Jin",
      conference: "International Conference on Machine Learning (ICML), 2024",
      arxiv: "https://arxiv.org/abs/2308.10379",
      highlights: []
    },
    {
      title: "Learning to Rank for Active Learning via Multi-Task Bilevel Optimization",
      authors: "Zixin Ding, Si Chen, Ruoxi Jia, Yuxin Chen",
      conference: "Conference on Uncertainty in Artificial Intelligence (UAI), 2024",
      arxiv: "https://arxiv.org/abs/2310.17044",
      highlights: []
    },
    {
      title: "The Mirrored Influence Hypothesis: Efficient Data Influence Estimation by Harnessing Forward Passes",
      authors: "Myeongseob Ko, Feiyang Kang, Weiyan Shi, Ming Jin, Zhou Yu, Ruoxi Jia",
      conference: "Conference on Computer Vision and Pattern Recognition (CVPR), 2024",
      arxiv: "https://arxiv.org/abs/2402.08922v1",
      highlights: []
    },
    {
      title: "Efficient Data Valuation for Weighted Nearest Neighbor Algorithms",
      authors: "Jiachen Wang, Prateek Mittal, Ruoxi Jia",
      conference: "International Conference on Artificial Intelligence and Statistics (AISTATS), 2024",
      arxiv: "https://arxiv.org/abs/2401.11103",
      highlights: ["Oral presentation"]
    },
    {
      title: "Get more for less: Principled Data Selection for Warming Up Fine-Tuning in LLMs",
      authors: "Feiyang Kang, Hoang Anh Just*, Yifan Sun*, Himanshu Jahagirdar*, Yuanzhi Zhang, Rongxing Du, Anit Kumar Sahu, Ruoxi Jia",
      conference: "International Conference on Learning Representations (ICLR), 2024",
      openreview: "https://openreview.net/forum?id=QmYNBVukex&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3DICLR.cc%2F2024%2FConference%2FAuthors%23your-submissions)",
      highlights: []
    },
    {
        title: "Fine-tuning Aligned Language Models Compromises Safety, Even When Users Do Not Intend To!",
        authors: "Xiangyu Qi*, Yi Zeng*, Tinghao Xie*, Pin-Yu Chen, Ruoxi Jia, Prateek Mittal, Peter Henderson",
        conference: "International Conference on Learning Representations (ICLR), 2024",
        openreview: "https://openreview.net/forum?id=hTEGyKf0dZ&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3DICLR.cc%2F2024%2FConference%2FAuthors%23your-submissions)",
        highlights: [
          "Oral presentation",
          "Featured in the <a href=\"https://www.nytimes.com/2023/10/19/technology/guardrails-artificial-intelligence-open-source.html\">New York Times</a>"
        ]
    }
    ];
    
    export default publications;