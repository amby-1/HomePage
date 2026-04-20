// Publications data
// - category: one of the 8 categories below
//   学術論文 / 招待講演 / 解説記事 / 国際会議論文（査読付き） / 国際会議発表 / 国内会議発表 / 受賞 / その他
// - pdf: relative path (e.g., "pdfs/paper.pdf") or full URL
// - doi: DOI string (e.g., "10.1145/...") or full URL
// - bibtex: BibTeX entry string

const publicationsData = [
  {
    year: 2026,
    category: "国際会議論文（査読付き）",
    citation: "Kenji Sekiguchi, Norisato Kanai, Yuta Tsukamoto, Hiroyuki Nabae, Takahiro Aruga, Takeshi Takaki, Naoyuki Takesue, Yusuke Ota and Gen Endo, ''Quantitative Evaluation of Energy Savings in a 3-DOF Manipulator via Lightweighting with Plastic Structural Parts,'' 2026 IEEE/SICE International Symposium on System Integration (SII), pp. 1634-1639, 2026.",
    doi: "10.1109/SII64115.2026.11404533",
    //pdf: "pdfs/iccv2024_ambe.pdf",
    bibtex: `@INPROCEEDINGS{11404533,
  author={Sekiguchi, Kenji and Kanai, Norisato and Tsukamoto, Yuta and Nabae, Hiroyuki and Aruga, Takahiro and Takaki, Takeshi and Takesue, Naoyuki and Ota, Yusuke and Endo, Gen},
  booktitle={2026 IEEE/SICE International Symposium on System Integration (SII)}, 
  title={Quantitative Evaluation of Energy Savings in a 3-DOF Manipulator via Lightweighting with Plastic Structural Parts}, 
  year={2026},
  pages={1634-1639},
  doi={10.1109/SII64115.2026.11404533}}
}`
  },
  {
    year: 2026,
    category: "学術論文",
    citation: "Sourajit Mukherjee, Kunal Desarda, Yuichi Ambe and Takeshi Takaki, ''A monolithic mechanosensitive 3D-printed jaw with piezoresistive sensing for grasp force estimation'', Engineering Research Express, Vol. 8, No. 7, 075237, 2026.",
    doi: "10.1088/2631-8695/ae4cf6",
    bibtex: `@article{mukherjee2026monolithic,
  title={A monolithic mechanosensitive 3D-printed jaw with piezoresistive sensing for grasp force estimation},
  author={Mukherjee, Sourajit and Desarda, Kunal and Ambe, Yuichi and Takaki, Takeshi},
  journal={Engineering Research Express},
  volume={8},
  number={7},
  pages={075237},
  year={2026},
  doi={10.1088/2631-8695/ae4cf6}
}`
  },
  {
    year: 2026,
    category: "学術論文",
    citation: "Yuanhao Bao and Takeshi Takaki, ''Quasi-isostrength beam with an integrated tuned mass damper for vibration suppression'', Engineering Research Express, Vol. 8, No. 7, 075412, 2026.",
    doi: "10.1088/2631-8695/ae5b3e",
    bibtex: `@article{bao2026quasi,
  title={Quasi-isostrength beam with an integrated tuned mass damper for vibration suppression},
  author={Bao, Yuanhao and Takaki, Takeshi},
  journal={Engineering Research Express},
  volume={8},
  number={7},
  pages={075412},
  year={2026},
  doi={10.1088/2631-8695/ae5b3e}
}`
  },
  {
    year: 2026,
    category: "学術論文",
    citation: "Yuichi Ambe, Alvin So and Shinya Aoi, ''Asymmetry in Skipping Enhances Viability Against Control Input Noise'', Advanced Robotics Research, e202500120, 2026.",
    doi: "10.1002/adrr.202500120",
    bibtex: `@article{ambe2026asymmetry,
  title={Asymmetry in Skipping Enhances Viability Against Control Input Noise},
  author={Ambe, Yuichi and So, Alvin and Aoi, Shinya},
  journal={Advanced Robotics Research},
  pages={e202500120},
  year={2026},
  doi={10.1002/adrr.202500120}
}`
  },
  {
    year: 2026,
    category: "その他",
    citation: "Koki Nishizaki, Mau Adachi, Yuichi Ambe, Yushi Tsuruse, Ryo Iba, Hiroko Oshima, Takashi Suzuki, Yasuo Higurashi, Kei Mochizuki and Shinya Aoi, ''Gait transition mechanism from quadrupedal to bipedal locomotion in the Japanese macaque based on inverted pendulum'', eLife Reviewed Preprint, Version 1, 2026.",
    doi: "10.7554/eLife.109826.1",
    pdf: "https://cdn.elifesciences.org/preprints/109826/elife-preprint-109826-v1.pdf",
    bibtex: `@misc{nishizaki2026gait,
  title={Gait transition mechanism from quadrupedal to bipedal locomotion in the Japanese macaque based on inverted pendulum},
  author={Nishizaki, Koki and Adachi, Mau and Ambe, Yuichi and Tsuruse, Yushi and Iba, Ryo and Oshima, Hiroko and Suzuki, Takashi and Higurashi, Yasuo and Mochizuki, Kei and Aoi, Shinya},
  howpublished={eLife Reviewed Preprint, Version 1},
  year={2026},
  doi={10.7554/eLife.109826.1}
}`
  },
  {
    year: 2026,
    category: "学術論文",
    citation: "岡田 佳都，横田 将輝，安部 祐一，小島 史秀，宮地 俊幸，原井 洋明，澤田 宏一，松浦 健志，大野 和則，田所 諭，『橋梁点検を支援する通信中継ドローンのための電波マップに基づく最適飛行経路の実時間計画法』，日本ロボット学会誌，Vol.44，No.1，pp.63-71，2026．",
    doi: "10.7210/jrsj.44.63",
    pdf: "https://www.jstage.jst.go.jp/article/jrsj/44/1/44_44_63/_pdf",
    bibtex: `@article{okada2026radiomap,
  title={Radio-Map-Based Realtime Flight Path Planning for Repeater Drones in Bridge Inspection},
  author={Okada, Yoshito and Yokota, Yoshiki and Ambe, Yuichi and Kojima, Fumihide and Miyachi, Toshiyuki and Harai, Hiroaki and Sawada, Hirokazu and Matsuura, Takeshi and Ohno, Kazunori and Tadokoro, Satoshi},
  journal={Journal of the Robotics Society of Japan},
  volume={44},
  number={1},
  pages={63-71},
  year={2026},
  doi={10.7210/jrsj.44.63}
}`
  },
  {
    year: 2026,
    category: "国内会議発表",
    citation: "鈴木 拓歩，岡本 耕太，安部 祐一，清野 健，青井 伸也，『神経筋骨格モデルとStuart-Landau振動子を用いたストライド時間のゆらぎ特性の解析』，第38回自律分散システム・シンポジウム，1A1D-1，pp.40-41，2026年2月18-19日．"
  },
  {
    year: 2026,
    category: "国内会議発表",
    citation: "岡本 蒼生，安達 真永，冨田 望，安部 祐一，青井 伸也，『Virtual Pivot Point制御に基づく前傾した二足歩行の動力学解析』，第38回自律分散システム・シンポジウム，1A1D-3，pp.44-45，2026年2月18-19日．"
  },
  {
    year: 2026,
    category: "国内会議発表",
    citation: "上村 知也，加藤 耕平，安達 真永，安部 祐一，佐野 明人，青井 伸也，松野 文俊，『動物の階層的な神経系を模したチーター型ロボットの適応的走行の強化学習』，第38回自律分散システム・シンポジウム，2A1B-2，pp.87-92，2026年2月18-19日．"
  },
  {
    year: 2026,
    category: "その他",
    citation: "原口 雄世，『流体噴射で浮上するドローンの軽量化に向けた姿勢受動安定化の幾何設計アプローチ』，第21回竸基弘賞授賞式 阪神淡路大震災継承事業・講演会，兵庫県立神戸生活創造センター，2026年1月10日．"
  },
//  {     
//    year: 2024,
//    category: "招待講演",
//    citation: "TEST, ''TESTと社会の未来'', 特別講演会, 2024.",
//    bibtex: `@misc{ambe2024invited,
//  title={AIと社会の未来},
//  author={安部, 太郎},
//  howpublished={特別講演会（招待講演）},
//  year={2024}
//}`
//  },
//  {
//    year: 2023,
//    category: "解説記事",
//    citation: "TEST, ''TEST技術の動向'', 学会誌解説, 2023.",
//    pdf: "pdfs/article2023_ambe.pdf",
//    bibtex: `@article{ambe2023article,
//  title={TEST技術の動向},
//  author={TEST, 太郎},
//  journal={学会誌},
//  note={解説},
//  year={2023}
//}`
//  },
//  {
//    year: 2023,
//    category: "受賞",
//    citation: "TEST, ''若手奨励賞'', 第10回AI学会, 2023.",
//    bibtex: `@misc{yamada2023award,
//  title={TEST若手奨励賞},
//  author={TEST, 花子},
//  howpublished={第10回AI学会},
//  year={2023}
//}`
//  },
];
