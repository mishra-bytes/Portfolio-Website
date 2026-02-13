/**
 * Project data with case study fields.
 * Populate each field to enable the corresponding section on the project detail page.
 * Fields left empty will not be rendered.
 */
export const projects = [
  {
    slug: 'ml-project-1',
    title: 'ML Project 1',
    desc: 'A machine learning project using Python and Scikit-learn. This project demonstrates advanced feature engineering, model selection, and evaluation techniques on real-world datasets. It also includes a Jupyter notebook and a web dashboard for results visualization.',
    about:
      'This project explores advanced ML workflows, including data preprocessing, feature engineering, model selection, and evaluation. The results are visualized using interactive charts.',
    github: 'https://github.com/your-github/project1',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    stack: ['Python', 'Scikit-learn', 'Matplotlib', 'Seaborn'],

    // Case study fields — populate to enable corresponding sections
    problemContext: '',
    datasetInfo: '',
    approach: '',
    engineeringDecisions: '',
    evaluation: '',
    limitations: '',
    futureImprovements: '',

    results: [
      {
        img: 'https://placehold.co/400x200/222/fff?text=Accuracy+Graph',
        caption: 'Model Accuracy',
      },
      {
        img: 'https://placehold.co/400x200/222/fff?text=Confusion+Matrix',
        caption: 'Confusion Matrix',
      },
    ],
  },
  {
    slug: 'data-analysis-dashboard',
    title: 'Data Analysis Dashboard',
    desc: 'Interactive dashboard for data analysis with Pandas and Plotly. The dashboard allows users to upload CSV files, run exploratory data analysis, and visualize trends and correlations interactively.',
    about:
      'A web-based dashboard for data analysis, supporting CSV upload, EDA, and interactive visualizations. Built with Python, Pandas, and Plotly.',
    github: 'https://github.com/your-github/project2',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    stack: ['Python', 'Pandas', 'Streamlit', 'Matplotlib', 'Seaborn', 'Power BI'],
    problemContext: '',
    datasetInfo: '',
    approach: '',
    engineeringDecisions: '',
    evaluation: '',
    limitations: '',
    futureImprovements: '',
    results: [
      {
        img: 'https://placehold.co/400x200/222/fff?text=EDA+Chart',
        caption: 'Exploratory Data Analysis',
      },
    ],
  },
  {
    slug: 'ai-chatbot',
    title: 'AI Chatbot',
    desc: 'Conversational AI chatbot using TensorFlow and NLP. The bot can answer questions, perform sentiment analysis, and be integrated into websites or messaging apps.',
    about:
      'A chatbot built with TensorFlow and NLP techniques. It can answer questions, analyze sentiment, and be deployed on various platforms.',
    github: 'https://github.com/your-github/project3',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    stack: ['Python', 'TensorFlow', 'Keras'],
    problemContext: '',
    datasetInfo: '',
    approach: '',
    engineeringDecisions: '',
    evaluation: '',
    limitations: '',
    futureImprovements: '',
    results: [
      {
        img: 'https://placehold.co/400x200/222/fff?text=Chat+Example',
        caption: 'Chatbot Conversation',
      },
    ],
  },
  {
    slug: 'sql-data-pipeline',
    title: 'SQL Data Pipeline',
    desc: 'Automated ETL pipeline using SQL and Python scripts. This project extracts, transforms, and loads data from multiple sources into a data warehouse, with monitoring and logging.',
    about:
      'A robust ETL pipeline for data warehousing, featuring automated extraction, transformation, and loading with monitoring.',
    github: 'https://github.com/your-github/project4',
    image:
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
    stack: ['SQL', 'Python', 'Pandas', 'SQLite', 'IBM Cloud'],
    problemContext: '',
    datasetInfo: '',
    approach: '',
    engineeringDecisions: '',
    evaluation: '',
    limitations: '',
    futureImprovements: '',
    results: [
      {
        img: 'https://placehold.co/400x200/222/fff?text=ETL+Flow',
        caption: 'ETL Flow Diagram',
      },
    ],
  },
  {
    slug: 'ml-project-2',
    title: 'ML Project 2',
    desc: 'A deep learning project using TensorFlow and Keras. This project focuses on image classification and object detection, with a custom CNN architecture and transfer learning techniques.',
    about:
      'A deep learning project for image classification and object detection, using TensorFlow and Keras.',
    github: 'https://github.com/your-github/project5',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    stack: ['Python', 'TensorFlow', 'Keras', 'NumPy'],
    problemContext: '',
    datasetInfo: '',
    approach: '',
    engineeringDecisions: '',
    evaluation: '',
    limitations: '',
    futureImprovements: '',
    results: [
      {
        img: 'https://placehold.co/400x200/222/fff?text=Model+Performance',
        caption: 'Model Performance',
      },
    ],
  },
];
