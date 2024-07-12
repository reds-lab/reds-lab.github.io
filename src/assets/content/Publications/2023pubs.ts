const publications = [
    {
      title: "Performance Scaling via Optimal Transport: Enabling Data Selection from Partially Revealed Sources",
      authors: "Feiyang Kang*, Hoang Anh Just*, Anit Kumar Sahu, Ruoxi Jia",
      conference: "Conference on Neural Information Processing Systems (NeurIPS), 2023",
      arxiv: "https://arxiv.org/abs/2307.02460",
      highlights: ["Adopted by Amazon for data selection"]
    },
    {
      title: "Threshold KNN-Shapley: A Linear-Time and Privacy-Friendly Approach to Data Valuation",
      authors: "Jiachen T. Wang, Yuqing Zhu, Yu-Xiang Wang, Ruoxi Jia, Prateek Mittal",
      conference: "Conference on Neural Information Processing Systems (NeurIPS), 2023",
      arxiv: "https://arxiv.org/abs/2308.15709",
      highlights: ["Spotlight presentation"]
    },
    {
      title: "A Randomized Approach for Tight Privacy Accounting",
      authors: "Jiachen T. Wang, Saeed Mahloujifar, Tong Wu, Ruoxi Jia, Prateek Mittal",
      conference: "Conference on Neural Information Processing Systems (NeurIPS), 2023",
      arxiv: "https://arxiv.org/abs/2304.07927",
      highlights: []
    },
    {
      title: "Practical Membership Inference Attacks Against Large-Scale Multi-Modal Models: A Pilot Study",
      authors: "Myeongseob Ko, Ming Jin, Chenguang Wang, Ruoxi Jia",
      conference: "International Conference on Computer Vision (ICCV), 2023",
      highlights: []
    },
    {
      title: "One-Round Active Learning through Data Utility Learning and Proxy Models",
      authors: "Jiachen T. Wang, Si Chen, Ruoxi Jia",
      conference: "Transactions on Machine Learning Research, 2023",
      openreview: "https://openreview.net/forum?id=8HQCOMRa7g",
      highlights: []
    },
    {
      title: "Turning a Curse into a Blessing: Enabling In-Distribution-Data-Free Backdoor Removal via Stabilized Model Inversion",
      authors: "Si Chen, Yi Zeng, Won Park, Jiachen T. Wang, Xun Chen, Lingjuan Lyu, Zhuoqing Mao, Ruoxi Jia",
      conference: "Transactions on Machine Learning Research, 2023",
      openreview: "https://openreview.net/forum?id=P880C39xAvM",
      highlights: []
    },
    {
      title: "PrivMon: A Stream-Based System for Real-Time Privacy Attack Detection for Machine Learning Models",
      authors: "Myeongseob Ko*, Xinyu Yang*, Zhengjie Ji, Hoang Anh Just, Peng Gao, Anoop Kumar, Ruoxi Jia",
      conference: "International Symposium on Research in Attacks, Intrusions, and Defenses (RAID), 2023",
      highlights: []
    },
    {
      title: "ASSET: Robust Backdoor Data Detection Across a Multiplicity of Deep Learning Paradigms",
      authors: "Minzhou Pan*, Yi Zeng*, Lingjuan Lyu, Xue Lin, Ruoxi Jia",
      conference: "USENIX Security, 2023",
      arxiv: "https://arxiv.org/abs/2302.11408",
      highlights: []
    },
    {
      title: "Narcissus: A Practical Clean-Label Backdoor Attack with Limited Information",
      authors: "Yi Zeng*, Minzhou Pan*, Hoang Anh Just, Lingjuan Lyu, Meikang Qiu, Ruoxi Jia",
      conference: "ACM Conference on Computer and Communications Security (CCS), 2023",
      arxiv: "https://arxiv.org/abs/2204.05255",
      highlights: []
    },
    {
      title: "2D-Shapley: A Framework for Fragmented Data Valuation",
      authors: "Liu Zhihong*, Hoang Anh Just*, Xiangyu Chang, Xi Chen, Ruoxi Jia",
      conference: "International Conference on Machine Learning (ICML), 2023",
      arxiv: "https://arxiv.org/abs/2306.10473",
      highlights: []
    },
    {
      title: "Revisiting Data-Free Knowledge Distillation with Poisoned Teachers",
      authors: "Junyuan Hong*, Yi Zeng*, Shuyang Yu, Lingjuan Lyu, Ruoxi Jia, Jiayu Zhou",
      conference: "International Conference on Machine Learning (ICML), 2023",
      arxiv: "https://arxiv.org/abs/2306.02368",
      highlights: []
    },
    {
      title: "How to Sift Out a Clean Data Subset in the Presence of Data Poisoning?",
      authors: "Yi Zeng*, Minzhou Pan*, Himanshu Jahagirdar, Ming Jin, Lingjuan Lyu, Ruoxi Jia",
      conference: "USENIX Security, 2023",
      website: "https://www.usenix.org/system/files/sec23fall-prepub-99-zeng-yi.pdf",
      highlights: []
    },
    {
      title: "Learning-to-Learn to Guide Random Search: Derivative-Free Meta Blackbox Optimization on Manifold",
      authors: "Bilgehan Sel, Ahmad Al-Tawaha, Yuhao Ding, Ruoxi Jia, Bo Ji, Javad Lavaei, Ming Jin",
      conference: "Learning for Dynamics and Control Conference (L4DC), 2023",
      highlights: ["Oral presentation"]
    },
    {
      title: "LAVA: Data Valuation without Pre-Specified Learning Algorithms",
      authors: "Hoang Anh Just*, Feiyang Kang*, Jiachen T. Wang, Yi Zeng, Myeongseob Ko, Ming Jin, Ruoxi Jia",
      conference: "International Conference on Learning Representations (ICLR), 2023",
      openreview: "https://openreview.net/forum?id=JJuP86nBl4q&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3DICLR.cc%2F2023%2FConference%2FAuthors%23your-submissions)",
      highlights: ["Spotlight presentation"]
    },
    {
      title: "Towards Robustness Certification Against Universal Perturbations",
      authors: "Yi Zeng*, Zhouxing Shi*, Ming Jin, Feiyang Kang, Lingjuan Lyu, Cho-Jui Hsieh, Ruoxi Jia",
      conference: "International Conference on Learning Representations (ICLR), 2023",
      openreview: "https://openreview.net/forum?id=7GEvPKxjtt&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3DICLR.cc%2F2023%2FConference%2FAuthors%23your-submissions)",
      highlights: []
    },
    {
      title: "Data Banzhaf: A Robust Data Valuation Framework for Machine Learning",
      authors: "Jiachen T. Wang, Ruoxi Jia",
      conference: "International Conference on Artificial Intelligence and Statistics (AISTATS), 2023",
      arxiv: "https://arxiv.org/abs/2205.15466",
      highlights: ["Oral presentation"]
    },
    {
      title: "On Solution Functions of Optimization: Universal Approximation and Covering Number Bounds",
      authors: "Ming Jin, Vanshaj Khattar, Bilgehan Sel, Harshal Kaushik, Ruoxi Jia",
      conference: "Thirty-Seventh AAAI Conference on Artificial Intelligence (AAAI), 2023",
      arxiv: "https://arxiv.org/abs/2212.01314",
      highlights: ["Oral presentation"]
    },
    {
      title: "Certifiably Robust Neural ODE with Learning-based Barrier Function",
      authors: "Runing Yang, Ruoxi Jia, Xiangyu Zhang, Ming Jin",
      conference: "IEEE Control Systems Letters, 2023",
      website: "https://ieeexplore.ieee.org/document/10097636",
      highlights: []
    },
    {
      title: "ModelPred: A Framework for Predicting Trained Model from Training Data",
      authors: "Yingyan Zeng, Jiachen T. Wang, Si Chen, Hoang Anh Just, Ran Jin, Ruoxi Jia",
      conference: "IEEE Conference on Secure and Trustworthy Machine Learning (SaTML), 2023",
      openreview: "https://openreview.net/forum?id=I03uWXMi6oD",
      highlights: []
    },
    {
      title: "Variance Reduced Shapley Value Estimation for Trustworthy Data Valuation",
      authors: "Mengmeng Wu, Ruoxi Jia, Changle Lin, Wei Huang, Xiangyu Chang",
      conference: "Computers and Operations Research, 2023",
      arxiv: "https://arxiv.org/abs/2210.16835",
      highlights: []
    },
    {
      title: "Decision-Focused Learning for Inverse Noncooperative Games: Generalization Bounds and Convergence Analysis",
      authors: "Ahmad Al-Tawaha, Harshal Kaushik, Bilgehan Sel, Ruoxi Jia, Ming Jin",
      conference: "IFAC World Congress, 2023",
      highlights: []
    },
    {
      title: "A Theoretical Analysis of Using Gradient Data for Sobolev Training in RKHS",
      authors: "Zain ul Abdeen, Ruoxi Jia, Vassilis Kekatos, Ming Jin",
      conference: "IFAC World Congress, 2023",
      highlights: []
    }
    ];
    
    export default publications;