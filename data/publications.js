// Publications data
// - category: one of the 8 categories below
//   学術論文 / 招待講演 / 解説記事 / 国際会議論文（査読付き） / 国際会議発表 / 国内会議発表 / 受賞 / その他
// - pdf: relative path (e.g., "pdfs/paper.pdf") or full URL
// - doi: DOI string (e.g., "10.1145/...") or full URL
// - bibtex: BibTeX entry string

const publicationsData = [
  {
    year: 2024,
    category: "国際会議論文（査読付き）",
    citation: "Taro Ambe, Hanako Yamada, 'New Method for AI', ICCV 2024.",
    doi: "10.0000/iccv.2024.0001",
    pdf: "pdfs/iccv2024_ambe.pdf",
    bibtex: `@inproceedings{ambe2024newmethod,
  title={New Method for AI},
  author={Ambe, Taro and Yamada, Hanako},
  booktitle={Proceedings of ICCV},
  year={2024}
}`
  },
  {
    year: 2024,
    category: "学術論文",
    citation: "Ichiro Suzuki, Taro Ambe, 'Study on Something', Journal of AI, Vol.10, No.2, 2024.",
    doi: "10.0000/jai.2024.0002",
    pdf: "pdfs/journal2024_suzuki.pdf",
    bibtex: `@article{suzuki2024study,
  title={Study on Something},
  author={Suzuki, Ichiro and Ambe, Taro},
  journal={Journal of AI},
  volume={10},
  number={2},
  year={2024}
}`
  },
  {
    year: 2024,
    category: "国内会議発表",
    citation: "田中健太, 佐藤次郎, '深層学習の応用', 第20回情報科学大会, 2024.",
    pdf: "pdfs/domestic2024_tanaka.pdf",
    bibtex: `@inproceedings{tanaka2024domestic,
  title={深層学習の応用},
  author={田中, 健太 and 佐藤, 次郎},
  booktitle={第20回情報科学大会},
  year={2024}
}`
  },
  {
    year: 2024,
    category: "招待講演",
    citation: "安部太郎, 'AIと社会の未来', 特別講演会, 2024.",
    bibtex: `@misc{ambe2024invited,
  title={AIと社会の未来},
  author={安部, 太郎},
  howpublished={特別講演会（招待講演）},
  year={2024}
}`
  },
  {
    year: 2023,
    category: "国際会議論文（査読付き）",
    citation: "Jiro Sato, Taro Ambe, 'Human-AI Interaction Design', CHI 2023.",
    doi: "10.0000/chi.2023.0003",
    pdf: "pdfs/chi2023_sato.pdf",
    bibtex: `@inproceedings{sato2023hai,
  title={Human-AI Interaction Design},
  author={Sato, Jiro and Ambe, Taro},
  booktitle={Proceedings of CHI},
  year={2023}
}`
  },
  {
    year: 2023,
    category: "解説記事",
    citation: "安部太郎, '最新AI技術の動向', 学会誌解説, 2023.",
    pdf: "pdfs/article2023_ambe.pdf",
    bibtex: `@article{ambe2023article,
  title={最新AI技術の動向},
  author={安部, 太郎},
  journal={学会誌},
  note={解説},
  year={2023}
}`
  },
  {
    year: 2023,
    category: "受賞",
    citation: "山田花子, '若手奨励賞', 第10回AI学会, 2023.",
    bibtex: `@misc{yamada2023award,
  title={若手奨励賞},
  author={山田, 花子},
  howpublished={第10回AI学会},
  year={2023}
}`
  },
  {
    year: 2022,
    category: "その他",
    citation: "安部太郎, 'AIの未来（招待講演）', 〇〇シンポジウム, 2022.",
    bibtex: `@misc{ambe2022other,
  title={AIの未来（招待講演）},
  author={安部, 太郎},
  howpublished={〇〇シンポジウム},
  year={2022}
}`
  }
];
