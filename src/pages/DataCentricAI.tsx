// DataCentricAI.tsx
import React, { useEffect } from 'react';
import '../styles/Research.css';

const DataCentricAI: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://slideslive.com/embed_presentation.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const embedVideo = () => {
      if (window.SlidesLiveEmbed) {
        window.SlidesLiveEmbed = window.SlidesLiveEmbed;
        const embed = new window.SlidesLiveEmbed('presentation-embed-73959', {
          presentationId: '39013503',
          autoPlay: false,
          verticalEnabled: true,
          allowHiddenControlsWhenPaused: true,
          hideTitle: true,
          startTime: 1320, // Start time in seconds (22:00)
        });
      }
    };

    const script = document.createElement('script');
    script.src = 'https://slideslive.com/embed_presentation.js';
    script.async = true;
    script.onload = embedVideo;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="research-page">
      <header className="research-header">
        <h1 className="h2">Data-Centric AI</h1>
      </header>
      <article className="research-content">
        <p>
          Data-centric AI is a paradigm that shifts focus from algorithm sophistication to data quality enhancement.
          This approach recognizes that even the most advanced models can be rendered ineffective when fed with subpar data,
          thus emphasizing the critical importance of curated, representative, and high-quality datasets.
        </p>
        <p>
          Despite growing awareness of data's importance, the field lacks a formal understanding of data's impact on machine learning outcomes,
          principled, scalable methods for selecting data to build superior models, and conceptual frameworks and practical systems to incentivize
          the creation and sharing of fresh, high-quality data. To address these challenges, our research pursues the following key areas:
        </p>
        <ul>
          <li>
            <strong>Data Attribution (or Valuation):</strong> We develop methods to quantify the impact of data on AI model performance and behaviors,
            providing insights into the value of individual data sources.
          </li>
          <li>
            <strong>Data Selection:</strong> Our work explores strategic approaches to forming optimal training datasets,
            improving model performance through careful pruning of redundant data and mixing of diverse corpora.
          </li>
          <li>
            <strong>Data Synthesis and Augmentation:</strong> In practice, data can be simultaneously abundant for typical scenarios and scarce for rare and long-tail cases.
            We investigate techniques to supplement these rare cases through advanced synthesis and augmentation methods.
          </li>
          <li>
            <strong>Active Learning:</strong> We focus on reducing the labeling costs associated with supervised learning by developing intelligent systems
            that identify the most informative data points for labeling, maximizing learning efficiency.
          </li>
        </ul>
        <p>
          By advancing these interconnected topics, we aim to establish a comprehensive framework for Data-centric AI,
          enabling the development of more efficient, robust, and reliable AI systems that fully leverage the potential of high-quality data.
        </p>
        <div id="presentation-embed-73959" className="slp my-auto"></div>
        <p>
          A tutorial I gave at NeurIPS 2023, starting from 22:00: <a href="https://nips.cc/virtual/2023/tutorial/73959" target="_blank" rel="noopener noreferrer">https://nips.cc/virtual/2023/tutorial/73959</a>
        </p>
        <h2>Selected Publications</h2>
        <h3>Data Attribution & Influence</h3>
        <ul>
          <li>
            Towards Efficient Data Valuation Based on the Shapley Value [<a href="https://arxiv.org/abs/1902.10275" target="_blank" rel="noopener noreferrer">arXiv</a>]<br />
            Ruoxi Jia*, David Dao*, Boxin Wang, Frances Ann Hubis, Nick Hynes, Nezihe Merve Gurel, Bo Li, Ce Zhang, Dawn Song, Costas Spanos<br />
            International Conference on Artificial Intelligence and Statistics (AISTATS), 2019
          </li>
          {/* Add more publications */}
        </ul>
        <h3>Data Selection</h3>
        <ul>
          <li>
            Performance Scaling via Optimal Transport: Enabling Data Selection from Partially Revealed Sources [<a href="https://arxiv.org/abs/2306.01911" target="_blank" rel="noopener noreferrer">arXiv</a>]<br />
            Feiyang Kang*, Hoang Anh Just*, Anit Kumar Sahu, Ruoxi Jia<br />
            Conference on Neural Information Processing Systems (NeurIPS), 2023<br />
            Adopted by Amazon for data selection
          </li>
          {/* Add more publications */}
        </ul>
        <h3>Active Learning</h3>
        <ul>
          <li>
            One-Round Active Learning through Data Utility Learning and Proxy Models [<a href="https://openreview.net/forum?id=r1g0kqtQ6M" target="_blank" rel="noopener noreferrer">openreview</a>]<br />
            Jiachen T. Wang, Si Chen, Ruoxi Jia<br />
            Transactions on Machine Learning Research, 2023
          </li>
          {/* Add more publications */}
        </ul>
      </article>
    </div>
  );
};

export default DataCentricAI;