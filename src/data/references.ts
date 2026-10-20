// Numbered references shown under "References" and as [n] next to baseline column labels.
// The order here is the numbering order.
export type Reference = {
  key: string;
  authors: string;
  title: string;
  venue: string;
};

export const REFERENCES: Reference[] = [
  {
    key: "wen2023hard",
    authors:
      "Yuxin Wen, Neel Jain, John Kirchenbauer, Micah Goldblum, Jonas Geiping, and Tom Goldstein",
    title:
      "Hard prompts made easy: Gradient-based discrete optimization for prompt tuning and discovery",
    venue: "Advances in Neural Information Processing Systems (NeurIPS), 2023",
  },
  {
    key: "bai2025qwen25vl",
    authors:
      "Shuai Bai, Keqin Chen, Xuejing Liu, Jialin Wang, Wenbin Ge, Sibo Song, Kai Dang, Peng Wang, Shijie Wang, Jun Tang, Humen Zhong, Yuanzhi Zhu, Mingkun Yang, Zhaohai Li, Jianqiang Wan, Pengfei Wang, Wei Ding, Zheren Fu, Yiheng Xu, Jiabo Ye, Xi Zhang, Tianbao Xie, Zesen Cheng, Hang Zhang, Zhibo Yang, Haiyang Xu, and Junyang Lin",
    title: "Qwen2.5-VL technical report",
    venue: "arXiv preprint arXiv:2502.13923, 2025",
  },
  {
    key: "wang2025taming",
    authors:
      "Jiangshan Wang, Junfu Pu, Zhongang Qi, Jiayi Guo, Yue Ma, Nisha Huang, Yuxin Chen, Xiu Li, and Ying Shan",
    title: "Taming rectified flow for inversion and editing",
    venue:
      "Proceedings of the International Conference on Machine Learning (ICML), 2025",
  },
  {
    key: "li2025five",
    authors: "Minghan Li, Chenxi Xie, Yichen Wu, Lei Zhang, and Mengyu Wang",
    title:
      "FiVE-Bench: A fine-grained video editing benchmark for evaluating emerging diffusion and rectified flow models",
    venue:
      "Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV), 2025",
  },
];

export function referenceNumber(key: string): number {
  const index = REFERENCES.findIndex((ref) => ref.key === key);
  if (index < 0)
    throw new Error(`references.ts: unknown reference key "${key}"`);
  return index + 1;
}
