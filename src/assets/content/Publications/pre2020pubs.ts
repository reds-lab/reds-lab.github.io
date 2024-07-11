const publications = [
    {
    title: "Efficient Task-Specific Data Valuation for Nearest Neighbor Algorithms",
    authors: "Ruoxi Jia, David Dao, Boxin Wang, Frances Ann Hubis, Nezihe Merve Gurel, Bo Li, Ce Zhang, Costas J. Spanos, Dawn Song",
    conference: "International Conference on Very Large Data Bases (VLDB), 2019",
    arxiv: "https://arxiv.org/abs/1908.08619"
    },
    {
    title: "Towards Efficient Data Valuation Based on the Shapley Value",
    authors: "Ruoxi Jia*, David Dao*, Boxin Wang, Frances Ann Hubis, Nick Hynes, Nezihe Merve Gurel, Bo Li, Ce Zhang, Dawn Song, Costas Spanos",
    conference: "International Conference on Artificial Intelligence and Statistics (AISTATS), 2019",
    arxiv: "https://arxiv.org/abs/1902.10275"
    },
    {
    title: "Delving into Bootstrapping for Differential Privacy",
    authors: "Ruoxi Jia, Bo Li, Chaowei Xiao, Dawn Song",
    conference: "ICML Workshop on Security and Privacy of Machine Learning, 2019",
    website: "https://ruoxijia.info/wp-content/uploads/2020/03/bootstrapDP.pdf"
    },
    {
    title: "Leveraging Unlabeled Data for Watermark Removal of Deep Neural Networks",
    authors: "Xinyun Chen, Wenxiao Wang, Yiming Ding, Chris Bender, Ruoxi Jia, Bo Li and Dawn Song",
    conference: "ICML Workshop on Security and Privacy of Machine Learning, 2019",
    website: "https://ruoxijia.info/wp-content/uploads/2020/03/watermark_removal_icml19_workshop.pdf"
    },
    {
    title: "On the Weak Neural Dependence Phenomenon in Deep Learning",
    authors: "Jiayao Zhang, Ruoxi Jia, Bo Li, Dawn Song",
    conference: "NeurIPS Workshop on Deep Learning Theory, 2018",
    website: "https://ruoxijia.info/wp-content/uploads/2020/03/weak_neuron.pdf"
    },
    {
    title: "Poisoning Attacks on Data-Driven Utility Learning in Games",
    authors: "Ruoxi Jia*, Ioannis Konstantakopoulos*, Bo Li, Costas Spanos",
    conference: "American Control Conference, 2018",
    website: "https://ruoxijia.info/wp-content/uploads/2020/03/IoT_poisoning.pdf"
    },
    {
    title: "A Framework for Privacy-Preserving Data Publishing with Enhanced Utility for Cyber-Physical Systems",
    authors: "Fisayo Caleb Sangogboye*, Ruoxi Jia*, Tianzhen Hong, Costas Spanos, Mikkel Baun Kjaergaard",
    conference: "ACM Transactions on Sensor Networks, 2018",
    website: "https://ruoxijia.info/wp-content/uploads/2020/03/a30-sangogboye.pdf"
    },
    {
    title: "Design Automation for Smart Building Systems",
    authors: "Ruoxi Jia*, Baihong Jin*, Ming Jin, Yuxun Zhou, Ioannis Konstantakopoulos, Han Zou, Joyce Kim, Dan Li, Weixi Gu, Reza Arghandeh, Pierluigi Nuzzo, Stefano Schiavon, Alberto L. Sangiovanni-Vincentelli, Costas Spanos",
    conference: "Proceedings of the IEEE, 2018",
    website: "https://ruoxijia.info/wp-content/uploads/2020/03/design_automation_smart_building.pdf"
    },
    {
    title: "Advanced Building Control via Deep Reinforcement Learning",
    authors: "Ruoxi Jia, Ming Jin, Kaiyu Sun, Tianzhen Hong, Costas Spanos",
    conference: "International Conference on Applied Energy, 2018",
    website: "https://ruoxijia.info/wp-content/uploads/2020/03/building_drl.pdf"
    },
    {
    title: "Buildings.Occupants: a Modelica package for modeling occupant behaviour in buildings",
    authors: "Zhe Wang, Tianzhen Hong, Ruoxi Jia",
    conference: "Journal of Building Performance Simulation, 2018",
    website: "https://ruoxijia.info/wp-content/uploads/2020/03/occupants.pdf"
    },
    {
    title: "BISCUIT: Building Intelligent System Customer Investment Tools",
    authors: "Ming Jin, Ruoxi Jia, Hari Prasanna Das, Wei Feng, Costas Spanos",
    conference: "International Conference on Applied Energy, 2018",
    website: "https://ruoxijia.info/wp-content/uploads/2020/03/biscuit.pdf"
    },
    {
    title: "Virtual Occupancy Sensing: Your Energy Can Tell Whether You Are Present",
    authors: "Ming Jin, Ruoxi Jia, Costas Spanos",
    conference: "IEEE Transactions on Mobile Computing, 2017",
    website: "https://ruoxijia.info/wp-content/uploads/2020/03/smart_meter_presence.pdf"
    },
    {
    title: "Data Analytics and Optimization of an Ice-Based Energy Storage System for Commercial Buildings",
    authors: "Na Luo, Tianzhen Hong, Hui Li, Ruoxi Jia, Wenguo Weng",
    conference: "Applied Energy, 2017",
    website: "https://ruoxijia.info/wp-content/uploads/2020/03/AE2017.pdf"
    },
    {
    title: "Towards a Theory of Free-Lunch Privacy in Cyber-Physical Systems",
    authors: "Ruoxi Jia, Roy Dong, Prashanth Ganesh, Shankar Sastry, Costas Spanos",
    conference: "Annual Allerton Conference on Communication, Control, and Computing, 2017",
    website: "https://ruoxijia.info/wp-content/uploads/2020/03/allerton17_final.pdf"
    },
    {
    title: "PAD: Protecting Anonymity in Publishing Building Related Datasets",
    authors: "Ruoxi Jia*, Fisayo Caleb Sangogboye*, Tianzhen Hong, Costas Spanos, Mikkel Baun Kjaergaard",
    conference: "ACM International Conference on Systems for Energy-Efficient Built Environments, 2017",
    website: "https://ruoxijia.info/wp-content/uploads/2020/03/pad-buildsys-final.pdf"
    },
    {
    title: "Optimal Sensor-Controller Codesign for Privacy in Dynamical Systems",
    authors: "Ruoxi Jia, Roy Dong, Shankar Sastry, Costas Spanos",
    conference: "IEEE Conference on Decision and Control, 2017",
    website: "https://ruoxijia.info/wp-content/uploads/2020/03/cdc17_final.pdf"
    },
    {
    title: "Privacy-Enhanced Architecture for Occupancy-based HVAC Control",
    authors: "Ruoxi Jia, Roy Dong, Shankar Sastry, Costas Spanos",
    conference: "ACM/IEEE International Conference on Cyber-Physical Systems, 2017",
    website: "https://ruoxijia.info/wp-content/uploads/2020/03/iccps17.pdf"
    },
    {
    title: "Occupancy Modeling in Shared Spaces of Buildings: A Queueing Approach",
    authors: "Ruoxi Jia, Costas Spanos",
    conference: "Journal of Building Performance Simulation, 2016",
    website: "https://ruoxijia.info/wp-content/uploads/2020/03/bps_occupancy2016.pdf"
    },
    {
    title: "MapSentinel: Can the Knowledge of Space Use Improve Indoor Tracking Further?",
    authors: "Ruoxi Jia, Ming Jin, Han Zou, Yigitcan Yesilata, Lihua Xie, Costas Spanos",
    conference: "Sensors, 2016",
    website: "https://ruoxijia.info/wp-content/uploads/2020/03/mapsetinel-jia.pdf"
    },
    {
    title: "A Fully Unsupervised Nonintrusive Load Monitoring Framework",
    authors: "Ruoxi Jia, Yang Gao, Costas Spanos",
    conference: "IEEE International Conference on Smart Grid Communications, 2015",
    website: "https://ruoxijia.info/wp-content/uploads/2020/03/sgc2015_final.pdf"
    },
    {
    title: "APEC: Auto Planner for Efficient Configuration of Indoor Positioning System",
    authors: "Ming Jin, Ruoxi Jia, Costas Spanos",
    conference: "International Conference on Mobile Ubiquitous Computing, Systems, Services and Technologies, 2015",
    website: "https://ruoxijia.info/wp-content/uploads/2020/03/apec.pdf"
    },
    {
    title: "SoundLoc: Accurate Room-level Indoor Localization Using Acoustic Signatures",
    authors: "Ruoxi Jia, Ming Jin, Zilong Chen, Costas Spanos",
    conference: "IEEE International Conference on Automation Science and Engineering, 2015",
    website: "https://ruoxijia.info/wp-content/uploads/2020/03/SoundLoc_case2015.pdf"
    },
    {
    title: "An iBeacon Assisted Indoor Localization and Tracking System",
    authors: "Zhenghua Chen, Qingchang Zhu, Hao Jiang, Han Zou, Yeng Chai Soh, Lihua Xie, Ruoxi Jia, Costas Spanos",
    conference: "International Conference on Information Processing in Sensor Networks, 2015",
    website: "https://ruoxijia.info/wp-content/uploads/2020/03/ipsn_zhenghua.pdf"
    },
    {
    title: "Presencesense: Zero-training Algorithm for Individual Presence Detection Based on Power Monitoring",
    authors: "Ming Jin, Ruoxi Jia, Zhaoyi Kang, Ioannis Konstantakopoulos, Costas Spanos",
    conference: "ACM International Conference on Systems for Energy-Efficient Built Environments, 2014",
    website: "https://ruoxijia.info/wp-content/uploads/2020/03/presencesense.pdf"
    },
    {
    title: "Environmental Sensing by Wearable Device for Indoor Activity and Location Estimation",
    authors: "Ming Jin, Han Zou, Kevin Weekly, Ruoxi Jia, Alexandre M Bayen, Costas Spanos",
    conference: "Annual Conference of the IEEE Industrial Electronics Society, 2014",
    website: "https://ruoxijia.info/wp-content/uploads/2020/03/environmental_sensing-1.pdf"
    }
];

export default publications;