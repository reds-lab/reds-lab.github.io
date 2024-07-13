import React from 'react';
import '../styles/Research.css';  // Assuming you have this CSS file
import { renderPublications } from './Publications';
import { dataAttributionAndInfluence, dataSelection, activeLearning } from '../assets/content/Research/data-centric'

import ResearchLinks from '../components/ResearchLinks';


const DataCentricAI: React.FC = () => {
  return (
    <div className="research-page">
      <header className="research-header">
        <h1 className="h2">Data-Centric AI</h1>
      </header>
      <article className="research-content">
      <ResearchLinks/>

        <h2>Better Data, Better Models</h2>
        <p>
          Data-centric AI is a paradigm that shifts focus from algorithm sophistication to data quality enhancement. 
          This approach recognizes that even the most advanced models can be rendered ineffective when fed with subpar data, 
          thus emphasizing the critical importance of curated, representative, and high-quality datasets.
        </p>

        <p>
          Despite growing awareness of data's importance, the field lacks a formal understanding of data's impact on 
          machine learning outcomes, principled, scalable methods for selecting data to build superior models, and 
          conceptual frameworks and practical systems to incentivize the creation and sharing of fresh, high-quality data. 
          To address these challenges, our research pursues the following key areas:
        </p>

        <ol>
          <li>
            <strong>Data Attribution (or Valuation):</strong> We develop methods to quantify the impact of data on AI model 
            performance and behaviors, providing insights into the value of individual data sources.
          </li>
          <li>
            <strong>Data Selection:</strong> Our work explores strategic approaches to forming optimal training datasets, 
            improving model performance through careful pruning of redundant data and mixing of diverse corpora.
          </li>
          <li>
            <strong>Data Synthesis and Augmentation:</strong> In practice, data can be simultaneously abundant for typical 
            scenarios and scarce for rare and long-tail cases. We investigate techniques to supplement these rare cases 
            through advanced synthesis and augmentation methods.
          </li>
          <li>
            <strong>Active Learning:</strong> We focus on reducing the labeling costs associated with supervised learning 
            by developing intelligent systems that identify the most informative data points for labeling, maximizing 
            learning efficiency.
          </li>
        </ol>

        <p>
          By advancing these interconnected topics, we aim to establish a comprehensive framework for Data-centric AI, 
          enabling the development of more efficient, robust, and reliable AI systems that fully leverage the potential 
          of high-quality data.
        </p>

        <h3>NeurIPS 2023 Tutorial</h3>
        <p>
        Presentations and Resources: Tutorial on "<strong>Data Contribution Estimation for Machine Learning</strong>” Ruoxi gave at NeurIPS 2023: <a href="https://slideslive.com/39013503?time=1380" target="_blank" rel="noopener noreferrer">
          Link</a> (starting from 23:00)
        </p>
        <h2>Selected Publications</h2>
        <h3>Data Attribution and Influence</h3>
        {renderPublications(dataAttributionAndInfluence)}

        <h3>Data Selection</h3>
        {renderPublications(dataSelection)}

        <h3>Active Learning</h3>
        {renderPublications(activeLearning)}
      </article>
    </div>
  );
};

export default DataCentricAI;